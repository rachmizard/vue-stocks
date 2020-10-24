import stocks from '../../data/stocks'

const state = {
    stocks: []
}

const mutations = {
    'BUY_STOCK'(state, stocks) {
        const record = state.stocks.find(element => element.id === stocks.stockId);
        if (record) {
            if (stocks.quantity !== 0) {
                if (stocks.quantity > record.quantity) {
                    alert('Stock limited!')
                } else {
                    record.quantity -= stocks.quantity
                }
            }
        }
    },
    'SET_STOCKS'(state, stocks) {
        state.stocks = stocks;
    },
    'ADD_STOCK'(state, payload) {
        const data = payload;
        state.stocks.push(data);
    },
    'RAND_STOCKS'(state) {
        state.stocks.forEach(stock => {
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5 ))
        })
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
    },
    addStock: ({ commit }, payload) => {
        commit('ADD_STOCK', payload)
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default { state, mutations, actions, getters }