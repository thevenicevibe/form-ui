import React,{useContext, useState} from 'react'
import { StepperContext } from '../contexts/stepperContext';

const Details = () => {
    const { userData, setUserData  } = useContext(StepperContext);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value } = e.target;
        // setFormData({ ...formData, [name]: value });
        setUserData({...userData,[name]:value});
      }
  return (
    <div>
        <div className='text-orange-500 text-xl'>Supervisor Data</div>
        <div className='grid grid-cols-2 gap-4  mt-6'>
        <div>
          <label htmlFor="state" className="block font-medium text-gray-700">State:</label>
          <input
            type="text"
            placeholder='State'
            id="state"
            name="state"
            value={userData["state"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.state && <p className="text-red-500">{errors.state}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block font-medium text-gray-700">City:</label>
          <input
            type="text"
            placeholder='City'
            id="city"
            name="city"
            value={userData["city"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="postalCode" className="block font-medium text-gray-700">Postal Code:</label>
          <input
            type="text"
            placeholder='Postal Code'
            id="postalCode"
            name="postalCode"
            value={userData["postalCode"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
        </div>

        <div>
          <label htmlFor="medicalCenter" className="block font-medium text-gray-700">Medical Center Name:</label>
          <input
            type="text"
            placeholder='Medical Center Name'
            id="medicalCenter"
            name="medicalCenter"
            value={userData["medicalCenter"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.medicalCenter && <p className="text-red-500">{errors.medicalCenter}</p>}
        </div>
        </div>
        <div className='flex flex-col my-4'>
        <div>
          <label htmlFor="medicalCenter" className="block font-medium text-gray-700">Medical Center Name:</label>
          <input
            type="text"
            placeholder='Medical Center Name'
            id="medicalCenter"
            name="medicalCenter"
            value={userData["medicalCenter"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.medicalCenter && <p className="text-red-500">{errors.medicalCenter}</p>}
        </div>
        <div>
          <label htmlFor="medicalCenter" className="block font-medium text-gray-700 mt-3">Medical Center Name:</label>
          <input
            type="text"
            placeholder='Medical Center Name'
            id="medicalCenter"
            name="medicalCenter"
            value={userData["medicalCenter"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.medicalCenter && <p className="text-red-500">{errors.medicalCenter}</p>}
        </div>
        
        </div>
    </div>
    
  )
}

export default Details;