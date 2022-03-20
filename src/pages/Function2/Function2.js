import moment from 'moment'
import React from 'react'
import { TitleHome } from '../Home/HomeComponent'

export const Function2 = () => {

  const date = new Date("2020-08-10T14:54:52+07:00")
  console.log(date)

  const date2 = moment(date).format("DD/MM/YYYY h:mm")
  console.log(date2)
  
  const ThaiDate = date.toLocaleDateString('th-TH',{
    year : 'numeric',
    month : 'long',
    day: 'numeric'
  })
  console.log(ThaiDate)

  const month = date.getMonth()+1;
  const year = date.getFullYear();
  const daysInMonth = new Date(year, month, 0).getDate();
  console.log(daysInMonth)

  const quarter = Math.floor((date.getMonth()+3)/3);
  console.log(quarter)

  const unix = Math.floor(date.getTime() / 1000)
  console.log(unix)

  return (
    <>
    <TitleHome>Function2</TitleHome>
    <div>{date2}</div>
    <div>{ThaiDate}</div>
    <div>{daysInMonth}</div>
    <div>{quarter}</div>
    <div>{unix}</div>

    </>
    
    
  )
}
