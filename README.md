# Remberg App
> This project was generated with Node Version "12.13.1" and Angular Version "10"

## Installing / Getting started

A quick introduction of the minimal setup you need to get a Remberg Application up &
running.

### Initial Configuration

Setup/Install Nodejs, NPM, Angular CLI

### DB Setup

Download/Setup Mongo, create a Database named remberg:-
Define below environment variables in `.env` file:-

	DB_URL - URL of database

### Project Folder setup

Follow below steps to setup the project

```shell
git clone https://github.com/devniti33/remberg-test-application.git
cd remberg-test-application
cd server
npm install
cd ../src
npm install
```

## Run Project

Follow below step to start project, please be on the root path of project:-

```shell
cd server
npm run start
cd ../src
npm run start
```

Initiate session windows in browser,
by accessing route:- http://localhost:4200/

## Test Project

follow below step to start testing the application:-

```shell
cd server
npm run test
cd ../src
npm run test
```