
# Bicloo-map
This project aims to display Bicloo stations on a map, with a filterable and searchable table.  
This project focuses on the beautiful city of Nantes.
The project is a Vue js App.
It uses the JCDecaux API and the mapbox mapping solution.

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

## Build the app
To build the project:
```
npm run build
```

This command give you a dist folder.  
You are free to host this folder anywhere you want.

## Contributing to the project
You are free to submit PR.  
I will have a look and get in touch with you.  
Please consider to be very detailled in your PR message.  



  


