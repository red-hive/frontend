<div align="center">

# **Open Source Stock Analysis for Data Freaks**

<h3>

[Homepage](https://stocknear.com/) | [Discord](https://discord.com/invite/hCwZMMZ2MT)

</h3>

[![GitHub Repo stars](https://img.shields.io/github/stars/stocknear/frontend)](https://github.com/stocknear/frontend/stargazers)

</div>

# Techstack

This is the codebase that powers [Stocknear's](https://stocknear.com/) frontend, which is an open-source stock analysis platform.

Built with:

- [Sveltekit](https://kit.svelte.dev/): Frontend
- [Tailwindcss](https://tailwindcss.com/): Styling
- [DaisyUI](https://daisyui.com/): Styling

# Running locally

Set the following env variables in docker-compose/.env:

```
# URL of the backend container
VITE_BACKEND_URL=http://backend:8000

# API key for the backend API
VITE_STOCKNEAR_API_KEY=test

# Network name for the backend container
BACKEND_NETWORK=backend-network

# Hostname and port for the frontend
HOST=0.0.0.0
PORT=5173
```

Then run the following commands:

```
make build-docker
make compose
```

# Contributing

Stocknear is an open-source project, soley maintained by Muslem Rahimi.

We are not accepting pull requests. However, you are more than welcome to fork the project and customize it to suit your needs.

The core idea of stocknear shall always be: **_Fast_**, **_Simple_** & **_Efficient_**.

# Support ❤️

If you love the idea of stocknear and want to support our mission you can help us in two ways:

- Become a [Pro Member](https://stocknear.com/pricing) of stocknear to get unlimited feature access to enjoy the platform to the fullest.
- You can sponsor us via [Github](https://github.com/sponsors/stocknear) to help us pay the servers & data providers to keep everything running!
