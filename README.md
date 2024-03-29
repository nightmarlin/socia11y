# SOCIA11Y

<https://socia11y.lwmiller.co.uk>

## Using SociA11Y

Go to <https://socia11y.web.app/>. That's it. That's the post! If you aren't a dev then you can stop
reading now! We're a web app, so as long as you have a browser you should be able to use it!

> Testing has only been carried out on Google Chrome due to resource limitations. We recommend using
> Google Chrome for best results.

## Section Authors

Files and folders omitted from this diagram should be assumed to belong to their parent folder's author. If left unspecified, folders and their contents should be assumed to belong to their parent folder's author.

```yaml
socia11y/:
- frontend/: George Moore
  - src/:
    - assets/:
    - components/:
      - AnalysisBar.vue: Lewis Miller
      - OptionCard.vue: Luke Halpin
    - config/:
    - images/:
    - plugins/:
    - router/:
    - store/: Lewis Miller
    - utils/:  Lewis Miller
    - views/:
- functions/: Lewis Miller
  - src/:
    - explanations/: Luke Halpin
    - image-processing/:
    - text-extraction/:
    - text-processing/: Luke Halpin
    - types/:
      - metrics.ts: Luke Halpin & Lewis Miller
```

## Required dev dependencies

- NVM
  - "Node Version Manager" - guarantees Node.JS version
  - Install from
    - Linux: <https://github.com/nvm-sh/nvm>
    - Windows: <https://github.com/coreybutler/nvm-windows>
  - Once installed, run `nvm use` in project root dir
- Yarn Package Manager
  - NPM equivalent - faster and more reliable
  - Install from <https://yarnpkg.com/>
- Vue CLI
  - provides yarn function availability
  - `yarn global add @vue/cli`
- GCloud CLI
  - allows us to control gcloud from our machines
  - Install from <https://cloud.google.com/sdk/docs/install>
- Firebase Tools
  - allows us to work with GCP firebase functions
  - Install using `npm install -g firebase-tools`
- Postman
  - REST API request maker - good for testing function endpoints
  - Install at <https://www.postman.com>

## VSCode extensions

- ESLint & TSLint: static analysis
- Prettier - Code Formatter: auto-formatter
- Vetur: VSCode
- Optional - recommended for QoL:
  - markdownlint: markdown doc writing
  - Markdown All In One: markdown doc writing
  - Better Comments: comment highlighting
  - GitLens: inline git history viewer
  - Error Lens: inline error highlighter

## Useful Commands

| Command                          | Description                                                     |
| -------------------------------- | --------------------------------------------------------------- |
| yarn build:frontend              | Build only the frontend                                         |
| yarn build:functions             | Build only the backend                                          |
| yarn full-deploy                 | Deploy all contents of repo in current state to firebase        |
| yarn full-install                | Install all dependencies in all packages                        |
| yarn serve:frontend              | Serve only the frontend                                         |
| yarn serve:functions             | Serve only the backend                                          |
| yarn start                       | Emulate firebase hosting and functions for frontend and backend |
| firebase deploy --only functions | Build and deploy firebase functions                             |

> Domain-specific commands can be found in the corresponding README

## Other Docs

- [frontend](./frontend/README.md)
- [backend](./functions/README.md)
