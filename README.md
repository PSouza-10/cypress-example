# Cypress example

Repository with example cypress configuration and sample test runs, may become a template later


## Technologies

- Vite.js for fast module bundling
- React as client side library
- Fastify as server side library
- Mantine for UI

## Setup

```bash
git clone https://github.com/PSouza-10/cypress-example

cd cypress-example

# For yarn
yarn

# For npm
npm i
```

## Usage

All `cy:*` commands run cypress tests or open test suites, `cy:open-ct` opens component testing suite, `cy:open` opens integration testing suite, `cy:test-ct` runs component tests, and `cy:test` runs integration tests.

If you get weird timeout errors when running this, try running `npx cypress verify`.

On push to master, all tests run and cypress is deployed to heroku. Configure $HEROKU_EMAIL and $HEROKU_APP_NAME secrets according to your needs. Checkout how to get a heroku API key for th $HEROKU_API_KEY [here](https://help.heroku.com/PBGP6IDE/how-should-i-generate-an-api-key-that-allows-me-to-use-the-heroku-platform-api)

## License

Use this however you want




