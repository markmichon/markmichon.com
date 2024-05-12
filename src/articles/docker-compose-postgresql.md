---
title: Quickly set up local PostgreSQL with Docker Compose
description: Set up postgres and adminer locally with docker compose.
permalink: /docker-compose-postgresql/
---

[Docker Compose](https://docs.docker.com/compose/) is the fastest way to run a PostgreSQL server locally—even if you've never touched docker before. In fact, Docker Compose is a light-touch entry into using docker for more complex stacks.

In this quick article you will:

- Install docker.
- Write a `docker-compose.yml` file.
- Connect to a PostgreSQL database

## Prerequisites

- CLI comfort: You need some familiarity with the command line. If you're writing enough code that you need a database, you're probably good. If not, the [11ty docs guide to opening a terminal window](https://www.11ty.dev/docs/terminal-window/)can get you there.
- Docker Desktop: Follow the guides [on Docker's documentation](https://docs.docker.com/compose/install/) for your operating system. The desktop GUI app also includes the CLI, so don't be alarmed as they guide you toward the full desktop experience.

## Writing your docker-compose file

Start by creating a `docker-compose.yml` file in your project directory. Then, add the following YAML to it.

```yml
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: demo
      POSTGRES_PASSWORD: demo
      POSTGRES_DB: demo
    ports:
      - 5432:5432
```

The YAML above tells docker compose that you have a service, called `db`, using the `postgres` image from [Docker Hub](https://hub.docker.com/_/postgres/). It also defines environment variables that the image needs.

The `ports` key tells docker how to expose internal ports to the rest of your machine. The first number is the port you, as the user and the outside world, can access. The second number is the internal port on the container. The PostgreSQL container uses port 5432 by default, so this configuration file exposes it. If you're running PostgreSQL locally elsewhere on your machine you may run into the issue where "5432" is already in use. In this case, set the first number to a different available port.

To help test that the PostgreSQL server works, you can run an admin tool alongside it. Update the `docker-compose.yml` file with the additional `adminer` service.

```yaml
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: demo
      POSTGRES_PASSWORD: demo
      POSTGRES_DB: demo
    ports:
      - 5432:5432
  adminer:
    image: adminer
    ports:
      - 3333:8080
```

Adminer is an admin dashboard for SQL databases. You can use it to interact with the PostgreSQL server.

## Run the containers

Now that the configuration file is complete you can run the containers. Run the following command from the same directory as the compose file:

```sh
docker compose up
```

The first time you run the `up` command, docker will download the images referenced in the compose file. Once complete, you should see details in your terminal including an indication that two containers exist. For example:

```sh
✔ Container docker-pg-demo-adminer-1  Created     0.0s
✔ Container docker-pg-demo-db-1       Created     0.0s
```

## Access the database

Navigate to `localhost:3333` to access the Adminer dashboard.

If you've followed along with the settings in the above compose file, enter the login details as follows:

- System: PostgreSQL
- Server: db
- Username: demo
- Password: demo
- Database: demo

Adminer is now connected to your PostgreSQL database, all running in docker. To stop the server, terminate the active session in (Ctrl+C on MacOS). To avoid tying up a terminal window, you can also run the following to keep containers running in the background:

```sh
docker compose up -d
```

The `-d` flag runs compose in detached mode.

Additionally, the Docker Desktop app—which is likely running in your menu bar—is available to stop, start, and manage existing containers. To stop a running set of containers from the CLI, run the following command from the project directory:

```sh
docker compose down
```

## Keeping the database between sessions

You may notice that after a round of `up` and `down`, the database resets to its default state. Docker's "volumes" mechanic solves this. For this starter setup, update the `db` service configuration to include the `volumes` key and value:

```yaml
services:
  db:
    image: postgres
    environment:
      POSTGRES_USER: demo
      POSTGRES_PASSWORD: demo
      POSTGRES_DB: demo
    ports:
      - 5432:5432
    volumes:
      - ./data:/var/lib/postgresql/data
```

Volumes takes a list of pairs. The first value in the pair—the part to the left of the colon—is the location on your machine. In this case, a directory named `data` in our current project directory. The second value is the location inside the Docker container. The `/var/lib/postgresql/data` location [is defined by](https://hub.docker.com/_/postgres/) the `postgres` image. You can change this by setting a `PGDATA` environment variable, or leave it as the default.

The next time you `docker compose up`, you should see the new `data` directory appear locally. Now data will persist between sessions. If at any point you need to completely remove the database, you can remove the directory. Docker will regenerate a clean version if it can't find data in the volume location.

## Further explorations

I hope this brief intro gives you the confidence to use Docker more. Compose files are an excellent jumping off point. In the time between Docker's rise in popularity and now, the official docs and resources have really stepped up their clarity and they're worth checking out.

- The [Docker Compose Quickstart](https://docs.docker.com/compose/gettingstarted/) takes you through the process of building and running a python app alongside a Redis database.
- The [Guides](https://docs.docker.com/guides/) section explores language-specific advice and common use-cases.
