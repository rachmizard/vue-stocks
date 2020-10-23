import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'ADD_STOCK'(state, payload) {
        const data = payload;
        state.stocks.push(data);
    }
}

const actions = {
    buyStock: ({ commit }, order) => {
        commit('BUY_STOCK', order);
    },
    initStocks: ({ commit }) => {
        commit('SET_STOCKS', stocks)
    },
    randomizeStocks: ({ commit }) => {
        commit('RAND_STOCKS')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default { state, mutations, actions, getters }