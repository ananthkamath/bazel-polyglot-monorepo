# App XYZ

A JavaScript utility application featuring calculator and string manipulation functions.

## Requirements

- Node.js: 24.4.1
- pnpm: 10.13.1

## Installation

```bash
pnpm install
```

## Usage

Run the full application:

```bash
pnpm start
```

Run only calculator demos:

```bash
pnpm calculate
```

Run with watch mode:

```bash
pnpm dev
```

## Features

- **Calculator**: Basic arithmetic operations (add, subtract, multiply, divide, power, square root)
- **String Utils**: String manipulation (reverse, capitalize, vowel counting)
- System information display
- Command-line argument parsing with minimist
- Lodash utility functions

## ⚠️ Security Note

This application includes **intentionally vulnerable dependencies** for security testing purposes. See `../SECURITY_VULNERABILITIES.md` for details.

To check vulnerabilities:
```bash
pnpm audit
```

**DO NOT use in production** without updating dependencies.

