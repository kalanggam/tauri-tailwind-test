const { invoke } = window.__TAURI__.tauri;

let taskInputEl;
let taskListEl;

async function addTask() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  if (taskInputEl.value === "") {
    console.log("[LOG] Task not created - no input given");
  } else {
    let text = await invoke("add_task", { task: taskInputEl.value });
    let item = document.createElement("li");
    item.appendChild(document.createTextNode(text));
    taskListEl.insertBefore(item, taskListEl.children[0]);
    taskInputEl.value = "";
    console.log("[LOG] Task created: " + text);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  taskInputEl = document.querySelector("#task-input");
  taskListEl = document.querySelector("#task-list");
  document.querySelector("#task-form").addEventListener("submit", (e) => {
    e.preventDefault();
    addTask();
  });
});
