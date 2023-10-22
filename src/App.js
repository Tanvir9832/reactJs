import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";
import useGetApi from "./hooks/useGetApi";
import { useContext } from "react";
import { DataContext } from "./contexts/AllDataContext";

function App() {

  const x = useGetApi();

  const {dispatch , state} = useContext(DataContext);

  dispatch({type : "GET_DATA" , payload : x})
  console.log(state);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
