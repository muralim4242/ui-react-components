import { INIT_APP ,SET_SPECIFICATION} from '../types';
import {firebaseRef} from "../firebase";

export const initApp=()=>async dispatch=>{
  let appSnapshot=await firebaseRef.child("app").once("value");
  dispatch({type:INIT_APP,payload:appSnapshot.val() ||{}});
}

export const setSpecification=(location,property,customSpecification=[])=>async dispatch=>{
  if (location) {
    let specificationSnapshot=await firebaseRef.child(location).once("value");
    dispatch({type:SET_SPECIFICATION,property,payload:specificationSnapshot.val()||[]})
  } else {
    dispatch({type:SET_SPECIFICATION,property,payload:customSpecification||[]})
  }
}
