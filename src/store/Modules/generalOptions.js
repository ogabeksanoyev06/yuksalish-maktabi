const state = {
  windowWidth: null,
  skillTree: [],
  subjectTree: [],
  homePageCoursesSubjectId: null,
  coursesBySubjectId: [],
  inputValidation: [],
  allCourses: [],
  loading: false,
  comments: [],
  courseContentId: null,
};

const getters = {
  windowWidth: (state) => state.windowWidth,
  skillTree: (state) => state.skillTree,
  subjectTree: (state) => state.subjectTree,
  homePageCoursesSubjectId: (state) => state.homePageCoursesSubjectId,
  coursesBySubjectId: (state) => state.coursesBySubjectId,
  inputValidation: (state) => state.inputValidation,
  allCourses: (state) => state.allCourses,
  loading: (state) => state.loading,
  comments: (state) => state.comments,
  courseContentId: (state) => state.courseContentId,
};

const mutations = {
  setWindowWidth(state, newWidth) {
    state.windowWidth = newWidth;
  },
  setSkillTree(state, skills) {
    state.skillTree = skills;
  },
  setSubjectTree(state, skills) {
    state.subjectTree = skills;
  },
  setHomePageCoursesSubjectId(state, skills) {
    state.homePageCoursesSubjectId = skills;
  },
  setCoursesBySubjectId(state, data) {
    state.coursesBySubjectId = data;
  },
  setInputValidation(state, data) {
    state.inputValidation = data;
  },
  setAllCourses: (state, data) => (state.allCourses = data),
  setLoading: (state, data) => (state.loading = data),
  setComments: (state, data) => (state.comments = data),
  setCourseContentId: (state, data) => (state.courseContentId = data),
};
const actions = {
  async getSkillTree({ commit }) {
    try {
      commit("setLoading", true);
      await this._vm.$api
        .get("Main/Referance/SkillCourseTree")
        .then((data) => {
          if (!data.error && data.result) {
            commit("setSkillTree", data.result);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting SkillCourseTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
  },
  async getSubjectTree({ commit }) {
    try {
      commit("setLoading", true);
      await this._vm.$api
        .get("Main/Referance/SubjectCourseTree")
        .then((data) => {
          if (!data.error && data.result) {
            commit("setSubjectTree", data.result);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting subjectTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
  },
  async getCoursesBySubjectId({ commit }, payload) {
    let data = [];
    try {
      commit("setLoading", true);
      await this._vm.$api
        .get(`Main/Home/CourseList?subjectId=` + payload)
        .then((data) => {
          if (!data.error && data.result) {
            commit("setCoursesBySubjectId", data.result);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting SkillCourseTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
    return data;
  },
  async getAllCourses({ commit }, payload) {
    console.log(" im working here");
    try {
      commit("setLoading", true);
      await this._vm.$api
        .get(`Main/Course/GetAll?skip=${payload.skip}&take=${payload.take}`)
        .then((data) => {
          if (!data.error && data.result) {
            commit("setAllCourses", data.result);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting SkillCourseTree" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
  },
  async getContentComments({ commit }, payload) {
    console.log(" im working here");
    try {
      commit("setLoading", true);
      await this._vm.$api
        .get(`Main/ContentComment/GetAll?contentId=${payload}`)
        .then((data) => {
          if (!data.error && data.result) {
            data.result.sort((a, b) => (a.id < b.id ? 1 : -1));
            commit("setComments", data.result);
          }
        })
        .catch((error) => {
          commit("setLoading", false);
          console.log("Error on getting content comments" + ": " + error);
        })
        .finally(() => {
          commit("setLoading", false);
        });
    } catch (e) {
      commit("setLoading", false);
      console.log(e);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
