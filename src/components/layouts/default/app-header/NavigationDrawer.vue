<template>
  <div class="navigation-drawer">
    <BlockWrap
      :count="isMobileSmall ? 1 : 2"
      width-auto=""
      offset-y="20"
      offset-x="20"
      class="mb-20"
    >
      <div class="header__auth mb-20 mr-20">
        <AppButton
          theme="white"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class="header__login mr-15"
          v-if="!isDesktop"
          @click="$router.push({ path: '/sign-in' })"
          >Kirish
        </AppButton>
        <AppButton
          theme="white"
          :font-size="isMobileSmall ? 12 : isMobile ? 14 : 16"
          :sides="isMobileSmall ? 10 : isMobile ? 20 : 30"
          class="header__register"
          v-if="!isDesktop"
          @click="$router.push({ path: '/sign-up' })"
          >Ro'yxatdan o'tish
        </AppButton>
      </div>
    </BlockWrap>

    <BlockWrap
      :count="isMobileSmall ? 1 : 2"
      width-auto=""
      offset-y="20"
      offset-x="20"
      class="mobile__language-wrap pa-10 bordered radius mb-20"
    >
      <AppText size="16" weight="700" line-height="20" class="mr-20 color-main">
        Tilni tanlang:
      </AppText>
      <div class="d-flex align-center">
        <router-link to="/" class="mr-15">
          <AppText weight="700" size="14" line-height="18">Uzbek</AppText>
        </router-link>
        <router-link to="/">
          <AppText weight="700" size="14" line-height="18">Russian</AppText>
        </router-link>
      </div>
    </BlockWrap>

    <div class="">
      <AppText
        class="mb-20 mobile-menu__title"
        size="20"
        line-height="26"
        weight="700"
        >Menu
      </AppText>

      <ul class="mobile-menu-wrap" v-on-click-outside:excludedClass="hideMenus">
        <li
          v-for="(item, index) in menu"
          :key="index"
          class="mobile-menu__item"
          v-on="handleShowDropdown(item)"
        >
          <span class="mobile-menu__link" @click="clickMenu()">
            {{ item.title }}</span
          >
          <ul class="mobile-submenu" v-if="item.id === activeId">
            <li
              v-for="(submenu, index) in item.children"
              :key="index"
              class="mobile-submenu__item"
              v-on="handleShowDropdownInner(submenu.id)"
            >
              <router-link :to="submenu.link" class="mobile-submenu__link">
                {{ submenu.title }}
              </router-link>
              <ul
                class="mobile-submenu__inner"
                v-if="submenu.id === subActiveId"
              >
                <li
                  class="mobile-submenu__item"
                  v-for="(children, idx) in submenu.children"
                  :key="idx"
                >
                  <router-link to="/" class="mobile-submenu__link">
                    {{ children.title }}
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppButton from "../../../shared-components/AppButton";
import BlockWrap from "../../../shared-components/BlockWrap";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NavigationDrawer",
  components: { BlockWrap, AppButton },
  data() {
    return {
      activeId: null,
      subActiveId: null,
      menu: [
        {
          id: 1,
          title: "Yo'nalishlar",
          link: "/",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Web development",
              link: "#",
              children: [
                {
                  id: 7,
                  title: "Vue JS 3",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 8,
                  title: "React",
                  link: "#",
                  classMenu: false,
                },
              ],
            },
            {
              id: 21,
              title: "Economy",
              link: "#",
              children: [
                {
                  id: 9,
                  title: "International Financial Reporting Standards",
                  link: "#",
                },
              ],
            },
            {
              id: 22,
              title: "Natural sciences",
              link: "#",
              children: [
                {
                  id: 10,
                  title: "General, inorganic chemistry",
                  link: "#",
                },
              ],
            },
            {
              id: 23,
              title: "Computer graphics and design",
              link: "#",
              children: [
                {
                  id: 11,
                  title: "3d Max",
                  link: "#",
                },
              ],
            },
            {
              id: 24,
              title: "Exact Sciences",
              link: "#",
              children: [
                {
                  id: 12,
                  title: "Math",
                  link: "#",
                },
                {
                  id: 13,
                  title: "Physics",
                  link: "#",
                },
              ],
            },
            {
              id: 25,
              title: "Foreign languages",
              link: "#",
              children: [
                {
                  id: 14,
                  title: "General English",
                  link: "#",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          title: "Fanlar",
          link: "/subjects",
          submenu: false,
          children: [
            {
              id: 20,
              title: "Web development",
              link: "#",
              children: [
                {
                  id: 7,
                  title: "Vue JS 3",
                  link: "#",
                  classMenu: false,
                },
                {
                  id: 8,
                  title: "React",
                  link: "#",
                  classMenu: false,
                },
              ],
            },
          ],
        },
        /*          {
                    id: 3,
                    title: "Miramanda o'qitish",
                    link: "111",
                    submenu: false,
                    children: []
                  },*/
        {
          id: 3,
          title: "Konkurs natijalari",
          link: "/top-50",
          submenu: false,
          children: [],
        },
        {
          id: 4,
          title: "Testlar",
          link: "/choose-test",
          submenu: false,
          children: [],
        },
      ],
      search: "",
    };
  },
  computed: {
    ...mapGetters(["isLoggedOn", "skillTree", "subjectTree"]),
  },
  methods: {
    ...mapActions(["getSkillTree", "getSubjectTree", "getUser"]),
    clickMenu() {
      this.$emit("closeNavigationDrawer");
    },
    handleShowDropdown(item) {
      console.log("sds");
      if (item.children.length) {
        return {
          click: () => (this.activeId = item.id),
        };
      } else {
        return {
          click: () => this.$router.push(item.link),
        };
      }
    },
    handleShowDropdownInner(id) {
      return {
        click: () => (this.subActiveId = this.subActiveId === id ? null : id),
      };
    },
    hideMenus() {
      this.activeId = false;
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
  },
  async mounted() {
    if (this.userIsLoggedOn) {
      await this.getUser();
    }
    await this.getSkillTree();
    await this.getSubjectTree();
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
@import "../../../../assets/styles/abstracts/variables";

.navigation-drawer {
  position: fixed;
  top: 0;
  left: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  background: linear-gradient(279.37deg, #008ae4 0%, #a6dcff 158.68%);
  z-index: 50;
  overflow-y: auto;
  padding: 30px;

  &__close {
    background-color: #00d06c;
  }

  .header__search {
    margin-right: 0;

    .input__holder {
      max-width: 100%;
    }
  }
}

.mobile-menu {
  &__item {
    background-color: white;
    margin-bottom: 10px;
    border-radius: 10px;

    .mobile-submenu__inner {
      .mobile-submenu__item {
        background-color: #fafafa;
        padding-left: 15px;
        border-bottom: 1px solid $border-color;

        &:last-child {
          border-bottom: none;
        }
      }
    }
  }

  &__link {
    font-size: 16px;
    font-family: "Gilroy", sans-serif;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

.mobile-submenu {
  padding: 0 0 10px;

  &__item {
  }

  &__link {
    font-size: 14px;
    font-weight: 700;
    display: flex;
    width: 100%;
    padding: 10px 20px;
    transition: 0.3s;

    &:hover {
      color: $color-main;
    }
  }
}

@media (max-width: 768px) {
  .navigation-drawer {
    max-width: 75% !important;
  }
}
</style>
