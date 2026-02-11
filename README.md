# OxyGym Backend (oxygym-be)

This is the backend API for the OxyGym application, built with Node.js, Express, TypeScript, Prisma, and PostgreSQL.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Docker](https://www.docker.com/) & Docker Compose (for the database)

## Project Structure

```
oxygym-be/
├── docker/             # Docker configuration files
├── prisma/             # Prisma schema and migrations
├── src/                # Source code
│   ├── lib/            # Shared libraries (e.g., Prisma client)
│   └── index.ts        # Application entry point
├── docker-compose.yaml # Docker Compose for local development
└── package.json        # Project dependencies and scripts
```

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd oxygym-be
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the example environment file to create your local `.env` file:

```bash
cp .env.example .env
```

The `.env` file should contain the following (default values based on `docker-compose.yaml`):

```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/oxygym-db?schema=public"
DIRECT_URL="postgresql://user:password@localhost:5432/oxygym-db?schema=public"
```

### 4. Database Setup

Start the PostgreSQL database using Docker Compose:

```bash
docker-compose up -d
```

Apply database migrations:

```bash
npx prisma migrate dev
```

Generate the Prisma client (this runs automatically after install, but good to know):

```bash
npx prisma generate
```

### 5. Running the Server

Start the development server:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

## API Endpoints

- **GET /**: Health check, returns "Express + TypeScript + Prisma Server is running!"
- **GET /users**: Fetch all users
- **POST /users**: Create a new user
  - Body: `{ "email": "user@example.com", "name": "John Doe" }`

## Scripts

- `npm run dev`: Starts the server in development mode with Nodemon.
- `npm start`: Starts the server (same as dev in current config).
- `npm run build`: Compiles TypeScript to JavaScript.
- `npm run postinstall`: Generates Prisma client.
