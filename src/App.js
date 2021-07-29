import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import User from './Component/User'


function App() {
	const [data, setUser] = useState(null);

	const url = "https://swapi.dev/api/people/";

	useEffect(() => {
		getAllUser();
	}, [url]);

	const getAllUser = () => {
		axios
			.get(url)
			.then((response) => {
				//console.log(response.data.results)
				const allUser = response.data.results;
				setUser(allUser);
			})
			.catch((error) => console.error(`Error: $(error)`));
	};

	if(data) {
		return (
			<div className="App">
				<User data={data} />
			</div>
		);
	}
	else{
		return (
			<div></div>
		)
	}
}
export default App;
