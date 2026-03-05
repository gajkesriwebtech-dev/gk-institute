# Production Deployment (Dokploy + Hostinger VPS)

## Required Environment Variables

Set these in Dokploy for the Next.js service:

- `NODE_ENV=production`
- `NEXT_PUBLIC_APP_URL=https://institute.gkwebtech.cloud`
- `MONGODB_URI=<your-mongodb-connection-string>`
- `MONGODB_DB_NAME=<your-database-name>`
- `JWT_SECRET=<strong-random-secret>`
- `INTERNAL_ADMIN_SECRET=<strong-random-secret>`
- `STRIPE_SECRET_KEY=<stripe-secret-key>`
- `STRIPE_WEBHOOK_SECRET=<stripe-webhook-signing-secret>`
- `EMAIL_HOST=smtp.hostinger.com`
- `EMAIL_PORT=465`
- `EMAIL_USER=contact@gkwebtech.cloud`
- `EMAIL_PASS=<hostinger-email-password>`
- `CONTACT_RECEIVER_EMAIL=contact@gkwebtech.cloud`

Optional (recommended for stable cookie domain behavior):

- `AUTH_COOKIE_DOMAIN=institute.gkwebtech.cloud`

## Dokploy Setup Steps

1. Create a new application from this repository.
2. Use Node runtime and set build/start commands:
   - Build: `npm ci && npm run build`
   - Start: `npm run start`
3. Expose container port `3000`.
4. Configure all environment variables listed above.
5. Add persistent logging/monitoring in Dokploy.
6. Deploy and verify `/api/health` returns status `ok`.

## Domain Setup Notes

1. Point `institute.gkwebtech.cloud` DNS record to the VPS IP.
2. Attach the domain in Dokploy to this app.
3. Keep `NEXT_PUBLIC_APP_URL` exactly equal to the production HTTPS domain.
4. If auth cookie issues occur across subdomains, set `AUTH_COOKIE_DOMAIN` explicitly.

## SSL Requirement

- SSL/TLS must be enabled before production traffic.
- Cookies are configured with `secure: true` in production, so HTTPS is mandatory.
- Ensure auto-renewal of certificates is enabled in Dokploy.

## MongoDB Service Requirement

- MongoDB must be reachable from the VPS over the network.
- Whitelist VPS IP in MongoDB network access rules.
- Use a dedicated production database user with least privileges.
- Confirm startup connectivity by checking `/api/health` and auth/contact endpoints.

