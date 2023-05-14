const state = {
    user: {},
        accessToken: null,
        isLoggedOn: false,
    coursesOnBasket: [],
    favouriteCourses: [],
    boughtCourses: [],

};

const getters = {
    user: state => state.user,
    accessToken: state => state.accessToken,
    isLoggedOn: state => state.isLoggedOn,
    coursesOnBasket: state => state.coursesOnBasket,
    favouriteCourses: state => state.favouriteCourses,
    boughtCourses: state => state.boughtCourses,
};
const mutations = {
    setUser: (state, data) => state.user = data,
    setAccessToken: (state, data) => state.accessToken = data,
    setIsLoggedOn: (state, data) => state.isLoggedOn = data,
    setCoursesOnBasket: (state, data) => state.coursesOnBasket = data,
    setFavouriteCourses: (state, data) => state.favouriteCourses = data,
    setBoughtCourses: (state, data) => state.boughtCourses = data,
};
const actions = {
    async getUser({commit}) {
        try {
            await this._vm.$api.get('admin/Management/userbytoken').then(data => {
                if (!data.error && data.result) {
                    commit('setUser', data.result);
                }
            }).catch(error => {
                console.log('Error on getting user by token' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async getCoursesInBasket({commit}) {
        try {
            await this._vm.$api.get('Main/Referance/GetCartIds').then(data => {
                if (!data.error && data.result) {
                    commit('setCoursesOnBasket', data.result);
                }
            }).catch(error => {
                console.log('Error on getting courses in card' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async getFavouriteCourses({commit}) {
        try {
            await this._vm.$api.get('Main/Referance/GetFavouriteIds').then(data => {
                if (!data.error && data.result) {
                    commit('setFavouriteCourses', data.result);
                }
            }).catch(error => {
                console.log('Error on getting courses in favourite' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async getBoughtCourses({commit}) {
        try {
            await this._vm.$api.get('Main/Referance/GetBoughtIds').then(data => {
                if (!data.error && data.result) {
                    commit('setBoughtCourses', data.result);
                }
            }).catch(error => {
                console.log('Error on getting bought courses' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async addToFavouritesList({commit, state}, payload) {
        try {
            await this._vm.$api.post(`main/Course/AddFavoriteCourse?courseId=${payload}`).then(data => {
                if (!data.error && data.result) {
                    let wishlist = state.favouriteCourses;
                    wishlist.push({id: payload});
                    commit('setFavouriteCourses', wishlist);
                }
            }).catch(error => {
                console.log('Error on getting courses in favourite' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
    async addToCard({commit, state}, payload) {
        try {
            await this._vm.$api.post(`main/Basket/insert?courseId=${payload}`).then(data => {
                if (!data.error && data.result) {
                    let wishlist = state.coursesOnBasket;
                    wishlist.push({id: payload});
                    commit('setCoursesOnBasket', wishlist);
                }
            }).catch(error => {
                console.log('Error on getting courses in favourite' + ': ' + error)
            }).finally(() => {
            })
        } catch (e) {
            console.log(e)
        }
    },
};

export default {
    state,
    getters,
    actions,
    mutations
}
