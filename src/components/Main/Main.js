import { useEffect, useState } from "react";
import { Data } from "./Context";
import axios from "axios";
import Weather from "../Weather";
import Input from "../Input";
import "./Main.css";

const Main = () => {
  const [query, setQuery] = useState("Kish");
  const [data, setData] = useState();
  const apiKey = "10e500a2733b2361f1e74acf08b3cccc";
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${apiKey}&units=metric&cnt=7`;

  useEffect(() => {
    const getData = async () => {
      axios
        .get(URL)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    };
    getData();
  }, [query]);
  return (
    <div className="main">
      <Data.Provider value={data}>
        <Input setQuery={setQuery} />
        <Weather />
      </Data.Provider>
    </div>
  );
};

export default Main;
