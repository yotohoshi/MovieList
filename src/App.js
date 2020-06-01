import React from "react";
import List from "./components/List";
import * as actions from "./actions";
import { connect } from "react-redux";
import logo from "./logo.png";
import "./styles.css";

class App extends React.Component {
  handleAddItem = payload => {
    console.log(payload);
    this.props.addMovie(payload);
  };

  handleRemoveItem = payload => {
    console.log(payload);
    this.props.removeMovie(payload);
  };

  render() {
    const { myList, recommendations } = this.props;
    return (
      <div className="App">
        <img className="logo" src={logo} alt="logo" />
        <List
          title="My List"
          movie={myList}
          buttonName="remove"
          handleMethod={this.handleRemoveItem}
        />
        <List
          title="Recommendations"
          movie={recommendations}
          buttonName="add"
          handleMethod={this.handleAddItem}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myList: state.myList,
  recommendations: state.recommendations
});

const mapDispatchToProps = dispatch => ({
  addMovie: payload => {
    dispatch(actions.addMovie(payload));
  },
  removeMovie: payload => {
    dispatch(actions.removeMovie(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
