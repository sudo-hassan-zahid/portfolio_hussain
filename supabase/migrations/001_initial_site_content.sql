create table if not exists public.hero_images (
  id serial primary key,
  image_url text not null,
  alt text not null,
  caption_name varchar(160) not null,
  caption_title varchar(160) not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.experiences (
  id serial primary key,
  period varchar(120) not null,
  role varchar(180) not null,
  firm varchar(180) not null,
  description text not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.educations (
  id serial primary key,
  title varchar(220) not null,
  issuer varchar(220) not null,
  year varchar(80) not null,
  detail varchar(120) not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.certifications (
  id serial primary key,
  title varchar(220) not null,
  issuer varchar(220) not null,
  year varchar(80) not null,
  detail varchar(120) not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id serial primary key,
  quote text not null,
  author varchar(180) not null,
  title varchar(220) not null,
  rating integer not null default 5,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.contact_submissions (
  id serial primary key,
  name varchar(180) not null,
  email varchar(220) not null,
  phone varchar(80) not null,
  case_type varchar(180) not null,
  message text not null,
  notification_status varchar(80) not null default 'pending',
  notification_error text,
  created_at timestamptz not null default now()
);

insert into public.hero_images (
  id, image_url, alt, caption_name, caption_title, is_active, sort_order
) values (
  1,
  '/images/lawyer/law1.jpg',
  'Hussain Zahid - Legal Expert',
  'Hussain Zahid',
  'Shariah & Law Specialist',
  true,
  0
) on conflict (id) do update set
  image_url = excluded.image_url,
  alt = excluded.alt,
  caption_name = excluded.caption_name,
  caption_title = excluded.caption_title,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into public.experiences (
  id, period, role, firm, description, is_active, sort_order
) values
  (
    1,
    '2024 - Present',
    'Certified Tax Advisor',
    'FBR Tax Filing & Consultancy',
    'Advising individuals and businesses on NTN registration, FBR tax filing, returns, filer status, and regular tax compliance.',
    true,
    0
  ),
  (
    2,
    '2023 - Present',
    'Court Practice',
    'RWP/ISB Session Courts',
    'Practicing before Rawalpindi and Islamabad session courts with a focus on criminal matters, case preparation, drafting, and client representation.',
    true,
    1
  ),
  (
    3,
    '2023 - Present',
    'Licensed Mediator',
    'Dispute Resolution Practice',
    'Supporting clients through structured mediation and settlement-focused dispute resolution where practical, efficient outcomes are possible.',
    true,
    2
  )
on conflict (id) do update set
  period = excluded.period,
  role = excluded.role,
  firm = excluded.firm,
  description = excluded.description,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into public.educations (
  id, title, issuer, year, detail, is_active, sort_order
) values (
  1,
  'BA/LLB (Hons) Shariah and Law',
  'International Islamic University Islamabad',
  'Education',
  'Shariah & Law',
  true,
  0
) on conflict (id) do update set
  title = excluded.title,
  issuer = excluded.issuer,
  year = excluded.year,
  detail = excluded.detail,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into public.certifications (
  id, title, issuer, year, detail, is_active, sort_order
) values
  (
    1,
    'Certified Tax Advisor',
    'Institute of Corporate and Taxation (ICT) Pakistan',
    'Certification',
    'Tax Advisory',
    true,
    0
  ),
  (
    2,
    'Licensed Mediator',
    'Mediation Practice',
    'Active',
    'ADR',
    true,
    1
  ),
  (
    3,
    'RWP/ISB Session Courts Practice',
    'Rawalpindi & Islamabad',
    'Active',
    'Session Courts',
    true,
    2
  )
on conflict (id) do update set
  title = excluded.title,
  issuer = excluded.issuer,
  year = excluded.year,
  detail = excluded.detail,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  updated_at = now();

insert into public.testimonials (
  id, quote, author, title, rating, is_active, sort_order
) values
  (
    1,
    'Hussain handles our FBR business tax filing with excellent work quality, speed, and accuracy. The process has been smooth and reliable from start to finish.',
    'Khawar Shehzad',
    'Owner, Golden Five Star General Store, Rawalpindi',
    5,
    true,
    0
  ),
  (
    2,
    'He helped with FBR NTN business tax filing, returns, and tax consultancy from business registration through regular filings. I was confused at the start, but he made everything clear.',
    'Jalal Khan Khattak',
    'Owner, Khattak Super Store, Rawalpindi',
    5,
    true,
    1
  ),
  (
    3,
    'I needed to become a filer and was very anxious about the process. Hussain handled the work calmly and made it much easier than I expected.',
    'Rehan Nafees',
    'Government Employee',
    5,
    true,
    2
  )
on conflict (id) do update set
  quote = excluded.quote,
  author = excluded.author,
  title = excluded.title,
  rating = excluded.rating,
  is_active = excluded.is_active,
  sort_order = excluded.sort_order,
  updated_at = now();

select setval(pg_get_serial_sequence('public.hero_images', 'id'), coalesce(max(id), 1), true) from public.hero_images;
select setval(pg_get_serial_sequence('public.experiences', 'id'), coalesce(max(id), 1), true) from public.experiences;
select setval(pg_get_serial_sequence('public.educations', 'id'), coalesce(max(id), 1), true) from public.educations;
select setval(pg_get_serial_sequence('public.certifications', 'id'), coalesce(max(id), 1), true) from public.certifications;
select setval(pg_get_serial_sequence('public.testimonials', 'id'), coalesce(max(id), 1), true) from public.testimonials;
select setval(pg_get_serial_sequence('public.contact_submissions', 'id'), coalesce(max(id), 1), true) from public.contact_submissions;
