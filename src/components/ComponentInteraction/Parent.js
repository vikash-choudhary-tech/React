import "./ComponentStyles.css";
import { useState, useEffect } from "react";
import ItemDescription from "./Child";
import axios from "axios";

export default function Parent() {
  const [data, setData] = useState([]);

  function getData() {
    return axios.get("https://dummyjson.com/products/search?q=phone");
  }

  function removeItemFromParent(event) {
    console.log("Triggered Item Id ", event);
    setData(data.filter((data) => data.id !== event));
  }

  function getImage() {
    return "https://thumbs.dreamstime.com/z/woman-praying-free-birds-to-nature-sunset-background-woman-praying-free-birds-enjoying-nature-sunset-99680945.jpg";
  }

  useEffect(() => {
    //Test Async Await
    // const fetchData = async () => {
    //     const result = await getData();
    //     setData(result.data.products);
    //   };
    //   fetchData();
    getData()
      .then(({ data }) => {
        console.log("data", data.products);
        setData(data.products);
      })
      .catch((error) => {
        console.log("Error", error.code);
      });
  }, []);

  return (
    <div className="App">
      {data.map((item) => (
        <div className="container" key={item.id}>
          {item.title}
          <ItemDescription
            description={item.description}
            id={item.id}
            removeItemFromParent={removeItemFromParent}
          />
          <div className="image-container">
            <img className="image" src={getImage()} alt="playing birds" />
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
