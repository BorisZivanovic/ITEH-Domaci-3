function Avion({ id,manufacturer,model ,engine_type, max_speed_knots, wing_span_ft}){

return(
       
            <div>
                <h3>{manufacturer} {model}</h3>
                <p>Max brzina: {max_speed_knots}kn<br></br>
                   Raspon: {wing_span_ft}ft<br></br>
                   Tip motora: {engine_type}
                </p>
                
            </div>

)
    
}

export default Avion;