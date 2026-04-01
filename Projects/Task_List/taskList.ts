

/*
                --- Creating a Task List in TypeScript ---
    * Task interface contains the blueprint of properties that a task needs.
    * Variables can be defined as a Task type for creating Task objects.
    * Utility functions for data retrieval.
*/


// Task Interface with the Blueprints:
interface Task {
    id: number
    title: string
    status: 'todo' | 'in-progress' | 'done'
};

// Task Objects:
const firstTask: Task = {
    id: 1,
    title: "Learn TypeScript interfaces",
    status: "todo"
};

const secondTask: Task = {
    id: 2,
    title: "Build task management app",
    status: "in-progress"
};

const thirdTask: Task = {
    id: 3,
    title: "Write unit tests",
    status: "done"
};

// Utility Functions:
function getTaskInfo(task: Task): string { return `Task ${task.id}: ${task.title} - ${task.status}`; }


// Testing & Printing to the Console:
console.log(getTaskInfo(firstTask))
console.log(getTaskInfo(secondTask))
console.log(getTaskInfo(thirdTask))
console.log(firstTask.status)
console.log(secondTask.title)