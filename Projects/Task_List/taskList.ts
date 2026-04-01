

/*
                --- Creating a Task List in TypeScript ---
    * Task interface contains the blueprint of properties that a task needs.
    * Variables can be defined as a Task type for creating Task objects.
    * Utility functions for updating tasks and data retrieval.
*/


// Task Interface with the Blueprints:
interface Task {
    id: number
    title: string
    status: 'todo' | 'in-progress' | 'done'
};

// Task Objects:
let firstTask: Task = {
    id: 1,
    title: "Learn TypeScript interfaces",
    status: "todo"
};

let secondTask: Task = {
    id: 2,
    title: "Build task management app",
    status: "in-progress"
};

let thirdTask: Task = {
    id: 3,
    title: "Write unit tests",
    status: "done"
};

// Utility Functions:
function getTaskInfo(task: Task): string { return `Task ${task.id}: ${task.title} - ${task.status}`; }

function addTask(taskList: Task[], title: string): Task[] {
    
    // Initialize a new Task Object with an unique identifier
    const newTask: Task = {
        id: taskList.length + 1,
        title: title,
        status: "todo"
    };

    // Create a new Task List object so prevent any interference with the original task list array
    const newTaskList: Task[] = [...taskList, newTask];

    // Return the new task list array
    return newTaskList;
}


// Testing & Printing to the Console:
let initialTasks: Task[] = [firstTask, secondTask];
let updatedTasks: Task[] = addTask(initialTasks, "Review code changes");

console.log(initialTasks.length)
console.log(updatedTasks.length)
let lastTask: Task = updatedTasks.at(-1)!;
console.log(getTaskInfo(lastTask))
console.log(lastTask.title)
console.log(lastTask.status)