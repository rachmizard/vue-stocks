import stocks from '../../data/stocks'

const getDefaultState = () => {
    return {
        stocks: []
    }
}

const state = getDefaultState()

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
            stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        })
    },
    'RESET_STOCK'(state) {
        Object.assign(state, getDefaultState())
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
    },
    resetStock: ({ commit }) => {
        commit('RESET_STOCK')
    }
}

const getters = {
    stocks: state => {
        return state.stocks
    }
}

export default { state, mutations, actions, getters }