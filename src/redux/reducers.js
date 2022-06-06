import {ACTION_TYPES} from './actions';

const FlashLightReducer = (state={ lightOn: false }, action) => {
  switch (action.type) {
    case ACTION_TYPES.turn_off: {
      return {...state, lightOn: false};
    }
    case ACTION_TYPES.turn_on: {
      return {...state, lightOn: true};
    }
    case ACTION_TYPES.toggle: {
      return {...state, lightOn: !state.lightOn};
    }
    default:
      return state;
  }
};

export default FlashLightReducer;