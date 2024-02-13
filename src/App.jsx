import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";

const LOCAL_STORAGE_KEY = "todo:savedTodo";

function App() {
  const [tasks, setTask] = useState([]);

  const taskLength = tasks.length;

  //Кол-во завершенных
  const taskQuantity = tasks.filter((task) => task.isCompleted === true).length;

  //Сохранение в LocalStr
  const setTaskAndSave = (newTasks) => {
    setTask(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  //Загрузка из LocalStr
  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTask(JSON.parse(saved));
    }
  };

  //Удаление Задачи
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  };

  //Выполненная Задача
  const completeTask = (taskId) => {
    const complete = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskAndSave(complete);
  };

  //Добавление новой задачи в список
  const addTask = (taskTitle) => {
    setTaskAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  //Рендер списка задач при первой загрузке
  useEffect(() => {
    loadSavedTasks();
  }, []);
  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
        taskLength={taskLength}
        taskQuantity={taskQuantity}
      />
    </>
  );
}

export default App;
