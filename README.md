# Example Auth React

## Links

- Production: https://example-auth-react.azobu.app
- Netlify: https://azobu-example-auth-react.netlify.com
  - Dashboard: https://app.netlify.com/sites/azobu-example-auth-react/overview

## Stack

- React
  - Axios for REST API
  - xstyled with Emotion.sh
  - React Router
  - React Hook Form
  - React Spinner
- JWT Decode
- Netlify
- Cloudflare
- Uniregistry

## Features

- Register new user
  - Name
  - Email
  - Password
- Login to existing user
  - Email
  - Password
  - Retrieve authorization token with JWT
- Get authenticated user profile
- Get all users
- Search user by name from input text field
  - Request each character typing or submitted

## Usage

### Setup Environment Variables

```sh
./setup.sh
```

**Development**

Edit `.env` file directly:

```txt
REACT_APP_API_URL=http://localhost:8000
```

**Production**

Setup in respective platform like Netlify:

```txt
REACT_APP_API_URL = https://example-auth-express.azobu.app
```

### Install Dependencies

```sh
yarn
```

### Run Server

```sh
yarn dev
```

```sh
yarn start
```

## License

MIT
