# Star Wars Search People App

A console application to search star wars characters built with TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started, clone the repository and install the dependencies:
- docker run -p 3000:3000 clonardo/socketio-backend
- git clone https://github.com/Adithyat/StarWarsSearchPeople.git
- cd your-repo
- npm install \
*If using a different URL for backend setup a .env file at root of app with the following contents: \
SOCKET_URL= <API_URL>

## Usage
To run the application, use the following command:
- npm run build
- npm run start

## Development
For development purposes, you can use ts-node to run the application directly from the TypeScript source files:
- npm run qs

## Scripts
- npm run start: Runs the compiled JavaScript application.
- npm run build: Compiles TypeScript files to JavaScript.
- npm run lint: Runs ESLint on the TypeScript files.
- npm run lint:fix: Runs ESLint and automatically fixes issues.
- npm run qs: Runs the application using ts-node.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add new feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
