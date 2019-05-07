const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad a obtener su clima',
        demmand: true
    }
}).argv;

/*


const direc = lugar.getLatLong(argv.direccion)
    .then(console.log);

clima.getClima(direc.latitud, direc.latitud)
    .then(console.log)
    .catch(console.log);

    */

const getInfo = async(direccion) => {


    try {
        let adrs = await lugar.getLatLong(direccion);
        console.log(adrs);

        let temp = await clima.getClima(adrs.latitud, adrs.longitud);


        return `Se encontro la temperatura ${temp} para la ciudad ${direccion}`;
    } catch (error) {
        throw (`No se encontraron datos para ${direccion}`);
    }



}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);