import { readFileSync } from "node:fs";
import { createClient } from "@supabase/supabase-js";

loadEnvFile(".env.local");

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const adminEmail = process.env.ADMIN_EMAILS?.split(",")[0]?.trim();
const adminPassword = process.env.ADMIN_BOOTSTRAP_PASSWORD;

if (!supabaseUrl) {
  fail("Missing NEXT_PUBLIC_SUPABASE_URL.");
}

if (!serviceRoleKey) {
  fail("Missing SUPABASE_SERVICE_ROLE_KEY.");
}

if (!adminEmail) {
  fail("Missing ADMIN_EMAILS.");
}

if (!adminPassword) {
  fail("Missing ADMIN_BOOTSTRAP_PASSWORD.");
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

const { data: created, error: createError } = await supabase.auth.admin.createUser({
  email: adminEmail,
  password: adminPassword,
  email_confirm: true,
});

if (!createError) {
  console.log(`Created admin user: ${created.user.email}`);
  process.exit(0);
}

if (!isDuplicateUserError(createError)) {
  fail(createError.message);
}

const user = await findUserByEmail(adminEmail);

if (!user) {
  fail(`Admin user already exists, but could not find ${adminEmail} to update it.`);
}

const { error: updateError } = await supabase.auth.admin.updateUserById(user.id, {
  password: adminPassword,
  email_confirm: true,
});

if (updateError) {
  fail(updateError.message);
}

console.log(`Updated admin user password: ${adminEmail}`);

async function findUserByEmail(email) {
  let page = 1;

  while (true) {
    const { data, error } = await supabase.auth.admin.listUsers({
      page,
      perPage: 100,
    });

    if (error) {
      fail(error.message);
    }

    const match = data.users.find(
      (user) => user.email?.toLowerCase() === email.toLowerCase(),
    );

    if (match) {
      return match;
    }

    if (data.users.length < 100) {
      return null;
    }

    page += 1;
  }
}

function isDuplicateUserError(error) {
  return (
    error.status === 422 ||
    error.code === "email_exists" ||
    error.message.toLowerCase().includes("already")
  );
}

function loadEnvFile(path) {
  try {
    for (const line of readFileSync(path, "utf8").split("\n")) {
      const trimmed = line.trim();

      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        continue;
      }

      const index = trimmed.indexOf("=");
      const key = trimmed.slice(0, index);
      let value = trimmed.slice(index + 1);

      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      process.env[key] ??= value;
    }
  } catch {
    // Allow normal environment variables to be used without .env.local.
  }
}

function fail(message) {
  console.error(message);
  process.exit(1);
}
