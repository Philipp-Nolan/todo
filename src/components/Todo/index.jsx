import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Main from './Main';
import style from './style.module.sass';
import dataList from '../../data/data';

function Todo(props) {
  const [noteList, setNoteList] = useState(dataList);

  const inputHandler = (value) => {
    const date = new Date().toLocaleDateString();
    const temp = {
      id: uuidv4(),
      note: value.note,
      date: date,
    };

    setNoteList({
      noteList: [noteList.state, temp],
    });

    console.log(noteList);
  };
  // const list = noteList.map(function (element) {
  //   return (
  //     <ul key={element.id}>
  //       <li>
  //         {element.note} {element.date}
  //       </li>
  //     </ul>
  //   );
  // });

  return (
    <div className={style.todoContainer}>
      <Header inputHandler={inputHandler} />
      {/* <Main list={list} /> */}
    </div>
  );
}
export default Todo;
