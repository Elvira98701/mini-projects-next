import { IItem } from "@/app/types";

export interface Props {
  className?: string;
  items: IItem[];
}

export interface ItemProps {
  title: string;
  description?: string;
}
