type LanguageContent = {
  en: string;
  fr: string;
};

interface DataMenu {
  id: number;
  value: LanguageContent;
}
export const menuConfig: DataMenu[] = [
  {
    id: 0,
    value: {
      en: "Home",
      fr: "Acceuil",
    },
  },
  {
    id: 1,
    value: {
      en: "About",
      fr: "About FR",
    },
  },
  {
    id: 2,
    value: {
      en: "Skills",
      fr: "Skills FR",
    },
  },
  {
    id: 3,
    value: {
      en: "Work",
      fr: "work FR",
    },
  },
  {
    id: 4,
    value: { en: "Contact", fr: "Contact" },
  },
];
