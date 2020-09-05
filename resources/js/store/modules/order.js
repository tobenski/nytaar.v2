const state = {
    adults: '',
    children: '',
};

const getters = {
    adults: state => {
        return state.adults;
    },
    children: state => {
        return state.children;
    },
};

const actions = {

};

const mutations = {
    setAdults(state, adults) {
        state.adults = adults;
    },
    setChilds(state, children) {
        state.children = children;
    },
};

export default {
    state, getters, actions, mutations,
}