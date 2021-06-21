import React from 'react';
import style from './style.module.sass';

function Main(props) {
  const { list } = props;
  return (
    <div className={style.taskWrapper}>
      <div className={style.taskContainer}>{list} </div>
    </div>
  );
}
export default Main;
{
  /* <div className={style.control}>
        <input className={style.check} type="checkbox"></input>
        <button className="button is-danger">X</button>
      </div> */
}
