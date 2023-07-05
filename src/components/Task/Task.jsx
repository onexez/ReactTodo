import styles from './Task.module.scss';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default function Task({ task, deleteTask, completeTask }) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => completeTask(task.id)}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>
      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>
      <button
        className={styles.deleteButton}
        onClick={() => deleteTask(task.id)}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}
