

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

function changeTaskStatus(taskList: Task[], taskId: number, newStatus: 'todo' | 'in-progress' | 'done'): Task[] {
    
    // Create two variables: one for appending task objects into the array, the other indicates whether the id has been found
    let modifiedTaskList: Task[] = [];
    let foundId: boolean = false;
    
    // Iterate through every task inside the taskList array
    taskList.forEach(task => {
        // Retrieve the current id of that task
        let currentTask: Task = {
            id: task.id,
            title: task.title,
            status: task.status
        };

        // If the current task id matches the inserted id to allocate, update the status to the inserted one and set foundId to true
        if (currentTask.id === taskId) {
            currentTask.status = newStatus;
            foundId = true;
        }

        // After every task search, push the current task into the modifiedTaskList array
        modifiedTaskList.push(currentTask);
    });

    // If the id has not been found, return the original taskList array
    if (!foundId) return taskList;

    // Else, return the modified taskList array
    return modifiedTaskList;
}


// Testing & Printing to the Console:
let TestTasks: Task[] = [firstTask, secondTask, thirdTask];
let progressTasks: Task[] = changeTaskStatus(TestTasks, 1, "in-progress");
let completedTasks: Task[] = changeTaskStatus(progressTasks, 2, "done");

console.log(getTaskInfo(TestTasks.at(0)!))
console.log(getTaskInfo(progressTasks.at(0)!))
console.log(getTaskInfo(completedTasks.at(1)!))
console.log(TestTasks.at(0)?.status)
console.log(completedTasks.at(1)?.status)