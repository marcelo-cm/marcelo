---
title: My favourite VSCode Extensions, linting rules, and scripts
subtitle: How I make my life easier when programming!
date: Nov 2024
visibility: public
---

# My VSCode Extension Toolkit

1. **ESLint** — Linting tool that identifies and fixes JavaScript/TypeScript code issues based on customizable rules.
2. **Prettier** — Opinionated code formatter to enforce consistent styling across your files automatically.
3. **Git Graph** — Visualize your Git repository history and perform Git actions directly in VSCode.
4. **GitHub Copilot** — AI-powered code completion and suggestions to speed up your coding process.
5. **HTML CSS Support** — Enhances VSCode by adding CSS class and ID autocompletion in HTML files.
6. **Million Lint** — Integrates Million.js linting rules to optimize React code for performance.
7. **vscode-pets** — Adds virtual pets to your editor for a fun and playful coding experience.
8. **Pretty TypeScript Errors** — Improves readability of TypeScript error messages with a clearer UI.
9. **Python** — Essential extension for Python development, providing IntelliSense, debugging, and more.
10. **Reactjs Code Snippets** — Handy snippets for creating React and Redux boilerplate code faster.
11. **Ruby Solargraph** — Provides IntelliSense, auto-completion, and linting support for Ruby projects.
12. **Tailwind CSS IntelliSense** — Autocompletes Tailwind classes and provides linting and hover previews.

# My Prettier config

```JSON
{
  "plugins": [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss"
  ],
  "tailwindFunctions": ["clsx", "tw"],
  "singleQuote": true,
  "importOrder": [
    "^react$|^react/(.*)$",
    "^@radix-ui/react-icons|^lucide-react",
    "^@?\\w",
    "^(.*)/(ui|components)/(.*)$",
    "^(.*)/hooks/(.*)$",
    "^@/(.*)$",
    "^[./]"
  ],
  "importOrderSortSpecifiers": true,
  "importOrderSeparation": true,
  "importOrderGroupNamespaceSpecifiers": true
}
```

# Package.json Scripts

```JSON
"scripts": {
  "dev": "next && tsc && prettier --check .",
  "build": "next build",
  "start": "next start",
  "lint": "prettier --check . && tsc",
  "lint:type": "tsc",
  "lint:fix": "prettier --write . && type",
  "format": "prettier --write .",
  "analyze": "ANALYZE=true next build",
  "clean": "rm -rf .next/ && next build"
},
```
