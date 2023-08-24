import React from "react";

function Index({ veggies }) {
  return (
    <div>
      <nav>
        <a href='/veggies/new'>Create New Veggie</a>
      </nav>
      {veggies.map((veggie, i) => {
        return (
          <li key={i}>

            <a href={`/veggies/${veggie.id}`}>{veggie.name}</a> is {veggie.color} <br />
            and {
              veggie.readyToEat ? "it is ready to eat" : "it is not ready to eat"
            }
          </li>
        );
      })}
    </div>
  );
}

module.exports = Index;