import SearchBar from "../components/SearchBar";
import './Pretraga.css'
function Pretraga({data}){

    return(
        <div>
             <SearchBar/>
             <div>
			<div>
		
				<table className="tabela" id="myTable">
					<thead>
					<th>Model</th>
					<th>Proizvodjac</th>
					<th>Tip motora</th>
					<th>Max brzina</th>
					<th>Raspon</th>		
					</thead>
					<tbody>
					
						{data.map((avion,key) => (
							
							<tr key={key}>
								<td>{avion.model}</td>
								<td>{avion.manufacturer}</td>
								<td>{avion.engine_type}</td>
								<td>{avion.max_speed_knots}</td>
								<td>{avion.wing_span_ft}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>


        </div>




    )


}

export default Pretraga;