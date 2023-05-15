import i18n from "@/locales/i18n";
export default {
  localeKey(key) {
    return i18n.locale == "uz"
      ? key + "_uz"
      : i18n.locale == "en"
      ? key + "_en"
      : i18n.locale == "ar"
      ? key + "_ar"
      : i18n.locale == "fr"
      ? key + "_fr"
      : i18n.locale == "fo"
      ? key + "_fo"
      : "";
  },
};
