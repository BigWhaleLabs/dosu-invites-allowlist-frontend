# Dosu Invites allowlist admin frontend

Use this website to allow addresses to mint Dosu Invites and to update the merkle tree root of the allowlist in the Dosu Invites contract.

## Local launch

1. Install dependencies with `yarn`
2. Create `.env`
3. Run the server with `yarn start`

## Available Scripts

- `yarn start` — runs the app in the development mode
- `yarn build` — builds the app for production to the `docs` folder
- `yarn lint` — checks if the code is linted and formatted
- `yarn generate-css-types` — generates the CSS types for `tailwind-css`

## Environment variables

| Variable               | Description                       |
| ---------------------- | --------------------------------- |
| `VITE_APP_PASSWORD`    | Password for the protected routes |
| `VITE_APP_BACKEND_URL` | URL of the backend service        |
