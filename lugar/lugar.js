const axios = require('axios');




const getLatLong = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,

        headers: { 'X-RapidAPI-Key': '325163b411msh456744abc2a0df8p1072d4jsnf24e94ae1f85' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.Results[0];
    const direccionN = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccionN,
        latitud,
        longitud
    }
}

module.exports = {
    getLatLong
}