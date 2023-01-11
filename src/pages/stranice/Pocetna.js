import Avioni from "../components/Avioni";
import './Pocetna.css'
function Pocetna({data}){
return(
    
        <div className="home"> 
            <h3>Najpopularniji avioni današnjice</h3>
            <Avioni avioni={data} />
        </div>

);
   
}

export default Pocetna;