"use client";

import { useDroppable } from "@dnd-kit/core";
import { TeaskCard } from "../TaskCard";
import { IColumn, ITask } from "@/lib/features/kanban/kanbanSlice";

import styles from "./column.module.scss";

interface ColumnProps {
  column: IColumn;
  tasks: ITask[];
}

export const Column: React.FC<ColumnProps> = ({ column, tasks }) => {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  return (
    <div className={styles.column}>
      <h2 className={styles.columnTitle}>{column.title}</h2>
      <div ref={setNodeRef} className={styles.taskList}>
        {tasks.map((task) => (
          <TeaskCard
            key={task.id}
            id={task.id}
            task={task}
            columnId={column.id}
          />
        ))}
      </div>
    </div>
  );
};
