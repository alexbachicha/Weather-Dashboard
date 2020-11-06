// Variable Declarations
var city="";
var searchCity = $("#search-city");
var searchButton = $("#search-button");
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];

// Searches the city to see if it exists in the entries from the storage
function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

// Setting up my API Key
var APIKey = "c3b86325f31d9b23f1a13f0262daa564";

// Displays curent and future weather to the user after grabing the city form the input text box
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

// Ajax Call
function currentWeather(city) {

    var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=" + APIKey;
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);

        // $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        // $(".temp").text("Temperature: " + response.main.temp);
        // $(".humidity").text("Humidity: " + response.main.humidity);
        // $(".wind").text("Wind Speed: " + response.wind.speed);
        // $(".uv").text("UV Index: " + response.main.uv);
       
        // console.log("Temperature (F): " + temp);
        // console.log("Humidity: " + response.main.humidity);
        // console.log("Wind Speed: " + response.wind.speed);
        // console.log("UV Index: " + response.main.uv);
    })
}
