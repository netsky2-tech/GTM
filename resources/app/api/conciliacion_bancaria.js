export default {

    obtenerEstadoCuenta(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/estados-cuenta/obtener-estado-cuenta', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },

    nueva(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/nueva', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
    registrarEstadoCuenta(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/estados-cuenta/registrar', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
    registrarConciliacion(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/registrar', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },

    subirExcel(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/subir', data,{
            header:{
                'Content-Type' : 'multipart/form-data'
            }
        })
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
    obtenerConciliaciones(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/obtener', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
    obtener(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/estados-cuenta/obtener', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
    anular(data, cb, errorCb) {
        axios.post('bancos/conciliaciones/estados-cuenta/anular', data)
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else {
                    errorCb(response.data.result)
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
}