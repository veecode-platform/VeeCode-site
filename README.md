# VeeCode Platform Site

The official marketing website for **VeeCode Platform** - an Internal Developer Platform (IDP) built on Backstage. This Next.js-based site showcases product information, plugin catalog, pricing, and platform capabilities with multi-language support.

## 🌐 Live Sites

- **Production:** [platform.vee.codes](https://platform.vee.codes) (from `main` branch)
- **Staging:** [next.platform.vee.codes](https://next.platform.vee.codes) (from `develop` branch)

## 🚀 Quick Start

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Serve static build locally
yarn static
```

## 🛠️ Tech Stack

- **Framework:** Next.js 15 with App Router & Static Export
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4
- **i18n:** next-intl (English & Portuguese)
- **Deployment:** GitHub Pages (dual-environment)

## 📂 Project Structure

```
src/
├── app/[locale]/       # Locale-based routing (en, pt)
├── components/         # Reusable UI components
├── data/plugins/       # Plugin catalog data
├── i18n/              # Internationalization config
└── services/          # API integration
```

## 📖 Documentation

For detailed architecture, conventions, and deployment workflows, see **[CLAUDE.md](./CLAUDE.md)**.

## 🔄 Deployment

This repository uses a dual-environment workflow:

- **`develop`** → Auto-deploys to staging (`next.platform.vee.codes`)
- **`main`** → Auto-deploys to production (`platform.vee.codes`)

See [CLAUDE.md - Deployment & Environments](./CLAUDE.md#deployment--environments) for the complete workflow.

## 📝 License

Proprietary - VeeCode Platform
