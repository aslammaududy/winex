# Winex - Folder Explorer with Elysia and Vue

Winex is a folder explorer application built with the Elysia framework for the backend and Vue.js for the frontend. It provides a tree view of folders and their subfolders, allowing users to explore hierarchical folder structures.

## Features

- **Backend**: Built with [Elysia](https://elysiajs.com/) and uses [Drizzle ORM](https://orm.drizzle.team/) for database interactions.
- **Frontend**: Built with [Vue 3](https://vuejs.org/) and [Vite](https://vitejs.dev/) for a fast and modern development experience.
- **Folder Tree**: Displays a hierarchical folder structure.
- **Subfolder View**: Dynamically loads and displays subfolders when a folder is clicked.

## Project Structure

```
winex/
├── src/                # Backend source code
│   ├── db.ts           # Database connection setup
│   ├── index.ts        # Main entry point for the backend
│   ├── schema.ts       # Database schema definition
│   ├── plugins/        # Elysia plugins for API routes
│   └── types/          # TypeScript interfaces
├── fe/                 # Frontend source code
│   ├── src/            # Vue.js application
│   ├── public/         # Static assets
│   ├── index.html      # Frontend entry point
│   └── vite.config.js  # Vite configuration
├── package.json        # Backend dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── README.md           # Project documentation
```

## Backend Setup

### Prerequisites

- [Bun](https://bun.sh/) installed
- PostgreSQL database

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/aslammaududy/winex.git
   cd winex
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Configure the database connection in `src/db.ts`:
   ```ts
   const client = postgres('postgres<username>:<password>@<host>:<port>/<database>');
   ```

4. Start the backend server:
   ```bash
   bun run dev
   ```

   The backend will be available at `http://localhost:3000`.

## Frontend Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Steps

1. Navigate to the frontend directory:
   ```bash
   cd fe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will be available at `http://localhost:5173`.

## API Endpoints

### `/folders`
- **Method**: GET
- **Description**: Fetches all folders and returns them in a tree structure.

### `/folders/:id/subfolders`
- **Method**: GET
- **Description**: Fetches subfolders of a specific folder by its ID.

## Frontend Components

- **FolderTree**: Displays the folder tree and handles folder click events.
- **TreeNode**: Recursive component for rendering folder nodes.
- **SubFolder**: Displays the list of subfolders for the selected folder.

## Development

### Backend
To start the backend development server:
```bash
bun run dev
```

### Frontend
To start the frontend development server:
```bash
npm run dev
```

## Environment Configuration

To configure the database connection, create a `.env` file in the root of your project with the following variables:

```
DB_USER=your_username
DB_PASSWORD=your_password
DB_HOST=your_host
DB_PORT=your_port
DB_NAME=your_database
DATABASE_URL=postgres://your_username:your_password@your_host:your_port/your_database
```

The application uses the `dotenv` package to load these variables. Ensure the `.env` file is not committed to version control by adding it to your `.gitignore` file.

## License

This project is licensed under the MIT License. See the LICENSE file for details.