import { useReducer } from "react";
import { createContext } from "react";

let initialData = {};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_DATA": {
      return action.payload.data;
    }
    default:
      return state;
  }
};

const DataContext = createContext();

const AllDataContext = (props) => {
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, AllDataContext };
