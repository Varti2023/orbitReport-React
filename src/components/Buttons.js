import satData from "./satData.js"; 
import "./styling.css";

                
const Buttons = (props) =>
 {
  return (
      <div className="flex-container">
       { props.displaySats.map((sat, id)  => {
        return (
        <button className="button" onClick={() => props.filterByType(sat)} key={id}>
            {sat} Orbit
        </button>);
         })}
        <button className="button" onClick={() => props.setSat(satData)}>All Orbits</button>
      </div>
    );
   };


export default Buttons;