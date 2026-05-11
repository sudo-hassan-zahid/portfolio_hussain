# Site Bugs And Performance Audit

Last reviewed: 2026-05-11

## Fixed In This Pass

- **Hero image bypassed optimization.** `components/hero.tsx` used `unoptimized` and `quality={100}`, which forced a heavier image path and disabled Next.js resizing/compression. Removed `unoptimized` and lowered quality to `82`.
- **Scroll progress hydrated React and updated state on scroll.** `components/scroll-progress.tsx` listened to every page scroll and called React state updates. Replaced it with CSS scroll-linked animation, so it ships no client JavaScript.
- **Testimonials carousel shipped unnecessary client JavaScript.** `components/testimonials.tsx` used `useEffect`, `setInterval`, scroll mutation, duplicated the testimonial list three times, and tracked unused state. Rebuilt it as a server component with native horizontal scroll.
- **ESLint failed on performance utilities.** `lib/performance.ts` used `any` and aliased `this`, so `npm run lint` failed. Rewrote the helpers with typed function signatures and no `this` aliasing.
- **Unused component state/variables created lint warnings.** Removed the unused testimonial index state and the unused `catch (error)` binding.
- **Typography helper classes were referenced but not defined.** Components used classes such as `type-display`, `type-section`, and `type-body`, but `app/globals.css` did not define them. Added explicit responsive type utilities.
- **Design radius was inconsistent and overly large.** Replaced main `rounded-xl` and `rounded-2xl` card/control surfaces with `rounded-lg` to keep the UI more consistent and predictable.
- **Next image cache TTL was too low for static local assets.** `next.config.ts` used a 60-second image cache TTL. Raised it to one year for immutable optimized images.
- **Remote image policy was overly broad.** `next.config.ts` allowed optimized images from any HTTPS hostname even though the site uses local assets. Removed the wildcard remote pattern.
- **Some visible content had corrupted punctuation.** Rebuilt the experience section with clean ASCII date ranges, preventing mojibake-like text from appearing to users.

## Still Needs Product Input

- **Contact form is fake.** `components/contact-form.tsx` simulates a submit with a 2-second delay and never sends data to an API or email service. This is a functional bug, but it needs a destination before it can be completed.
- **Placeholder contact details may be wrong.** Phone numbers and emails look generic, so users may not be able to reach the lawyer.
- **Testimonials may be unverified.** The names and companies may be placeholders. Real legal-service testimonials should be verified before launch.
- **Claims may need substantiation.** Stats like `500+ Cases Won`, `8+ Years Exp.`, and `100% Commitment` should be confirmed for legal marketing accuracy.

## Performance Notes

- The page is statically prerendered by Next.js, which is good for speed.
- The biggest avoidable browser cost was client hydration in below-the-fold sections. Testimonials and scroll progress no longer add hydration work.
- The only meaningful interactive client islands left are navigation and the contact form.
- The hero image is small on disk, but it still benefits from Next image optimization because the browser can receive the right format and dimensions.
