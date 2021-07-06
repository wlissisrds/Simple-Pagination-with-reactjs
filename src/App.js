import { useState } from "react";
import { api } from "./api";

import "./app.css";

function App() {
  const data = api;

  const perPage = 5;
  const pages = Math.ceil(data.length / perPage);

  const [page, setPage] = useState(1);

  //CRONTROLS=====================
  function next() {
    setPage(page + 1);
    if (page >= pages) {
      return;
    }
    update();
  }

  function prev() {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
    update();
  }

  function goTo(page) {
    setPage(page);
  }

  function update() {
    const start = (page - 1) * perPage;
    const end = start + perPage
    const newData = data.slice(start, end)
    console.log(newData)
    return newData;
  }


  const resultData = update();



  return (
    <div className="App">
      <h1>Pagination</h1>
      <ul className="content-list">
        {
          resultData.map(item =>
            <li key={item.id}>{item.valor}</li>
          )
        }
      </ul>
      <div className="buttons">
        <button onClick={prev} disabled={page === 1}>Prev</button>
        <button onClick={next} disabled={page === pages}>Next</button>
      </div>
    </div>
  );
}

export default App;
