import React from "react";
import { array, string, func } from "prop-types";
import "./styles.css";

const propTypes = {
  title: string,
  movie: array,
  buttonName: string,
  handleMethod: func.isRequired
};

const defaultProps = {
  title: "",
  movie: [],
  buttonName: ""
};

const List = ({ title, movie, buttonName, handleMethod }) => (
  <div>
    <h1>{title}</h1>
    <div className="container">
      {movie.map(item => (
        <div className="card" key={item.id}>
          <p>{item.title}</p>
          <img src={item.img} alt={item.id} />
          <button onClick={() => handleMethod(item.id)}>{buttonName}</button>
        </div>
      ))}
    </div>
  </div>
);

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
