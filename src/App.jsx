import { useState } from 'react'
import './App.css'
import ServiceCard from './components/ServiceCard'
const Display = ()=>{
const data = [{
  id : 1, title : "Web Development", description:"We build a stunning customisable and attractive website for you and your Business"
},
{id :2, title :"AI consultant", description:"We consult only brand builders"},
{id :3, title :"AI Solution", description:"We consult only brand builders that required Software as a service"}]

return(
  <>
    <h1>
      Functional Services from Kalvium and Company
    </h1>
    {data.map((emp)=>
    <ServiceCard 
      key = {emp.id}
      title = {emp.title}
      description={emp.description}
    />
    )}
  </>
)
}
export default Display;
