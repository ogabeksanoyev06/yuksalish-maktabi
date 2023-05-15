import Vue from "vue";
import VueI18n from "vue-i18n";
import { en } from "./langs/en.json";
import { uz } from "./langs/uz.json";
import { ru } from "./langs/ru.json";

Vue.use(VueI18n);

export const selectedLocale = "uz";
export const languages = [
  { name: "O'zbek", value: "uz" },
  { name: "English", value: "en" },
  { name: "Russian", value: "ru" },
];

const messages = {
  uz,
  en,
  ru,
};

const i18n = new VueI18n({
  locale: selectedLocale,
  messages,
});

export default i18n;
