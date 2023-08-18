import React from 'react';

function Show({veggies}){
    console.log(veggies)
        return (
          <div>
            <h1>The {veggies.name} is {veggies.color} </h1>
            {
               veggies.readyToEat ? "It's ready to eat" : "Ew Yuck"
            }
          </div>
         );
        }
     module.exports  = Show;