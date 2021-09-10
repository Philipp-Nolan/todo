import React from 'react';
import Icon from '@mdi/react';
import { mdiAlert } from '@mdi/js';
import { mdiDelete } from '@mdi/js';
import { mdiCheck } from '@mdi/js';
import style from './style.module.sass';

function Main(props) {
  const { noteList, deleteHandler, clickHandler } = props;

  const list = noteList.map(function (element) {
    return (
      <ul key={element.id}>
        <li>
          <div className={style.control}>
            <button onClick={() => clickHandler(element)} className="button is-success">
              <Icon path={mdiCheck} size={1} horizontal vertical rotate={180} color="white" />
            </button>
            <button onClick={() => deleteHandler(element.id)} className="button is-danger">
              <Icon path={mdiDelete} size={1} horizontal vertical rotate={180} color="white" />
            </button>
          </div>
          {element.note} {element.date}
        </li>
      </ul>
    );
  });

  return (
    <div className={style.taskWrapper}>
      <div className={noteList.length !== 0 ? style.alertContainer : style.alertContainerVisible}>
        <Icon
          path={mdiAlert}
          title="User Profile"
          size={8}
          horizontal
          vertical
          rotate={180}
          color="coral"
        />
        <p> List is empty !</p>
      </div>
      <div className={style.taskContainer}>{list}</div>
    </div>
  );
}
export default Main;
