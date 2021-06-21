import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from './Header';
import Main from './Main';
import style from './style.module.sass';
import dataList from '../../data/data';

function Todo() {
  const noteDelete = (event) => {
    console.dir(event.target);
  };

  // const inputHandler = (event) => {
  //   console.log(event);
  // };

  const list = dataList.map(function (element) {
    return (
      <ul key={element.id}>
        <li>
          {element.note} {element.date}
        </li>
      </ul>
    );
  });

  return (
    <div className={style.todoContainer}>
      <Header />
      <Main list={list} />
    </div>
  );
}
export default Todo;
