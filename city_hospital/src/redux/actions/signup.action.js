import * as ActionTypes from '../actiontypes';

export const signupdata_action = (values) => (dispatch) =>{
dispatch({type:ActionTypes.SIGN_UP,payload:values});
} 