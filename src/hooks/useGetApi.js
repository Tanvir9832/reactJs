import axios from "axios";
import { useState, useEffect } from "react";

const useGetApi = () => {
    const [data,setData] = useState([]);
  try {

    async function dataFetch() {
      let temp = await axios.get("https://api.spacexdata.com/v3/launches");
      setData(temp);
    }
    useEffect(() => {
      dataFetch();
    }, []);
    
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default useGetApi;
