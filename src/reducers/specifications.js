import {SET_SPECIFICATION} from '../types';

export default (state={},action)=>
{
  switch (action.type) {
    case SET_SPECIFICATION:
      return {
        ...state,
        [action.property]:action.payload
      };
    default:
    return state;
  }

}
