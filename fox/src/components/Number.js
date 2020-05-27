import React from "react";
import { connect } from "react-redux";

import { getNumber } from "../actions";

const Quotes = ({ getNumber, number, isFetching, error }) => {
  if (isFetching) {
    return <h2>Fetching a Year History Now</h2>;
  } else {
    return (
      <div>
        <h2>Year History:</h2>
        <p className='Year'>{number}</p>
        <button onClick={getNumber} className='button'>Load New Year Fact</button>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    number: state.number,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getNumber }
)(Quotes);
