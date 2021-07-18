# Records

Records API

## Introduction

Welcome to version 1 of Records API. Below you will find the available method on the endpoint.

## Getting started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

To work with this project you need to have the following installed on your local machine

1. [NodeJS](https://nodejs.org)
2. [Git](https://git-scm.com/downloads)
3. [Postman](https://www.postman.com/downloads/)

## Install and run locally

```bash
git clone https://github.com/abejide001/getir-challenge.git
cd getir-challenge

export
mv .env.sample .env
npm i
npm run start:dev
```

## Running **Tests**

```bash
git clone https://github.com/abejide001/getir-challenge.git
cd getir-challenge

# rename .env.sample to .env, and set your environment variable

export
mv .env.sample .env
npm i
npm run test
```

## API Usage

API BASE URL(<https://records-2021.herokuapp.com/api/v1>).

### Filter record endpoint `/records`

| method | route      | description      | data                                   |
|--------|------------|------------------|----------------------------------------|
| POST   | /records   | Filter a record  | minCount, maxCount, startDate, endDate |


## API Docs

<https://records-2021.herokuapp.com/api/v1/docs> (change the Schemes to HTTPS)

## App URL

<https://records-2021.herokuapp.com/api/v1>

## Author

Abejide Femi - abejidefemi1@gmail.com
