import React from "react";
import data from "../exam-data.json";
import { TitleHome } from "./Home/HomeComponent";

export const Function1 = () => {
  const filterData = data.filter(function (a) {
    return +a.is_editable_price == false;
  });
  console.log(filterData);
  const nameProduct = [filterData.map((e)=>e.products.map(product=>product.name))]
  console.log(nameProduct)
  return (
    <>
      
      <TitleHome>Function1</TitleHome>
      {filterData.map((e) => (
        <div key={e.id}>
          Name : {e.products.map(product => product.name+" ")}
          &nbsp;
          weight : {e.products
            .map(product => product.weight).reduce((a, b) => a + b)}
        </div>
      ))}
    </>
  );
};
