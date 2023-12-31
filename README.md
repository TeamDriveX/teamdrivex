This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Team Drive X | CLI command need to local development

At first you need to generate Google API Client ID and Client Secret and set the callback url to

```sh
http://localhost:3000/api/auth/callback/google
```

Then you need to create an .env file in your local repository and save those value like .env.example file

```sh
cp .env.example .env
```

After that, you need to start docker and need to run these command

```sh
docker compose up --build -d
```

Now run these command in your app container

```sh
docker-compose exec -it app sh
npx prisma migrate dev --name init
```

If you want to close or down the service then

```sh
docker compose down
```

All these commands are for the very first time, if you want to re-run the whole application. Then you need to run just

```sh
docker compose up -d
```
