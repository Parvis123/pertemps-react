import React from "react";
import logo from "../logo.jpg";
import "../App.css";
// import Button from "./button"
import NavList from "./navlist";

const NavbarContainer = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
			<a className="navbar-brand" href="www.bing.com">
				<img alt="pertempslogo" src={logo} className="pertemps-image"/> 
			</a>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="" aria-expanded="false" aria-label="Toggle navigation">
            	<span className="navbar-toggler-icon"></span>
        	</button>
        	<div className="collapse navbar-collapse sticky-top" id="navbar-content">
        		<ul className="navbar-nav">
        			<NavList />
        		</ul>
        	</div>
		</nav>
    );
};






export default NavbarContainer;