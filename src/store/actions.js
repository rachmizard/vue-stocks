import Vue from 'vue';

export const loadData = ({ commit }, payload) => {
    const path = `data/${payload.localId}.json`
    Vue.http.get(path)
    .then(response => response.json())
    .then(data => {
        if(data) {
            const stocks = data.stocks;
            const stockPortofolio = data.stockPortofolio;
            const funds = data.funds;

            const portofolio = {
                stockPortofolio,
                funds
            }

            commit('SET_STOCKS', stocks);
            commit('SET_PORTOFOLIO', portofolio);
        }
    });
}