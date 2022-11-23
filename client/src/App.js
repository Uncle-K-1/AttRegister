import React, { useEffect, useState } from 'react';

import { Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import './login.css';
import UserS from './UserS';
import UserT from './UserT';


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
			<div className="d-flex justify-content-center">

				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link className="navbar-brand" to="/">University of Professional Science</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<Link className="nav-item nav-link active" to="/">Home</Link>
							<Link className="nav-item nav-link active" to="/about">About</Link>

						</div>
					</div>
				</nav>
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/slogin' element={<UserS />} />
				<Route path='/about' element={<About />} />
				<Route path='/tlogin' element={<UserT />} />
			</Routes>


			<div className="d-flex justify-content-center">

				{typeof backendData.users === 'undefined' ? (
					<p>Loading...</p>
				) : (
					backendData.users.map((user, i) => (
						<h1 key={i}>{user}</h1>

					)))

				}
			</div>





		</div>



	);


}

export default App;
