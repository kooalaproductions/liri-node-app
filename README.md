# Liri Bot
Liri Bot will help users find concert, song and movie information. 
## Installation
Will need to run npm installations 
1. Navigate to the root of your project and run npm init -y — this will initialize a package.json file for your project. The package.json file is required for installing third party npm packages and saving their version numbers. If you fail to initialize a package.json file, it will be troublesome, and at times almost impossible for anyone else to run your code after cloning your project.
```bash
npm init -y
```
2. Make a .gitignore file and add the following lines to it. This will tell git not to track these files, and thus they won't be committed to Github.
```bash
node_modules
.DS_Store
.env
```
3. Make a JavaScript file named keys.js.
 - Inside keys.js your file will look like this:
 ```bash
console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

```
4. Next, create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:
```bash
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```

## Usage
For a concert search: 
```bash
node liri.js concert-this <artist/band name here>
```
![](concertgif.gif)
For a song search:
```bash
node liri.js spotify-this-song '<song name here>'
```
![](spotify.gif)

For a movie search:
```bash
node liri.js movie-this '<movie name here>'
```
![](movie.gif)

For do what is says:
```bash
node liri.js do-what-it-says
```
![](default.gif)

