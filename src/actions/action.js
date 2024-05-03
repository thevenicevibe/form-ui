import axios from 'axios';

export const submitForm = (userData) => {
    return async (dispatch) => {
      try {
        const response = await axios.post('http://16.171.34.145:5000/api/manager/add-accident-report', userData);
        dispatch({ type: 'FORM_SUBMIT_SUCCESS', payload: response.data });
      } catch (error) {
        dispatch({ type: 'FORM_SUBMIT_FAILURE', payload: error.message });
      }
    };
  };

  export const setAuthToken = (token) => {
    return {
      type: 'SET_AUTH_TOKEN',
      payload: token
    };
  };
