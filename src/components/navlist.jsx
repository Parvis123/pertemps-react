import React from "react";
import "../App.css";

let navbarNames = [
  { title: "Find a Job", link: "http:www.google.com" },
  { title: "Saved Jobs", link: "http:google.com" },
  { title: "Article Examples", link: "http:google.com" },
  { title: "Functionality", link: "http:google.com" },
  { title: "Contact Multiple", link: "http:google.com" },
  { title: "Contact Single", link: "http:google.com" }
];

let NavList = () => {
  return navbarNames.map((x, i) => {
    return (
      <li className="nav-item">
        <a key={i} href={x.link} className="nav-link">
          {x.title}
        </a>
      </li>
    );
  });
};

export default NavList;
