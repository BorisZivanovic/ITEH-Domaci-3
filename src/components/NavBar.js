import { Link } from "react-router-dom";
import './NavBar.css'
function NavBar(){

    return(
        <div className='navbar'>
            <nav>
               <Link to="/" className='brand'>
                    <h1>Avioni</h1>
               </Link> 
               <Link to="/">
                Pocetna
                </Link>
                <Link to="/pretraga">Pretraga</Link>
                <Link to="/kontakt">Dodatne informacije</Link>
                
            </nav>
        </div>

    );





}
export default NavBar;











