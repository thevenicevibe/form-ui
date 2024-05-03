import './App.css';
import  React, { useState } from 'react'
import Stepper from "./components/stepper";
import StepperControl from './components/stepperControl';
import PersonAddIcon from '@mui/icons-material/PersonAddAlt';
import PeopleIcon from '@mui/icons-material/People';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import Account from './components/steps/account';
import Details from './components/steps/details';
import Final from './components/steps/final';
import { StepperContext } from './components/contexts/stepperContext';
import { submitForm } from './actions/action';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([])
  const icons = {
    1: <PersonAddIcon />,
    2: <PeopleIcon />,
    3: <MedicalInformationIcon />,
  };

  const displaySteps = (icons) =>{
    switch(icons){
      case 1: 
        return <Account />
      case 2: 
        return <Details />
      case 3: 
        return <Final />
      default:
    }
  }
  

  
  const handleClick = (direction) =>{
    const iconsArray = Object.entries(icons)
    let newStep = currentStep;
    direction === "next"  ? newStep++ : newStep-- ;
    newStep > 0  && newStep <= iconsArray.length && setCurrentStep(newStep )
  }


  return (
    <div>
      <div className='h-16 w-full bg-orange-500'></div>
      <div className='flex justify-items-center md:w-80 m-auto'>
      <div className='container hrizontal mt-5'>
      <Stepper icons={icons} currentStep = {currentStep}/>
     </div>

      </div>
    
    <div className="md:w-2/3 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
      <div className='my-10 p-10'>
      <StepperContext.Provider value={{
        userData,
        setUserData,
        finalData,
        setFinalData
      }}>
        {displaySteps(currentStep)}
        
      </StepperContext.Provider>
      </div>
      <StepperControl 
        handleClick={handleClick}
        currentStep={currentStep}
        icons ={icons}
        submitForm={submitForm}
      />
        
    </div>
    </div>
  );
}

export default App;
