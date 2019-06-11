export function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


export function getDay(dayNo) {
    var weekday = new Array(7);
    weekday[0] = "SU";
    weekday[1] = "MO";
    weekday[2] = "TU";
    weekday[3] = "WE";
    weekday[4] = "TH";
    weekday[5] = "FR";
    weekday[6] = "SA";
    return weekday[dayNo];
}


export function getWeatherUpdate(weather) {
    // return the cached value if it is less than 30 minutes old
    weather.fetch(30 * 60 * 1000)
        .then(weather => console.log(JSON.stringify(weather)))
        .catch(error => weatherError(error));
    return (weather) ? weather : null;
}


export function getWeatherTemperature(weather) {
    return (weather && weather.get()['temperatureC']) ?
        Math.round(weather.get()['temperatureC']) + "°" :
        "";
}


export function getWeatherConditionCode(weather) {
    return (weather) ? weather.get()['conditionCode'] : "";
}


function weatherError(error) {
    console.log("Issue fetching the weather.");
}