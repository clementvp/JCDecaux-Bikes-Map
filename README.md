
# JCDecaux Bikes Map
This project aims to display JCDecaux's bikes stations with informations on a map, with a filterable and searchable table.      
The project is a Vue js App.  
It uses the JCDecaux API and the mapbox mapping solution.

You can select any french JCDecaux contracts as city, see [here](https://developer.jcdecaux.com/#/opendata/vls?page=static)  
To choose , and display contract's stations informations, just set the env variable VUE_APP_JCDECAUX_CITY as the city you aim, like nantes or creteil or toulouse or lyon etc,according to the [doc](https://developer.jcdecaux.com/#/opendata/vls?page=static)  

## Project setup
You need to install dependencies:

```
npm install
```

The project uses environment variables to work.  
To set up environment variables just fill the .env file with your variables:  
The environment variables are:
```
VUE_APP_MAPBOX_TOKEN
VUE_APP_MAPBOX_STYLE
VUE_APP_JCDECAUX_API_KEY
VUE_APP_JCDECAUX_CITY
```


VUE_APP_MAPBOX_TOKEN is your mapbox token see [Mapbox](https://www.mapbox.com/).  
VUE_APP_MAPBOX_STYLE is your Mapbox map's style url, see [here](https://docs.mapbox.com/mapbox-gl-js/style-spec/).  
VUE_APP_JCDECAUX_API_KEY is your JCDecaux API key, see [JCDecaux dev platform](https://developer.jcdecaux.com/#/opendata/vls?page=getstarted).  
VUE_APP_JCDECAUX_CITY is the city you aim, see [here](https://developer.jcdecaux.com/#/opendata/vls?page=static) it's name is Contract on the dev platform.

## Run the app

To run the app:  
```
npm run serve
```

## Build the app
To build the project:
```
npm run build
```

This command give you a dist folder.  
You are free to host this folder anywhere you want.
Mine is hosting on a personal cap rover instance.

## Contributing to the project
You are free to submit PR.  
I will have a look and get in touch with you.  
Please consider to be very detailled in your PR message.  



  


