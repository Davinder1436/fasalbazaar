## Running the API with Docker Compose and Prisma Studio

This guide provides step-by-step instructions on how to set up and run your API using Docker Compose and visualize your data with Prisma Studio.

**Prerequisites:**

- Docker installed: https://www.docker.com/get-started
- Docker Compose installed: https://docs.docker.com/compose/install/
- Node.js and npm (or yarn) installed: https://nodejs.org/

**1. Start the Database with Docker Compose:**

1. Navigate to your project's root directory (where `docker-compose.yml` resides).
2. Open a terminal window.
3. Run the following command:

   ```bash
   docker-compose up -d
2. Run the API Development Server:

Navigate to the API folder within your project directory.

Open a terminal window in this directory.
Run the following command to start the development server:

      npm run dev
3.Visualize Data with Prisma Studio:
While the API development server is running (from step 2), open a new terminal window.

Navigate to the root directory of your project (where docker-compose.yml resides).

Run the following command to launch Prisma Studio:

    npx prisma studio
