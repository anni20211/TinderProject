// import axios from 'axios';
import React,{useState,useEffect} from 'react';
import TinderCard from "react-tinder-card";
import "./Tindercards.css";
import axios from "./axios";
function TinderCards() {
    const [people,setPeople]= useState([]);
    useEffect(() => {
      async function fetchData(){
        const req=await axios.get("/tinder/cards");
        setPeople(req.data);
       
      }
      fetchData();
    }, []);
const swiped=(dir,nameToDelete)=>{
console.log("removing:"+nameToDelete);
};
const outOfFrame=(name)=>{
console.log(name+ "left");
};
  return (
    <div className="tinderCards" >
    <div className="tinderCards_container"  >
    {people.map((person)=>(
       <TinderCard
       className="swipe"
       key={person.name}
       preventSwipe={["up","down"]}
       onSwipe={(dir)=> swiped(dir,person.name)}
       onCardLeftScreen={()=> outOfFrame(person.name)}
         >
         <div
         style={{backgroundImage:`url(${person.imgUrl})`}}
         className="Card"
         >
         <h3>{person.name}</h3>
         </div>
       </TinderCard>
    ))}
    </div>
    </div>
  );
}
export default TinderCards;
