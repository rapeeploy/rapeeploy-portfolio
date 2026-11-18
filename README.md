# Rapeeploy Jamsri — Software Engineer Portfolio

Modern Dark portfolio built with Next.js 15, React 19, TypeScript and Tailwind CSS 4.

## Local development

Requires Node.js 22.

```bash
npm install
npm run dev
```

## GitHub Pages

The project uses static export. Set repository **Settings → Pages → Build and deployment → Source: GitHub Actions**, then merge the feature branch into `main` to deploy.

The GitHub Actions workflow builds with `GITHUB_PAGES=true`, setting the base path to `/rapeeploy-portfolio`.

## Content

Content is based on the supplied resume. Update `src/app/page.tsx` to revise project and experience details. The SciFit project currently uses a styled placeholder until the original photo is added to the repository.
