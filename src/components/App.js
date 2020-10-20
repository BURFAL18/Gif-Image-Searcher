import React from "react";
import Jumbotron from "./Jumbotron";

class App extends React.Component
{
   onSearchSubmit(term)
   {  
    console.log(term);
   }

render()
{
  return (
    <div>
      <Jumbotron/> 
    </div>
  );
}
};
export default App;



