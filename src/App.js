import React, { useEffect, useState } from "react";
import "./App.css";
import { Services } from "./services";

const App = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [description, setDesciption] = useState("");
  const [price, setPrice] = useState(0);
  const [isUpdate, setisUpdate] = useState(false);

  useEffect(() => {
    setData(Services);
  }, []);

  const handleEdit = (id) => {
    const dt = data.filter((item) => item.id === id);

    if (dt !== undefined) {
      setisUpdate(true);
      setId(id);
      setName(dt[0].name);
      setDesciption(dt[0].description);
      setPrice(dt[0].price);
    }
  };

  const handleDelete = (id) => {
    if (id > 0) {
      if (window.confirm(`Do you want to delete id:${id}`)) {
        const dt = data.filter((item) => item.id !== id);
        setData(dt);
      }
    }
  };

  const handleSave = (e) => {
    let error = "";

    if (name === " ") {
      error += "Name is required ,";
    }

    if (description === "") {
      error += "Description is required ,";
    }
    if (price <= 0) {
      error += "Price is required";
    }

    if (error === "") {
      e.preventDefault();
      const dt = [...data];
      const newObject = {
        id: Services.length + 1,
        name: name,
        description: description,
        price: price,
      };
      dt.push(newObject);
      setData(dt);
      handleClear();
    } else {
      alert(error);
    }
  };

  const handleUpdate = () => {
    const index = data
      .map((item) => {
        return item.id;
      })
      .indexOf(id);

    const dt = [...data];
    dt[index].name = name;
    dt[index].description = description;
    dt[index].price = price;
    console.log(dt[index]);

    setData(dt);
    handleClear();
  };

  const handleClear = () => {
    setId(0);
    setName("");
    setDesciption("");
    setPrice("");
    setisUpdate(false);
  };

  return (
    <div className="app">
      <div className="inputs">
        <div>
          <label>
            Name :
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
        </div>
        <div>
          <label>
            Description :
            <input
              type="text"
              placeholder="Description"
              onChange={(e) => setDesciption(e.target.value)}
              value={description}
            />
          </label>
        </div>
        <div>
          <label>
            Price :
            <input
              text="text"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </label>
        </div>
        <div>
          {!isUpdate ? (
            <button className="save" onClick={(e) => handleSave(e)}>
              Save
            </button>
          ) : (
            <button className="save" onClick={() => handleUpdate()}>
              Update
            </button>
          )}

          <button className="clear" onClick={() => handleClear()}>
            Clear
          </button>
        </div>
      </div>

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
                <td>{item.description}</td>
                <td>{item.price}</td>
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
