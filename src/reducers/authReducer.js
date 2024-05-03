const initialState = {
    loading: false,
    error: null,
  };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_AUTH_TOKEN':
        return {
          ...state,
          token: action.payload
        };
      default:
        return state;
    }
  };
  export default authReducer;