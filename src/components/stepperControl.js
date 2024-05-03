import React, {useContext, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { submitForm ,setAuthToken} from '../actions/action';



const StepperControl = ({handleClick,currentStep,icons, submitForm}) => {
    const authToken = useSelector(state => state.auth.token);

    const dispatch = useDispatch();
    
    const iconsArray = Object.entries(icons).map(([key, iconComponent]) => ({
        key,
        iconComponent
      }));

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          fetch("http://16.171.34.145:5000/api/manager/add-accident-report", {
            method: "POST",
            "Authorization": `Bearer ${authToken}`,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName: '',
                  telePhone: '',
                  state: '',
                  city: '',
                  hotel: '',
                  socialSecurity: '',
                  date: '',
                  employeeAddress: '',
                  gender: '',
                  postalCode: '',
                  civilStatus: '',
                  degree: '',
                  dateOfhire: '',
                  salary: '',
                  averageHrs: '',
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              
              const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtYW5hZ2VySWQiOiI2NWI3OGYyZGRlNjcwZmZlNWRiZDY4NDIiLCJlbWFpbCI6InBpeXVzaC52eWFzQHNhdmllc2FpbmZvdGVjaC5jb20iLCJyb2xlIjoiTWFuYWdlciIsImlhdCI6MTcwOTc5MjkxMiwiZXhwIjoyMDE3Mzc2OTEyfQ.VwTxP89LF-tJGLFaHw2vMrDHrQzpTmKU2rvJFgvmU_4'; 
              dispatch(setAuthToken(token));
              console.log(data); // Handle the response from the server
              // form.reset(); // Reset the form after successful submission
            })
            .catch((error) => {
              console.error(error + "2"); // Handle any errors that occurred during the request
            });
        } catch (error) {
          console.log(error + "3");
        }
      };

      
  return (
    <div className='container flex justify-around mt-4 mb-8'>
        {/*Next Button*/}

        <button onClick={()=> handleClick()}
        className={`bg-white text-orange-500 shadow-xl
        uppercase py-2 px-4 rounded-xl font-semibol cursor-pointe
        hover:bg-orange-500 hover:text-white transistion duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed":""}`} >BACK</button>

        {/*Previous Button */}
        <button onClick={(e) => {
          if (currentStep === iconsArray.length) {
            handleSubmit(e);
          } else {
            handleClick("next");
          }
        }}
         className='bg-white text-orange-500 shadow-xl 
        uppercase py-2 px-8 rounded-xl font-semibol cursor-pointer 
        hover:bg-orange-500 hover:text-white transistion duration-200 ease-in-out'>{currentStep === iconsArray .length ? "Request": "Next"}</button>
    </div>

  )
}


  
  export default StepperControl;