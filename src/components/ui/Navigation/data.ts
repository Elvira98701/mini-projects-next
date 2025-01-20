import { pageConfig } from "@/helpers/pages.config";
import { INavItem } from "@/types";

export const data: INavItem[] = [
  {
    id: 1,
    title: "Карточки",
    link: pageConfig.cards,
  },
  {
    id: 2,
    title: "Таймеры",
    link: pageConfig.timers,
  },
  {
    id: 3,
    title: "Аккордеон",
    link: pageConfig.accordion,
  },
  {
    id: 4,
    title: "Табы",
    link: pageConfig.tabs,
  },
  {
    id: 5,
    title: "Список дел",
    link: pageConfig.todo,
  },
  {
    id: 6,
    title: "Календарь + Часы",
    link: pageConfig.calendar,
  },
  {
    id: 7,
    title: "Погода",
    link: pageConfig.weather,
  },
  {
    id: 8,
    title: "Слайдер",
    link: pageConfig.slider,
  },
  {
    id: 9,
    title: "Отзывы",
    link: pageConfig.reviews,
  },
  {
    id: 10,
    title: "Валидация",
    link: pageConfig.validation,
  },
  {
    id: 11,
    title: "Канбан-доска",
    link: pageConfig.kanban,
  },
];
