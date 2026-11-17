# Bhumiti Gohel

Portfolio for Bhumiti Gohel, a software developer in New Jersey who builds healthcare and enterprise backends. The site is a single page — about, experience, selected work, education, and a contact form — plus a printable résumé.

The copy comes from her résumé. Public GitHub projects are linked only where a repository exists.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3847](http://localhost:3847).

## Pages

- `/` — portfolio
- `/resume` — the same résumé, formatted for the browser and for print
- `/Bhumiti-Gohel-Resume.pdf` — the original PDF

To change the words on the site, edit `src/content/profile.ts`. Replace `public/Bhumiti-Gohel-Resume.pdf` if the PDF changes.

The contact form does not store messages. It opens the visitor’s email app with a draft to gohelbhumiti1@gmail.com.

## Deploy on Vercel

Vercel hosts Next.js for free and gives the project a hostname such as `bhumiti-portfolio.vercel.app`. That subdomain is the free address. Registering a custom domain (for example `bhumitigohel.com`) is separate and is not included here.

1. Push this repository to GitHub.
2. Sign in at [vercel.com](https://vercel.com).
3. Choose **Add New… → Project** and import the repository.
4. Leave the framework preset on Next.js and deploy. No environment variables are required.
5. After the deploy finishes, open the `*.vercel.app` URL Vercel shows.
6. If you later buy a domain, add it under the project’s **Settings → Domains**.
