export const ACTION_TYPES = Object.freeze({
  turn_on: 'turn_on',
  turn_off: 'turn_off',
  toggle: 'toggle'
});

// turn on
// { type: ACTION_TYPES.turn_on }
export const createTurnOnAction = () => ({ type: ACTION_TYPES.turn_on });

// turn off
export const createTurnOffAction = () => ({ type: ACTION_TYPES.turn_off });

// toggle
export const createToggleAction = () => ({ type: ACTION_TYPES.toggle });