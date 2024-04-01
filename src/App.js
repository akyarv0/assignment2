import React, { useState } from "react";
import data from "./helper/data"; // Veri dosyasını içe aktarın
import "./index.scss"; // SCSS dosyasını içe aktarın

const App = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5; // Her sayfada kaç öğe gösterileceği

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  return (
    <div className="container">
      <h1>
        Employee List "{startIndex + 1}"-"{endIndex}"
      </h1>
      <div>
        {paginatedData.map((person) => (
          <div className="person" key={person.id}>
            <img src={person.image} alt={person.name} />
            <div>
              <h4>{person.name}</h4>
              <p>{person.email}</p>
              <p>{person.age} years</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btns">
        <button onClick={() => setPage(1)}>First Page</button>
        <button onClick={() => setPage(data.length / itemsPerPage)}>Last Page</button>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={() => setPage(page + 1)}
          disabled={endIndex >= data.length}
        >
          Next
        </button>
       
      </div>
    </div>
  );
};

export default App;
