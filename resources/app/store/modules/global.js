import menu from '../../api/menu'
import * as types from '../mutation-types'

const state = {
	usuarioActivo: [],
	menuSections: [],
    navStyle: 'fixed-nav'
}

// getters
const getters = {
	navStyle: state => state.navStyle,
	usuarioActivo: state => state.usuarioActivo,
	menuSections: state => state.menuSections
}

// actions
const actions = {
	setNavStyle ({ commit }, style) {
		commit(types.SET_SIDE_NAV_STYLE, { style })
	},
	establecerUsuarioActivo ({ commit }, user) {
		commit(types.SET_ACTIVE_USER, { user })
		//window.axios.defaults.params['token'] = user.token
	},
	obtenerMenusUsuario ({ commit }, menuSections) {
		return new Promise((resolve, reject) => {
			menu.obtenerMenusUsuario(menuSections => {
				commit(types.RECEIVE_MENU_SECTIONS, { menuSections })
				resolve()
			}, err => {
				reject(err)
			})
		})
	}
}

// mutations
const mutations = {
	[types.SET_SIDE_NAV_STYLE] (state, { style }) {
		state.navStyle = style
	},
	[types.SET_ACTIVE_USER] (state, { user }) {
		state.usuarioActivo = user
	},
	[types.RECEIVE_MENU_SECTIONS] (state, { menuSections }) {
		state.menuSections = menuSections
	},
}

export default {
	namespaced: true,
    state,
    getters,
    actions,
    mutations
}