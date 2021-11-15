import "./App.css";
import myData from "./Add materials/news.json";
import React from "react";
import moment from "moment";

function App() {
  let res = myData.map(function (item) {
    return (
      <div key={item.id}>
        <h3 className="news__title">{item.title}</h3>
        {item.isSpecial ? ( //         Если поле "особая новость" выставлено в true - выделить как-то новость при рендере.
          <div
            className="news__content"
            style={{ background: "#a929" }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        ) : (
          <div
            className="news__content"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        )}
        <p className="news__date">
          <b>Date of creation: </b>
          {moment(Date.parse(item.dateCreated.slice(0, 19))).format(
            //   Дату отформатировать по вашему усмотрению .....     заюзал moment
            "DD/MM/YYYY"
          )}
        </p>
        {item.categories && ( //   Если список категорий пуст - не выводить его.
          <p className="news__category">
            <b>Categories: </b>
            {item.categories.map(function (i) {
              return (
                <a className={"news__categoryName"} key={i.id} href="/#">
                  {"  " + i.name + " "}
                </a>
              );
            })}
          </p>
        )}
        {item.photo && ( //     Если картинка не задана - не выводить ее.
          <img
            className="news__image"
            src={item.photo + `?v=${item.id}`}
            alt="Pic"
          ></img>
        )}
        <p className="news__author">
          <b>Author: </b>
          {item.author}
        </p>
        {item.link && ( //    Если ссылка задана - сделать новость ссылкой, если не задана - просто вывести без ссылки.
          <p>
            Open link:{" "}
            <a className="news__link" href={item.link}>
              {item.link}
            </a>
          </p>
        )}
        <div
          style={{
            borderTop: "2px solid black",
            marginLeft: 20,
            marginRight: 20,
          }}
        ></div>
      </div>
    );
  });
  return (
    <>
      <h1>Daily news📰</h1>
      <div className="container">{res}</div>
    </>
  );
}

export default App;
