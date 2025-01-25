"use client";

import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Column } from "../Column";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { moveTask, selectKanban } from "@/lib/features/kanban/kanbanSlice";

import styles from "./board.module.scss";

export const Board = () => {
  const dispatch = useAppDispatch();
  const { columns, tasks, columnOrder } = useAppSelector(selectKanban);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const sourceId = active.id as string;
    const sourceColumnId = active.data.current?.columnId as string;
    const destinationColumnId = over.id as string;

    if (sourceColumnId !== destinationColumnId) {
      const sourceColumn = columns[sourceColumnId];
      const destinationColumn = columns[destinationColumnId];

      const sourceIndex = sourceColumn.taskIds.indexOf(sourceId);
      const destinationIndex = destinationColumn.taskIds.length;
      dispatch(
        moveTask({
          source: { droppableId: sourceColumnId, index: sourceIndex },
          destination: {
            droppableId: destinationColumnId,
            index: destinationIndex,
          },
        })
      );
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className={styles.board}>
        {columnOrder.map((columnId) => {
          const column = columns[columnId];
          const columnTasks = column.taskIds.map((taskId) => tasks[taskId]);

          return <Column key={column.id} column={column} tasks={columnTasks} />;
        })}
      </div>
    </DndContext>
  );
};
