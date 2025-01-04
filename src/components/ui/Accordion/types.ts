import { IItem } from "@/types";

export interface AccordionProps {
  className?: string;
  items: IItem[];
}

export interface ItemProps {
  title: string;
  description?: string;
}
