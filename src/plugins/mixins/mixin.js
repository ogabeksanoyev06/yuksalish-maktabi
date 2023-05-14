import Vue from "vue";
import { mapGetters } from "vuex";
import { baseURL } from "../../service/apiService";

Vue.mixin({
  data() {
    return {
      baseURL,
    };
  },
  computed: {
    ...mapGetters([
      "isLoggedOn",
      "boughtCourses",
      "coursesOnBasket",
      "favouriteCourses",
    ]),
    userIsLoggedOn() {
      return this.isLoggedOn;
    },
  },
  methods: {
    validStrOrImg(data) {
      return data && data.length ? data : "";
    },
    validImg(data, name) {
      return data && data.length ? data[0][name] : "";
    },
    dateMaker(date) {
      return date
        .slice(0, 10)
        .split("-")
        .reverse()
        .join(".");
    },
    currencyFormat(number) {
      try {
        if (number % 1 === 0) return number;
        if (number === null || number === undefined || number === 0)
          return false;
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
      } catch {
        return number;
      }
    },
    numberFormat(number) {
      try {
        if (number === null || number === undefined || number === 0)
          return false;
        return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$& ");
      } catch {
        return number;
      }
    },
    setMathPlugin() {
      window.renderMathInElement(
        document.getElementById("test_solving_component"),
        {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true },
          ],
          Macros: {
            "\\par": "\\newline",
          },
        }
      );
    },
    setQuestionIndexToStorage(questionIndex) {
      localStorage.removeItem("selectedQuestionIndex");
      localStorage.setItem("selectedQuestionIndex", questionIndex);
    },
    checkQuestionIndex() {
      let selectedQuestionIndex = localStorage.getItem("selectedQuestionIndex");
      if (!selectedQuestionIndex) return 0;
      return parseInt(selectedQuestionIndex);
    },
    setSelectedSubjectIdMixin(selectedSubjectId) {
      localStorage.removeItem("selectedSubjectId");
      localStorage.setItem("selectedSubjectId", selectedSubjectId);
    },
    getSelectedSubjectIdMixin() {
      let selectedSubjectId = localStorage.getItem("selectedSubjectId");
      if (!selectedSubjectId) return null;
      return parseInt(selectedSubjectId);
    },
    removeTestAttributesFromStorage() {
      localStorage.removeItem("selectedSubjectId");
      localStorage.removeItem("questions");
      localStorage.removeItem("answers");
      localStorage.removeItem("testType");
    },
    setTestTypeToStorage(testType) {
      localStorage.removeItem("testType");
      localStorage.setItem("testType", testType);
    },
    getTestTypeFromStorage() {
      let testType = localStorage.getItem("testType");
      if (!testType) return null;
      return testType;
    },
    successNotification(message) {
      this.$notify({
        group: "admin",
        title: "Muvaffaqiyat!",
        text: message,
        closeOnClick: true,
        duration: 10000,
      });
    },
    errorNotification(message, title = "Hatolik yuz berdi") {
      this.$notify({
        group: "admin",
        title: title,
        text: message,
        type: "error",
        closeOnClick: true,
        duration: 10000,
      });
    },
    storeTestTimeToStorage(testTime) {
      localStorage.removeItem("testTime");
      localStorage.setItem("testTime", testTime);
    },
    isCourseInBasket(courseId) {
      if (this.isBoughtCourse(courseId)) return true;
      else if (
        this.coursesOnBasket.find(
          (item) => parseInt(item.id) === parseInt(courseId)
        )
      )
        return true;
      return false;
    },
    isBoughtCourse(courseId) {
      return !!this.boughtCourses.find(
        (course) => parseInt(course.id) === parseInt(courseId)
      );
    },
    isCourseInFavouritesList(courseId) {
      return !!this.favouriteCourses.find(
        (course) => parseInt(course.id) === parseInt(courseId)
      );
    },
    isCourseInBasketSolid(courseId) {
      return !!this.coursesOnBasket.find(
        (item) => parseInt(item.id) === parseInt(courseId)
      );
    },
    async addToCart(courseId) {
      if (this.isCourseInBasket(courseId)) return;
      await this.$store.dispatch("addToCard", courseId);
    },
    async addToFavouriteMixin(courseId) {
      if (this.isCourseInFavouritesList(courseId)) return;
      await this.$store.dispatch("addToFavouritesList", courseId);
    },
    async getAllCoursesMixin(skip, take) {
      let payload = {
        skip: skip,
        take: take,
      };
      await this.$store.dispatch("getAllCourses", payload);
    },
    clearTestPropertiesFromLocalStorage() {
      localStorage.removeItem("selectedQuestionIndex");
      localStorage.removeItem("testTime");
    },
  },
});
