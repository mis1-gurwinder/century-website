# Century website

Static site for thecentury.in, by Dinero FoodWorks. Single page (`index.html`) with hash sections, plus `assets/`.

## Deploy on Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare dashboard > Workers & Pages > Create > Pages > Connect to Git, choose this repo.
3. Build command: none. Build output directory: `/` (root).
4. Add the custom domain `thecentury.in` under the Pages project > Custom domains.

`_redirects` keeps old WordPress addresses (/about/, /products/, /services/, /contact/) pointing to the matching section. `_headers` sets caching and basic security headers.

## Before go-live
- Add the Google Analytics 4 tag to `index.html` `<head>` if analytics is wanted.
- Forms: enquiries and call-back requests are sent by Resend through `functions/api/`. Before go-live:
  1. In Resend, add and verify the domain `thecentury.in` (Resend gives DNS records to add in Cloudflare).
  2. In Cloudflare Pages > Settings > Environment variables, add `RESEND_API_KEY` (encrypted).
  3. Emails go to century@thecentury.in. The sender is website@thecentury.in, so that address must be allowed by the verified domain.
- Confirm the toll-free number and email in the contact section.

## Editing
Products are defined in `assets/js/main.js` (the `P` list). Images are in `assets/images/`. Card and layout styles are in `assets/js/styles/`.
