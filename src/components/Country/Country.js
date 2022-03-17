import React from "react";
import "./Country.css";

const Country = (props) => {
  console.log(props);
  const { flags, name, population, region, area } = props.country;
  return (
    <div className="country bg-danger">
      <img src={flags.png} alt="" />
      <h2>Country Name: {name.common}</h2>
      <h3>Country Population: {population}</h3>
      <p>
        <small>Region: {region}</small>
      </p>
      <p>
        <small>Area: {area}</small>
      </p>
    </div>
  );
};

export default Country;
