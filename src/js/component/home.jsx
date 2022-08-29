import React from "react";
import ReactDOM from 'react-dom';


//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	console.log(props);
	return (
		<div className="bg-dark display-1 d-flex justify-content-center">
			<div className="text-white">🕐</div>
			<div className="text-white">{props.cienmil}</div>
			<div className="text-white">{props.diezmil}</div>
			<div className="text-white">{props.mil}</div>
			<div className="text-white">{props.cien}</div>
			<div className="text-white">{props.diez}</div>
			<div className="text-white">{props.uno}</div>
		</div>
	);
};


export default Home;
