import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../Redux/Actions/counterActions";

const Counter = ({ counter, increment, decrement, reset }) => {
  return (
    <div className="counter">
      <h2>My Redux Counter</h2>
      <hr />
      <button className="btn" onClick={() => increment()}>
        +
      </button>
      <span className="counter-value">{counter}</span>
      <button
        className="btn"
        onClick={() => {
          decrement();
        }}
      >
        -
      </button>
      <hr />
      <button className="reset-btn" onClick={() => reset()}>
        {" "}
        RESET{" "}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
