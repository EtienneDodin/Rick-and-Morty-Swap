# Rick and Morty Swap
<br/>
  <p align="center">
    School project created to develop and demonstrate web front-end skills.
    <br/>
    <br/>
  </p>
</p>



## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Installation](#installation)
* [Usage](#usage)
* [Authors](#authors)

## About The Project

This "Rick and Morty Swap" project is a web application created to develop skills in front-end technologies such as HTML, CSS, and JavaScript. The application uses Rick & Morty API (https://rickandmortyapi.com/api) to explore the universe of the popular animated series "Rick and Morty". :smile:

## Built With

HTML to structure content

*CSS* for styling, using Tailwind CSS and some custom classes

*JavaScript* for interactive content

Website is deployed with Netlify at following address :
https://main--rickandmortyswap.netlify.app/

## Getting Started

Besides accessing website via Netlify, you can run a custom Docker container with repo files *Dockerfile* & *docker-compose.yml*, the stack uses a standard Nginx image to run corresponding web server.

### Installation

1. Download above-mentioned Docker files.

2. Run the following command, from Visual Studio Code terminal for instance, while being in the folder containing Docker files (project folder) :

```sh
docker-compose up
```

The container is now running and you'll be able to send main project folder's data (HTML, CSS, JS..) in web server, accessing it via http://localhost:8000/ in your browser (this is specified by Docker Compose settings).

You can stop, restart or delete container as you wish or using Docker Desktop app.

## Usage

**The webapp** generates a random set of 12 Rick & Morty characters on page load. The following piece of information is displayed about them : their name, image, status, gender and species.

**Four buttons** are present in the beginning of main section : "Random", "Alive", "Dead" and "Unknown". A click on one of these buttons generates a new set of characters, according to button's title : random, alive, dead characters or characters with unknown status..

**A click on each card** toggles a window that displays information about the card's character : again, the name and image are shown, and we can find information about the origin and last location of the character, as well as a list of episodes where they are present.

## Authors

* **Etienne Dodin** - *Web Development Student - Onlineformapro Access Code School* - [Etienne Dodin](https://github.com/EtienneDodin/)
