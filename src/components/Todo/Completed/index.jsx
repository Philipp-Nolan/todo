import React from 'react';
import Icon from '@mdi/react';
import { mdiCancel } from '@mdi/js';
import { mdiAlert } from '@mdi/js';
import style from './style.module.sass';

function Completed(props) {
  const { completed, erasingHandler } = props;
  const completedList = completed.map(function (element) {
    return (
      <ul key={element.id}>
        <li>
          {element.note} {element.date}
          <div className={style.control}></div>
        </li>
      </ul>
    );
  });

  return (
    <>
      <div className={style.completed}>
        <div
          className={completed.length !== 0 ? style.alertContainer : style.alertContainerVisible}>
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
        <div className={style.completedContainer}>{completedList}</div>
      </div>
      <div>
        <button onClick={erasingHandler} className="button is-warning">
          <Icon path={mdiCancel} size={1} horizontal vertical rotate={180} color="white" />
        </button>
      </div>
    </>
  );
}
export default Completed;

{
}
