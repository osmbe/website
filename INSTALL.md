# Install

## Requirements

- Hugo
- Node.js

## Run locally

### Generate `output.css`

```cmd
npm install
npx @tailwindcss/cli -i "./assets/css/input.css" -o "./assets/css/output.css" --watch
```

### Run Hugo server

```cmd
hugo server --disableFastRender
```

## Linting

- [Stylelint](https://stylelint.io/): `npx stylelint assets/css/input.css`
- [Markdownlint](https://github.com/markdownlint/markdownlint): `mdl content`
- Prettier: `npx prettier . --check`
