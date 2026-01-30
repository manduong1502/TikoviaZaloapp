import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Cà phê": "Coffee",
      "Trà xanh": "Green Tea",
      "Đồ ăn vặt": "Snacks",
      "Trà sữa": "Milk Tea",
      "Giải khát": "Soft Drinks",
      "Bánh mỳ": "Bread/Banh Mi",
      "Nước ép": "Juice",
      "Tìm nhanh đồ uống, món mới ...": "Search for drinks, new items...",
      "Tìm kiếm": "Search"
    },
  },
  vi: {
    translation: {
      "Cà phê": "Cà phê",
      "Trà xanh": "Trà xanh",
      "Đồ ăn vặt": "Đồ ăn vặt",
      "Trà sữa": "Trà sữa",
      "Giải khát": "Giải khát",
      "Bánh mỳ": "Bánh mỳ",
      "Nước ép": "Nước ép",
      "Tìm nhanh đồ uống, món mới ...": "Tìm nhanh đồ uống, món mới ...",
      "Tìm kiếm": "Tìm kiếm"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;