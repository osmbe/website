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

SuperLinter

- Stylelint: `npx stylelint assets/css/input.css`
- Prettier: `npx prettier . --check`
