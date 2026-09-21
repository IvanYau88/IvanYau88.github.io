# Ivan Yau - Portfolio

Personal portfolio site built with [Astro](https://astro.build) and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deployment

Deployed to [GitHub Pages](https://pages.github.com) at https://ivanyau88.github.io/.
The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist/` on every push to `main`.
In the repository settings, Pages > Build and deployment > Source must be set to "GitHub Actions".
