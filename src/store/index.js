import Vue from 'vue'
import Vuex from 'vuex'
import generalOptions from './Modules/generalOptions';
import test from './Modules/test';
import user from './Modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		generalOptions,
		test,
		user
	}
})
