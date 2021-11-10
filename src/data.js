export const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "content1" },
    "task-2": { id: "task-2", content: "content2" },
    "task-3": { id: "task-3", content: "content3" },
    "task-4": { id: "task-4", content: "content4" },
  },
  columns: {
    "col-1": {
      id: "col-1",
      title: "To-Do",
      taskId: ["task-1", "task-2", "task-3", "task-4"],
    },
    "col-2": {
      id: "col-2",
      title: "In-Prog",
      taskId: [],
    },
    "col-3": {
      id: "col-3",
      title: "Done",
      taskId: [],
    },
  },
  columnOrder: ["col-1","col-2","col-3"],
};
