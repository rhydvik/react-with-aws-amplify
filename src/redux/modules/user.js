import initialState from '../initialState';

// Actions
const GET_PROFILE = 'user/GET-PROFILE';
const UPDATE_PROFILE = 'user/UPDATE-PROFILE';

// Reducer
export default function reducer(state = initialState.user, action = {}) {
  switch (action.type) {
    case GET_PROFILE:
      return action.payload;
    case UPDATE_PROFILE:
      return action.payload;
    default:
      return state;
  }
}

// Action Creators
export function getProfile(payload) {
  return async dispatch => dispatch({ type: GET_PROFILE, payload });
}

export function updateProfile(input) {
  return async dispatch => dispatch({ type: UPDATE_PROFILE, payload: input });
}
