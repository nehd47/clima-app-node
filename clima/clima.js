const axios = require('axios');


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=50540dad153f2ec2c8cfb84448076ade&units=metric`);
    return resp.data.main.temp;
}


module.exports = {
    getClima
}