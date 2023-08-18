import React from "react";

    class Index extends React.Component {
      render() {
          const { fruits } = this.props;
          console.log(fruits)
          return (
                  <div>
                      
                          {fruits.map((fruit, i) => {
                              return (
                                  <li key={i}>               
                                      <a href={`/fruits/${i}`}> {fruit.name}</a> 
                                      is {fruit.color} <br></br>
                                      {fruit.readyToEat? `It is ready to eat` : `It is not ready to eat`}
                                      <br/>
                                  </li>
                              );
                          })}
                  </div>
          );
      }
    }
    module.exports = Index;