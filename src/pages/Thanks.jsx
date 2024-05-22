import React from "react";
import { Wraper } from "../components/Wraper";

const Thanks = () => {
  // Retrieve all localStorage data
  const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
  const userOrigin = localStorage.getItem('userOrigin') || "";
  const checkedCourse = JSON.parse(localStorage.getItem('checkedCourse')) || "";
  const checkedEmojiAnswer = JSON.parse(localStorage.getItem('checkedEmojiAnswer')) || "";
  const checkedNumi = JSON.parse(localStorage.getItem('checkedNumi')) || "";

  return (
    <div className="container">
      <Wraper>
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса!</h1>
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <button type="button" id="get-link">
            Получить ссылку 
          </button>
          <div className="local-storage-data">
            <h2>Ваши ответы:</h2>
            <ul>
              <li><strong>Имя:</strong> {userInfo.name || "Не указано"}</li>
              <li><strong>Телефон:</strong> {userInfo.phone || "Не указано"}</li>
              <li><strong>Откуда вы про нас узнали:</strong> {userOrigin || "Не указано"}</li>
              <li><strong>Курс обучения:</strong> {checkedCourse || "Не указано"}</li>
              <li><strong>Ваш ответ 3 (Emoji):</strong> {checkedEmojiAnswer || "Не указано"}</li>
              <li><strong>Ваш ответ 4:</strong> {checkedNumi || "Не указано"}</li>
            </ul>
          </div>
        </div>
      </Wraper>
    </div>
  );
};

export default Thanks;

