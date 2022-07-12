import { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Task } from '../Task';
import * as S from './styles';

export const CardTask = () => {
  const moths = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUNE',
    'JULY',
    'AUG',
    'SEPT',
    'OCT',
    'NOV',
    'DEC',
  ];
  const weeks = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const week = date.getDay();

  const [tasks, setTasks] = useState([
    {
      title: 'Estudar JavaScript',
      done: false,
    },
    { title: 'Estudar React', done: false },
  ]);
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');

  function handleStatus(id: number) {
    const newTasks = tasks.map((task, index) => {
      if (index == id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTask(id: number) {
    const newTasks = tasks.filter((task, index) => index != id);
    setTasks(newTasks);
  }

  function handleInput() {
    setIsVisible(!isVisible);
  }
  function addTask(title: string) {
    const newTasks = [...tasks, { title: title, done: false }];
    setTasks(newTasks);
  }
  return (
    <S.Card>
      <S.Container>
        <header>
          <div className="date">
            <p className="day">{day}</p>
            <div>
              <p className="month">{moths[month]}</p>
              <p className="year">{year}</p>
            </div>
          </div>
          <div>
            <p className="week">{weeks[week]}</p>
          </div>
        </header>
        {isVisible ? (
          <Input setTitle={setTitle} addTask={addTask} title={title} />
        ) : null}
        <main>
          {tasks.map((task, index) => (
            <Task
              task={task.title}
              isOk={task.done}
              key={task.title}
              onChangeStatus={() => handleStatus(index)}
              deleteTask={() => deleteTask(index)}
            />
          ))}
        </main>
      </S.Container>
      {<Button toggleInput={() => handleInput()} />}
    </S.Card>
  );
};
