import decorationLogo from "../assets/DecorationLogo.png";

export const PAGE_NAME = "Party agency 'Fairy tale'" as const;

export const SOCIAL_MEDIA = {
  FACEBOOK: "https://www.facebook.com/flowertalesgt",
  INSTAGRAM: "https://instagram.com",
  LINKEDIN: "https://linkedin.com",
} as const;

export const NAV_ITEMS = [
  {
    label: "Начало",
    path: "/",
    enabled: true,
  },
  {
    label: "Украса",
    path: "/decoration",
    enabled: true,
  },
  {
    label: "Покани за гости",
    path: "/cards",
    enabled: true,
  },
  {
    label: "Подаръци за гости",
    path: "/",
    enabled: false,
  },
  {
    label: "Кетъринг",
    path: "/catering",
    enabled: false,
  },
  {
    label: "Контакти",
    path: "/contacts",
    enabled: true,
  },
] as const;

export const decorationCards = [
  {
    image: decorationLogo,
    title: "Рожден ден",
    link: "/decoration/birthday",
  },
  {
    image: decorationLogo,
    title: "Кръщене",
    link: "/decoration/baptism",
  },
  {
    image: decorationLogo,
    title: "Сватба",
    link: "/decoration/wedding",
  },
  {
    image: decorationLogo,
    title: "Абитуриентски бал",
    link: "/decoration/prom",
  },
  {
    image: decorationLogo,
    title: "Юбилей",
    link: "/decoration/anniversary",
  },
  {
    image: decorationLogo,
    title: "Корпоративни",
    link: "",
  },
] as const;
