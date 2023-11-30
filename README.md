# SvelteKit Template for TWA's

## Creating a project

- You need to create a new repo using this template.
- update pacakge.json ( project name )
- update all `.env.*` files with required values ( eg PUBLIC_BASE_URL)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build // Dev build with default .env file

npm run build:uat // uat build picks env.uat

npm run build:cug // cug build picks env.cug

npm run build:prod // prod build picks env.prod
```

You can preview the production build with `npm run preview`.
