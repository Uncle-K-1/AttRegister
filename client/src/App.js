import React, { useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import './login.css';
import userS from './logins/userS'
import userT from './logins/userT'


function App() {
	const [backendData, setBackend] = useState([{}]);
	useEffect(() => {
		fetch("/api").then(
			response => response.json()
		).then(data => {
			setBackend(data);
		});

	}, []);


	return (

		<div>
			<div class="d-flex justify-content-center">

				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="#">University of Professional Science</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div class="navbar-nav">
							<Link class="nav-item nav-link active" to="/">Home</Link>
							<Link class="nav-item nav-link active" to="/about">About</Link>

						</div>
					</div>
				</nav>
			</div>

			<div class="d-flex justify-content-center">

				{typeof backendData.users === 'undefined' ? (
					<h1>Loading...</h1>
				) : (
					backendData.users.map((user, i) => (
						<h1 key={i}>{user}</h1>

					)))

				}
			</div>


			<Routes>
				<Route path='/about' element={<About />} />
				<Route path='/Slogin' element={<userS />} />
				<Route path='/Tlogin' element={<userT />} />
			</Routes>


		</div>



	);


}

export default App;
