import React from "react";
import { connect } from "react-redux";
import {
  createTurnOnAction,
  createTurnOffAction,
  createToggleAction,
} from "./../redux/actions";

function FlashLight({
  on = false,
  turnOff = () => {},
  turnOn = () => {},
  toggle = () => {},
}) {
  const styles = {
    width: 100,
    height: 100,
    borderRadius: "50%",
    border: "1px solid",
    margin: "auto",
  };
  if (on) {
    styles.backgroundColor = "yellow";
  }
  return (
    <>
      <h1>FlashLight</h1>
      <div style={styles}></div>
      <div className="controls">
        <button onClick={turnOn}>Turn On</button>
        <button onClick={turnOff}>Turn Off</button>
        <button onClick={toggle}>Toggle</button>
      </div>
    </>
  );
}

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  on: state.lightOn,
});

const mapDispatchToProps = {
  turnOn: createTurnOnAction,
  turnOff: createTurnOffAction,
  toggle: createToggleAction,
};

const ConnectedFlashLight = connect(mapStateToProps, mapDispatchToProps);

export default ConnectedFlashLight(FlashLight);
