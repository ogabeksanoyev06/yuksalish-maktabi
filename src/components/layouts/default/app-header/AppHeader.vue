<template>
  <div>
    <header
      class="header"
      :class="{
        greyBg: $route.path === '/',
        header__shadow: $route.path !== '/',
      }"
    >
      <!-- <marquee behavior="" direction="left" style="color: #95abc6">
        Sayt test rejimida ishlamoqda...Kamchiliklar uchun uzr so'raymiz
      </marquee> -->
      <div class="container">
        <div class="header__inner">
          <div class="header__left">
            <router-link to="/" class="logo">
              <img src="/images/logo.png" alt="logo" />
            </router-link>
            <ul class="header__menu" v-if="!isDesktopMedium">
              <li
                class="header__menu-item"
                v-for="(item, index) in menu"
                :key="index"
                v-on="handleShowDropdown(item.id)"
              >
                <router-link :to="item.link" class="header__menu-link">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>

          <div class="header__right">
            <div
              class="header__language"
              :class="isMobileMedium ? '' : 'mr-20'"
              v-if="!isMobileSmall"
              @click="languageDropdown = !languageDropdown"
              v-on-click-outside:excludedClass="hideLanguageDropdown"
            >
              <div class="header__language-icon">
                <img src="/icons/globe.svg" alt="" />
              </div>

              <transition name="slide">
                <div class="header__dropdown" v-if="languageDropdown">
                  <ul
                    class="header__dropdown-wrap bordered shadowed radius overflow"
                  >
                    <li class="header__dropdown-item">
                      <router-link to="/" class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          Uzbek
                        </AppText>
                      </router-link>
                    </li>

                    <li class="header__dropdown-item">
                      <router-link to="/" class="header__dropdown-link pa-10">
                        <AppText size="14" line-height="18" weight="700">
                          Russian
                        </AppText>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </transition>
            </div>

            <AppButton
              v-if="isDesktopMedium"
              theme="transparent"
              sides="10"
              class="hamburger__menu"
              @click="showNavigationDrawer"
            >
              <img src="/icons/hamburger.svg" alt="" />
            </AppButton>
          </div>
        </div>
      </div>
    </header>
    <transition name="slide-right">
      <!-- <NavigationDrawer
        v-if="navigationDrawer"
        @closeNavigationDrawer="closeDrawer"
      /> -->
    </transition>

    <transition name="fade">
      <div
        class="overlay"
        v-if="navigationDrawer"
        @click="navigationDrawer = false"
      ></div>
    </transition>
  </div>
</template>

<script>
import "./header.scss";
import AppButton from "../../../shared-components/AppButton";
import TokenService from "../../../../service/TokenService";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "AppHeader",
  components: { AppButton },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Biz haqimizda",
          link: "/about",
        },
        {
          id: 2,
          title: "Yangiliklar",
          link: "/news",
        },
        {
          id: 3,
          title: "Galereya",
          link: "/s",
        },
        {
          id: 4,
          title: "Online test",
          link: "/s",
        },
        {
          id: 5,
          title: "Bog'lanish",
          link: "/s",
        },
      ],
      search: "",
      navigationDrawer: false,
      showDropdown: false,
      accountDropdown: false,
      languageDropdown: false,
    };
  },
  props: {
    headerShadow: {
      type: Boolean,
      default: false,
    },
    headerGreyBg: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters([
      "isLoggedOn",
      "skillTree",
      "subjectTree",
      "user",
      "coursesOnBasket",
      "favouriteCourses",
    ]),
  },
  methods: {
    closeDrawer() {
      this.navigationDrawer = false;
    },
    ...mapMutations(["setAccessToken", "setIsLoggedOn"]),
    ...mapActions([
      "getSkillTree",
      "getSubjectTree",
      "getUser",
      "getCoursesInBasket",
      "getFavouriteCourses",
      "getBoughtCourses",
    ]),
    showNavigationDrawer() {
      this.navigationDrawer = !this.navigationDrawer;
    },
    hideAccountDropdown() {
      this.accountDropdown = false;
    },
    hideLanguageDropdown() {
      this.languageDropdown = false;
    },
    handleShowDropdown(id) {
      if (this.isMobile) {
        return {
          click: () => (this.activeId = this.activeId === id ? null : id),
        };
      }
      return {
        click: () => (this.activeId = this.activeId === id ? null : id),
        mouseenter: () => (this.activeId = id),
        mouseleave: () => (this.activeId = null),
      };
    },
    handleShowDropdownInner(id) {
      if (this.isMobile) {
        return {
          click: () => (this.subActiveId = this.subActiveId === id ? null : id),
        };
      }
      return {
        click: () => (this.subActiveId = this.subActiveId === id ? null : id),
        mouseenter: () => (this.subActiveId = id),
        mouseleave: () => (this.subActiveId = null),
      };
    },
    prepareSkillCourseTree(data, menu) {
      data.forEach((d) => {
        let parentMenuModel = {
          id: d.id,
          title: d.name,
          link: "",
          children: [],
        };
        let childrenMenus = [];
        if (d.courseList) {
          d.courseList.forEach((children) => {
            let childrenMenuModel = {
              id: children.id,
              title: children.name,
              link: "",
            };
            childrenMenus.push(childrenMenuModel);
          });
          parentMenuModel.children = childrenMenus;
        }
        menu.push(parentMenuModel);
      });
    },
    logout() {
      this.$api
        .delete(
          "auth/Login/logout?refreshtoken=" + TokenService.getRefreshToken()
        )
        .then((data) => {
          if (data.statusCode === 200) {
            TokenService.removeToken();
            TokenService.removeRefreshToken();
            localStorage.clear();
            this.setToken();
          }
        })
        .catch((error) => {
          console.log(error, " error");
        });
    },
    setToken() {
      this.setAccessToken(null);
      this.setIsLoggedOn(false);
    },
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
    await this.getSkillTree();
    await this.getSubjectTree();
    await this.getCoursesInBasket();
    await this.getFavouriteCourses();
    await this.getBoughtCourses();
    this.menu[0].children = [];
    this.prepareSkillCourseTree(this.skillTree, this.menu[0].children);
    this.menu[1].children = [];
    this.prepareSkillCourseTree(this.subjectTree, this.menu[1].children);
  },
  watch: {
    skillTree() {
      this.menu[0].children = [];
      this.prepareSkillCourseTree(this.skillTree, this.menu[0].children);
    },
    subjectTree() {
      this.menu[1].children = [];
      this.prepareSkillCourseTree(this.subjectTree, this.menu[1].children);
    },
    async isLoggedOn() {
      if (this.userIsLoggedOn) {
        await this.getUser();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff96;
  z-index: 49;
}
</style>
