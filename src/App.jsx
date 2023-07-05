import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

const LOCAL_STORAGE_KEY = 'todo:savedTodos';

function App() {
  const [tasks, setTask] = useState([]);

  const taskLength = tasks.length;
  const taskQuantity = tasks.filter((task) => task.isCompleted === true).length;

  const setTaskAndSave = (newTasks) => {
    setTask(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const loadSavedTasks = () => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTask(JSON.parse(saved));
    }
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTaskAndSave(newTasks);
  };

  const completeTask = (taskId) => {
    const complete = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTaskAndSave(complete);
  };

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
