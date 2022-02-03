import React from "react";

import './card.componentstyles.css'

export const Card =(props)=>{
    return(
    <div className="card-container">
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&width="180",height="180"`}/>
        <h2>
        {props.monster.name}
             </h2>
        <p>{props.monster.email}</p>
    </div>
    )
}