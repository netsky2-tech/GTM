export default {
    obtenerUsuarios(data, cb, errorCb) {
        axios.post('usuarios/obtener', data)
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
    obtenerUsuario(data, cb, errorCb) {
        axios.post('usuarios/obtener-usuario', data)
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
    obtenerUserLogin(data, cb, errorCb) {
        axios.post('usuarios/obtener-user-login', data)
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
    obtenerActivos(cb, errorCb) {
        axios.get('usuarios/obtener-activos')
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

    registrar(data, cb, errorCb) {
        axios.post('usuarios/registrar', data)
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

    cambiarContrasena(data, cb, errorCb) {
        axios.put('usuarios/cambiar-contrasena', data)
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
    }
}