# Install

## Requirements

- Hugo
- Node.js

## Run locally

**Generate `output.css`**

```cmd
npx tailwindcss -i "./assets/css/input.css" -o "./assets/css/output.css" --watch
```

**Run Hugo server**

```cmd
hugo server --disableFastRender
```