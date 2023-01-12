import { BsSearch } from 'react-icons/bs';
import './SearchBar.css'
function SearchBar(){
   return(
    <button className="dugmePretraga">
				<BsSearch className="search" />
				<input
					type="text"
					id="myInput"
					onKeyUp={window['funkcijaZaPretragu']}
					placeholder="Pretrazi avione po modelu"
				/>
	</button>
   )
}

export default SearchBar;