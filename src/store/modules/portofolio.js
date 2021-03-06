const getDefaultState = () => {
    return {
        funds: 0,
        stocks: []
    }
}

const state = getDefaultState();

const mutations = {
    'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockId);
        if (record) {
            record.quantity += quantity;
        } else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            })
        }
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
        const record = state.stocks.find(element => element.id === stockId);
        if (record.quantity > quantity) {
            record.quantity -= quantity;
        } else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }
        state.funds += stockPrice * quantity;
    },
    'SET_PORTOFOLIO'(state, portofolio) {
        state.funds = portofolio.funds
        state.stocks = portofolio.stockPortofolio ? portofolio.stockPortofolio : [];
    },
    'RESET_PORTOFOLIO'(state) {
        Object.assign(state, getDefaultState())
    }
}

const actions = {
    sellStock({ commit }, order) {
        commit('SELL_STOCK', order);
    },
    resetPortofolio({ commit }) {
        commit('RESET_PORTOFOLIO');
    }
}

const getters = {
    stockPortofolio(state, getters) {
        return state.stocks.map(stock => {
            const record = getters.stocks.find(element => element.id === stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price,
                img: record.img
            }
        })
    },
    funds(state) {
        return state.funds
    }
}

export default { state, mutations, actions, getters }