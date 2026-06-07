# AIppocampus.com

Static website source for [www.aippocampus.com](https://www.aippocampus.com/).

This repository is intentionally separate from the main
[AIppocampus](https://github.com/Sapientropic/AIppocampus) repository so the
public website can evolve without adding website assets and SEO pages to the
runtime/code/docs project.

## Structure

```text
site/                       # static GitHub Pages payload
  index.html
  getting-started/index.html
  architecture/index.html
  source-backed-continuity/index.html
  privacy/index.html
  for-agents/index.html
  evidence/index.html
  llms.txt
  robots.txt
  sitemap.xml
  assets/
.github/workflows/pages.yml # deploys site/ to GitHub Pages
```

## Boundaries

- Keep source code, runtime contracts, tests, and canonical project docs in the
  main AIppocampus repository.
- Keep private memory artifacts out of this repository: raw rollouts,
  clean-source exports, registry data, sync bundles, local paths, tokens, and
  credentials.
- Publish only public-safe static site assets.

## Deploy

Push to `main`. The Pages workflow uploads `site/` as the GitHub Pages artifact.

The custom domain is:

```text
www.aippocampus.com
```
