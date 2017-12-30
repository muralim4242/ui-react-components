import {INIT_APP} from '../types';

export default (state={},action)=>
{
  switch (action.type) {
    case INIT_APP:
      return action.payload;
    default:
      return state;
  }

}
