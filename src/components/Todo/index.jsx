import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Main from './Main';
import Completed from './Completed';
import style from './style.module.sass';
import dataList from '../../data/data';
import completedList from '../../data/completed';

function Todo(props) {
  const [noteList, setNoteList] = useState(dataList);
  const [completed, setCompleted] = useState(completedList);

  const erasingHandler = () => {
    setCompleted((completed) => []);
  };

  const clickHandler = (elem) => {
    setCompleted((completedList) => [...completed, elem]);
    const deleteElem = Object.values(noteList).filter((list) => list.id !== elem.id);
    setNoteList((noteList) => [...deleteElem]);
  };

  const deleteHandler = (id) => {
    const deleteElem = Object.values(noteList).filter((list) => list.id !== id);
    setNoteList((noteList) => [...deleteElem]);
  };

  const inputHandler = (value) => {
    const date = new Date().toLocaleDateString();
    const temp = {
      id: uuidv4(),
      note: value.note,
      date: date,
    };

    setNoteList((noteList) => [...noteList, temp]);
  };

  return (
    <div className={style.todoContainer}>
      <Header erasingHandler={erasingHandler} inputHandler={inputHandler} />
      <div className={style.wrapper}>
        <Main clickHandler={clickHandler} deleteHandler={deleteHandler} noteList={noteList} />
        <Completed erasingHandler={erasingHandler} completed={completed} />
      </div>
    </div>
  );
}
export default Todo;
