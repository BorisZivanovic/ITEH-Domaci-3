import Avion from "./Avion";
import './Avioni.css'
function Avioni({avioni}){
    if(avioni.length === 0) {
        return <div>Prazna lista aviona..</div>
      }
    
      return ( 
        <div className="plane-list">
            {avioni.map((avion , key)=>{
                return<div className="card">
                     <Avion key = {key} 
                     manufacturer={avion.manufacturer} 
                     model={avion.model} 
                     engine_type={avion.engine_type}
                     max_speed_knots={avion.max_speed_knots}
                     wing_span_ft = {avion.wing_span_ft}
                     />
                </div>
        
        
      })}
        </div>
      )
}

export default Avioni;