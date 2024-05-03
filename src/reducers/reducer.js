const initialState = {
    loading: false,
    error: null,
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FORM_SUBMIT_REQUEST':
        return { ...state, loading: true };
      case 'FORM_SUBMIT_SUCCESS':
        return { ...state, loading: false, error: null };
      case 'FORM_SUBMIT_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

 
  
  
  export default formReducer;