import styles from './header.module.scss';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/Logo.svg';
import { useState } from 'react';

export default function Header({ onAddTask }) {
  const [title, setTitle] = useState('');

  const inputHandler = (e) => {
    e.preventDefault();
    if (title !== '') {
      onAddTask(title);
    }
    setTitle('');
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />
      <form onSubmit={inputHandler} className={styles.newTaskForm}>
        <input
          type="text"
          placeholder="add a new task"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}
