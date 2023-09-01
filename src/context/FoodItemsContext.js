import { createContext, useContext } from "react";
import { useState,useEffect } from "react";
import axios from "axios";
// create a new Context
const FoodItemsContext = createContext({});

export const FoodItemsContextProvider = (props) => {
  const url = "http://localhost:3100/pizza";
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setFoodItems(res.data);
    });
  }, []);
  let values = {foodItems};
  return (
    <>
      <FoodItemsContext.Provider value={values}>
        {props.children}
      </FoodItemsContext.Provider>
    </>
  );
};

// create a custom Hook so that we can use this Hook
export const useFoodItemsContext = () => {
  return useContext(FoodItemsContext);
};
