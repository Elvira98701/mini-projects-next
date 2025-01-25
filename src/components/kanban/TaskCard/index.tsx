"use client";

import { ITask } from "@/lib/features/kanban/kanbanSlice";
import { useDraggable } from "@dnd-kit/core";

import styles from "./task.module.scss";

interface TeaskCardProps {
  task: ITask;
  id: string;
  columnId: string;
}

export const TeaskCard: React.FC<TeaskCardProps> = ({ task, id, columnId }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: {
      columnId,
    },
  });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={styles.task}
    >
      {task.content}
    </div>
  );
};
