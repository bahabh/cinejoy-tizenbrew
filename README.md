# Cinejoy TizenBrew

A simple TizenBrew application module that launches Cinejoy on Samsung Tizen TVs.

## Requirements

* Samsung Smart TV running Tizen
* TizenBrew installed
* Internet connection

## Installation

1. Upload this repository to GitHub.
2. On the TV, open TizenBrew.
3. Open the module/package manager.
4. Choose the option to add a GitHub module.
5. Enter:

```text
YOUR-GITHUB-USERNAME/cinejoy-tizenbrew@main
```

6. Install the module.
7. Launch **Cinejoy** from TizenBrew.

## Structure

```text
cinejoy-tizenbrew/
├── package.json
├── README.md
└── app/
    └── index.html
```

## How it works

TizenBrew loads `app/index.html`.

The page then navigates the TV browser directly to:

```text
https://cinejoy.to/
```

No iframe is used.

## Disclaimer

This project is an unofficial TizenBrew wrapper and is not affiliated with Cinejoy, Samsung, or TizenBrew.

The user is responsible for the websites and content accessed through the application.
