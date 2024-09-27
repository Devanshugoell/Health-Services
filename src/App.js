import React, { useEffect, useState } from "react";
import "./App.css";
import { Services } from "./services";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(Services);
  }, []);

  const handleEdit = (id) => {
    alert(id);
  };
  const handleDelete = (id) => {
    alert(id);
  };

  return (
    <div className="app">
      <table className="table">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.Description}</td>
                <td>{item.Price}</td>
                <td className="btn">
                  <button className="edit" onClick={() => handleEdit(item.id)}>
                    Edit
                  </button>
                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
