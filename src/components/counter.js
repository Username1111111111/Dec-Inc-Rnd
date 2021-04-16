/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

const Counter = ({ counter, inc, dec, rnd }) => {
  return (
    <div className="jumbotron">
      <h1 id="counter">{counter}</h1>
      <button onClick={dec} id="dec" className="btn btn-primary">DEC</button>
      <button onClick={inc} id="inc" className="btn btn-primary">INC</button>
      <button onClick={rnd} id="rnd" className="btn btn-primary">RND</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state
  };
};

const mapDispatchToProps = (dispatch) => {
  // const {
  //   inc,
  //   dec,
  //   rnd
  // } = bindActionCreators(actions, dispatch);
  // return {
  //   inc,
  //   dec,
  //   rnd
  // };
  return bindActionCreators(actions, dispatch);
};

// Also possible:
// export default connect(mapStateToProps, actions)(Counter);
export default connect(mapStateToProps, mapDispatchToProps)(Counter);