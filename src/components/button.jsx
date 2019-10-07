import React from "react";
import "../App.css";

const Button = ({ title, link }) => {
  return <button href={link}>{title}</button>;
};

export default Button;
