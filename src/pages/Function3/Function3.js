import React from "react";
import { TitleHome } from "../Home/HomeComponent";
export const Function3 = () => {
  const NumberArray1 = []
  const NumberArray2 = [1]
  const NumberArray3 = [1,2,3]
  const NumberArray4 = [1,1]
  const NumberArray5 = [1,2,3,4,5,6]
  const NumberArray6 = [1,5,3,2,5,10]
  const NumberArray7 =[100,5,3,2,99]
  const NumberArray8 = [35,5,3,2,5,100]
  const NumberArray = [1, 5, 101, 2, 5, 10];
  const NumberArray10 = [10,10,9];
  const findSecond = (NumberArray) => {
    const tempArray = [...new Set(NumberArray)];
    if (tempArray.length >= 2) {
      
      const second = tempArray.sort(function (a, b) {
        return b - a;
      })[1];
      return second;
    }
    else if(tempArray.length == 1) {
      
      return tempArray[0];
    } else {
      return "null";
    }
  };

  

  return (
    <>
      <TitleHome>Function3</TitleHome>
      <div>[{NumberArray1.map(e=>e+" ")}] //{findSecond(NumberArray1)}</div>
      <div>[{NumberArray2.map(e=>e+" ")}] //{findSecond(NumberArray2)}</div>
      <div>[{NumberArray3.map(e=>e+" ")}] //{findSecond(NumberArray3)}</div>
      <div>[{NumberArray4.map(e=>e+" ")}] //{findSecond(NumberArray4)}</div>
      <div>[{NumberArray5.map(e=>e+" ")}] //{findSecond(NumberArray5)}</div>
      <div>[{NumberArray6.map(e=>e+" ")}] //{findSecond(NumberArray6)}</div>
      <div>[{NumberArray7.map(e=>e+" ")}] //{findSecond(NumberArray7)}</div>
      <div>[{NumberArray8.map(e=>e+" ")}] //{findSecond(NumberArray8)}</div>
      <div>[{NumberArray.map(e=>e+" ")}] //{findSecond(NumberArray)}</div>
      <div>[{NumberArray10.map(e=>e+" ")}] //{findSecond(NumberArray10)}</div>
    </>
  );
};
