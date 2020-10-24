const getDefaultState = () => {
    return {
        isLoggedIn: false,
        userAuth: null,
        credential: null
    }
}

const state = getDefaultState()

const mutations = {
    'LOGIN'(state, credential) {
        state.isLoggedIn = true
        state.credential = credential
        localStorage.setItem('isLoggedIn', state.isLoggedIn);
        localStorage.setItem('idToken', credential.idToken);
        localStorage.setItem('localId', credential.localId);
    },
    'SIGNUP'(state, credential) {
        state.isLoggedIn = true
        state.credential = credential
        localStorage.setItem('isLoggedIn', state.isLoggedIn);
        localStorage.setItem('idToken', credential.idToken);
        localStorage.setItem('localId', credential.localId);
    },
    'SET_USERS'(state, user) {
        state.userAuth = user;
    },
    'RESET_AUTH'(state) {
        Object.assign(state, getDefaultState())
    }
}

const actions = {
    login({ commit }, user) {
        commit('LOGIN', user);
    },
    signUp({commit}, payload) {
        commit('SIGNUP', payload);
    },
    setUser({ commit }, credential) {
        commit('SET_USERS', credential)
    },
    logOut({ commit }) {
        commit('RESET_AUTH');
    },
    resetAuth({ commit }) {
        commit('RESET_AUTH')
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
