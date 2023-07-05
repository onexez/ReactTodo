import Task from '../Task/Task';
import styles from './tasks.module.scss';

export default function Tasks({
  tasks,
  deleteTask,
  completeTask,
  taskLength,
  taskQuantity,
}) {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{taskLength}</span>
        </div>
        <div>
          <p>Completed</p>
          <span>
            {taskQuantity} of {taskLength}
          </span>
        </div>
      </header>
      <div className={styles.list}>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            completeTask={completeTask}
          />
        ))}
      </div>
    </section>
  );
}
