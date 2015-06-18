[![Stories in Ready](https://badge.waffle.io/IEEECS-VIT/StockSim.png?label=ready&title=Ready)](https://waffle.io/IEEECS-VIT/StockSim)
Stock Simulator
===============

The Virtual Share Market Code repository

Please report any bugs / issues [here](https://github.com/IEEECS-VIT/StockSim/issues)

#### Setup instructions
##### Install the latest version of iojs
##### Install the latest version of MongoDB

###### Install all dependencies (Ignore the errors that would come up on a Windows environment)

    $ npm install

###### Install security dependency manually (Microsoft Windows only)

    # npm install bcryptjs

###### Run the server locally at port 1337 or "PORT" in process.env

    $ sails lift

###### View the website at localhost:1337 within your browser

#### External Requirements:
* A MongoDB instance running locally or valid "MONGOLAB_URI"/"MONGOHQ_URI" string in process.env
* A valid "COOKIE_SECRET" string in process.env for better security (Optional)

A [Sails](http://sailsjs.org) application

