const state = {
    isLoggedIn: false,
    userAuth: null,
    credential: null
}

const mutations = {
    'LOGIN'(state, credential) {
        state.isLoggedIn = true
        state.credential = credential
        localStorage.setItem('isLoggedIn', state.isLoggedIn);
        localStorage.setItem('idToken', credential.idToken);
        localStorage.setItem('localId', credential.localId);
    },
    'SET_USERS'(state, user) {
        state.userAuth = user;
    },
    'LOGOUT'(state) {
        state.isLoggedIn = false;
        state.credential = null
        state.userAuth = null
        localStorage.clear();
    }
}

const actions = {
    login({ commit }, user) {
        commit('LOGIN', user);
    },
    setUser({ commit }, credential) {
        commit('SET_USERS', credential)
    },
    logOut({ commit }) {
        commit('LOGOUT');
    }
}

const getters = {
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    getCredential(state) {
        return state.credential
    },
    getUser(state) {
        return state.userAuth;
    }
}

export default { state, mutations, actions, getters }
