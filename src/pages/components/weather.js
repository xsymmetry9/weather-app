
let key = 'aBJPAcitsGAJDHJgWT5evdxJX920p4Ud';

const getCity = async (city) =>{
    const url = 'http://dataservice.accuweather.com/locations/v1/search';
    const query = `?apikey=${key}&q=${city}`
    
    const response = await fetch(url + query);
    const data = await response.json();

    return data[0];
    
}
const getWeather = async (id) =>{
    const url = 'http://dataservice.accuweather.com/forecasts/v1/daily/1day/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(url+query);
    const data = await response.json();

    return data;

}

export {getCity, getWeather}