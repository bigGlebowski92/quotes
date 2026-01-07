# GitHub Actions Workflows

This directory contains CI/CD workflows for the Quotes app.

## Workflows

### 1. CI (`ci.yml`)
Main continuous integration workflow that runs on every push and pull request.

**What it does:**
- ✅ Checks out the code
- ✅ Sets up Node.js 20.x
- ✅ Installs dependencies with `npm ci`
- ✅ Runs ESLint
- ✅ Runs all unit tests
- ✅ Builds the project

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests to `main` or `develop` branches

### 2. Test Coverage (`test-coverage.yml`)
Generates and uploads test coverage reports.

**What it does:**
- ✅ Runs tests with coverage
- ✅ Uploads coverage to Codecov (optional)

**Triggers:**
- Push to `main` branch
- Pull requests to `main` branch

### 3. Deploy Preview (`deploy.yml`)
Builds and tests pull requests (can be extended for deployment).

**What it does:**
- ✅ Runs all CI checks
- ✅ Builds the project
- 🔄 Can be extended to deploy preview environments

**Triggers:**
- Pull requests to `main` branch

## Running CI Locally

To simulate CI checks locally before pushing:

```bash
npm run ci
```

This runs:
1. Linting
2. Tests
3. Build

## Adding Status Badges

After your first successful CI run, you can add badges to your README:

```markdown
![CI](https://github.com/bigGlebowski92/quotes/workflows/CI/badge.svg)
```

## Extending CI/CD

### Deploy to Vercel

To add automatic deployment, uncomment the Vercel deployment step in `deploy.yml` and add secrets:
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

### Deploy to Other Platforms

Similar patterns can be added for:
- Netlify
- AWS
- Docker Hub
- etc.

