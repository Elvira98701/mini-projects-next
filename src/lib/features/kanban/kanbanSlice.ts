import { RootState } from "@/lib/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ITask {
  id: string;
  content: string;
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

interface KanbanState {
  columns: Record<string, IColumn>;
  tasks: Record<string, ITask>;
  columnOrder: string[];
}

interface MoveTaskPayload {
  source: {
    droppableId: string;
    index: number;
  };
  destination: {
    droppableId: string;
    index: number;
  } | null;
}

const initialState: KanbanState = {
  columns: {
    "column-1": {
      id: "column-1",
      title: "Сделать",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "В процессе",
      taskIds: ["task-3"],
    },
    "column-3": {
      id: "column-3",
      title: "Завершено",
      taskIds: [],
    },
  },
  tasks: {
    "task-1": { id: "task-1", content: "Learn Redux Toolkit" },
    "task-2": { id: "task-2", content: "Build Kanban Board" },
    "task-3": { id: "task-3", content: "Add Drag and Drop" },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

const kanbanSlice = createSlice({
  name: "kanban",
  initialState,
  reducers: {
    moveTask: (state, action: PayloadAction<MoveTaskPayload>) => {
      const { source, destination } = action.payload;

      if (!destination) return;

      const sourceColumn = state.columns[source.droppableId];
      const destinationColumn = state.columns[destination.droppableId];

      const sourceTasks = Array.from(sourceColumn.taskIds);
      const [removed] = sourceTasks.splice(source.index, 1);

      const destinationTasks = Array.from(destinationColumn.taskIds);
      destinationTasks.splice(destination.index, 0, removed);

      state.columns[source.droppableId].taskIds = sourceTasks;
      state.columns[destination.droppableId].taskIds = destinationTasks;
    },
  },
});

export const { moveTask } = kanbanSlice.actions;
export default kanbanSlice.reducer;

export const selectKanban = (state: RootState) => state.kanban;
