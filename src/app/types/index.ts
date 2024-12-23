export interface IPageConfig {
  home: string;
  accordion: string;
  calendar: string;
  cards: string;
  clock: string;
  kanban: string;
  reviews: string;
  slider: string;
  tabs: string;
  timers: string;
  todo: string;
  validation: string;
  weather: string;
}

export interface IItem {
  id: number | string;
  title: string;
  description?: string;
}

export interface INavItem extends IItem {
  link: string;
}

export interface ICard extends IItem {
  image: string;
}
