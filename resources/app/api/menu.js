export default {
    obtenerMenus(data, cb, errorCb) {
        axios.post('menu/obtener-menus', data)
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
    obtenerMenusTodos(cb, errorCb) {
        axios.get('menu/obtener-menus-todos')
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

    obtenerMenusOrdenados(cb, errorCb) {
        axios.get('menu/obtener-menus-orden')
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

    obtenerSecciones(data, cb, errorCb) {
        axios.get('menu/obtener-secciones',data)
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
    obtenerPadres(data, cb, errorCb) {
        axios.get('menu/obtener-padres',data)
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
    obtenerMenusUsuario(cb,errorCb) {
        axios.get('menu/obtener-menus-usuario')
        .then(function (response) {
            if (response.data.status == 'success') {
                cb(response.data.result)
            } else if (response.data.status == 'error') {
                errorCb(response.data.result)
            }else{
            	this.$router.push({
            		name: 'login'
            	})
            }
        })
        .catch(function (error) {
            errorCb(error)
        })
    },
    obtenerMenuEspecifico(data, cb, errorCb) {
        axios.post('menu/obtener-menu', data)
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
    crearMenu(data, cb, errorCb) {
        axios.post('menu/crear', data)
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
    actualizarMenu(data, cb, errorCb) {
        axios.put('menu/actualizar', data)
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
    actualizarOrdenMenus(data, cb, errorCb) {
        axios.put('menu/actualizar-orden', data)
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


    desactivarMenu(data, cb, errorCb) {
        axios.delete('menu/desactivar', data)
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
    activarMenu(data, cb, errorCb) {
        axios.put('menu/activar', data)
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

    obtenerModulos(cb,errorCb) {
        axios.post('menu/obtener-modulos')
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else if (response.data.status == 'error') {
                    errorCb(response.data.result)
                }else{
                    this.$router.push({
                        name: 'login'
                    })
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },

    obtenerSubModulos(data, cb, errorCb) {
        axios.post('menu/obtener-submodulos', data)
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

    obtenerListaReportes(cb,errorCb) {
        axios.post('menu/obtener-lista-reportes')
            .then(function (response) {
                if (response.data.status == 'success') {
                    cb(response.data.result)
                } else if (response.data.status == 'error') {
                    errorCb(response.data.result)
                }else{
                    this.$router.push({
                        name: 'login'
                    })
                }
            })
            .catch(function (error) {
                errorCb(error)
            })
    },
}