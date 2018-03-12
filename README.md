# MOEI Console

## Prereqs
- have node installed

## Setup
```
$ git clone https://github.com/schmidtp0740/MOEI_Console
$ cd ./MOEI_Console
$ npm install
$ npm start
```

- go to localhost:3000 in your favorite browser


### Setting up Spoofed IOT device

#### Prereqs
 - have docker installed

#### Setup
```
$ git clone https://github.com/schmidtp0740/MOEI_Generator
$ cd MOEI_Generator
$ docker build -t goiotapp .
$ docker run -it --name goiotapp goiotapp
```