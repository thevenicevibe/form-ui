import React,{useContext, useState} from 'react'
import { StepperContext } from '../contexts/stepperContext';

const Account = () => {
 
  const { userData, setUserData  } = useContext(StepperContext);
  // const [formData, setFormData] = useState({
  //   firstName: '',
  //   telePhone: '',
  //   state: '',
  //   city: '',
  //   hotel: '',
  //   socialSecurity: '',
  //   date: '',
  //   employeeAddress: '',
  //   gender: '',
  //   postalCode: '',
  //   civilStatus: '',
  //   degree: '',
  //   dateOfhire: '',
  //   salary: '',
  //   averageHrs: '',
    
  // });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value } = e.target;
    // setFormData({ ...formData, [name]: value });
    setUserData({...userData,[name]:value});
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    const errors = {};
    if (!userData["firstName"].trim()) {
      errors.firstName = 'Full name is required';
    }
    if (!userData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
    if (!userData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!userData.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(userData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }
    if (!userData.age.trim()) {
      errors.age = 'Age is required';
    } else if (isNaN(userData.age) || parseInt(userData.age) <= 0) {
      errors.age = 'Invalid age';
    }
    setErrors(errors);

    // If there are no errors, submit the form
    if (Object.keys(errors).length === 0) {
      // Here you can submit the form data to your backend or perform other actions
      console.log('Form submitted:', userData);
    }
  };
  return (
    <div>
    <div className='text-orange-500 text-xl'>Employee Data</div>

      <div>
      <form onSubmit={handleSubmit}>
    <div className='grid grid-cols-3 gap-4  mt-6'>
    <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">Full Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder='Full Name'
            value={userData["firstName"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="telephone" className="block font-medium text-gray=700">Telephone Contact:</label>
          <input
           type='number'
            id="telephone"
            name="telephone"
            value={userData["telephone"] || ""}
            onChange={handleChange}
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.telePhone && <p className="text-red-500">{errors.telePhone}</p>}
        </div>
        <div>
          <label htmlFor="state" className="block font-medium text-gray-700">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={userData["state"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
            />
          {errors.state && <p className="text-red-500">{errors.state}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block font-medium text-gray-700">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={userData["city"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.city && <p className="text-red-500">{errors.city}</p>}
        </div>

        <div>
          <label htmlFor="hotel" className="block font-medium text-gray-700">Hotel:</label>
          <input
            type="text"
            id="hotel"
            name="hotel"
            value={userData["hotel"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.hotel && <p className="text-red-500">{errors.hotel}</p>}
        </div>

        <div>
          <label htmlFor="socialSecurity" className="block font-medium text-gray-700">Social Security:</label>
          <input
            type="text"
            id="socialSecurity"
            name="socialSecurity"
            value={userData["socialSecurity"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.socialSecurity && <p className="text-red-500">{errors.socialSecurity}</p>}
        </div> 

        <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">Date:</label>
          <input
            type="text"
            id="date"
            name="date"
            value={userData["date"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.date && <p className="text-red-500">{errors.date}</p>}
        </div>

        <div>
          <label htmlFor="employeeAddress" className="block font-medium text-gray-700">
            Employee Address:</label>
          <input
            type="text"
            id="employeeAddress"
            name="employeeAddress"
            value={userData["employeeAddress"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.employeeAddress && <p className="text-red-500">{errors.employeeAddress}</p>}
        </div>

        <div>
          <label htmlFor="gender" className="block font-medium text-gray-700">Gender:</label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={userData["gender"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
            />
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>

        <div>
          <label htmlFor="postalCode" className="block font-medium text-gray-700">Postal Code:</label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={userData["postalCode"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.postalCode && <p className="text-red-500">{errors.postalCode}</p>}
        </div>

        <div>
          <label htmlFor="civilStatus" className="block font-medium text-gray-700">Civil Status:</label>
          <input
            type="text"
            id="civilStatus"
            name="civilStatus"
            value={userData["civilStatus"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.civilStatus && <p className="text-red-500">{errors.civilStatus}</p>}
        </div>

        <div>
          <label htmlFor="degree" className="block font-medium text-gray-700">Degree:</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={userData["degree"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.degree && <p className="text-red-500">{errors.degree}</p>}
        </div>

        <div>
          <label htmlFor="dateOfhire" className="block font-medium text-gray-700">Date of Hire:</label>
          <input
            type="text"
            id="dateOfhire"
            name="dateOfhire"
            value={userData["dateOfhire"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.dateOfhire && <p className="text-red-500">{errors.dateOfhire}</p>}
        </div>

        <div>
          <label htmlFor="salary" className="block font-medium text-gray-700">Salary:</label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={userData["salary"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.salary && <p className="text-red-500">{errors.salary}</p>}
        </div>

        <div>
          <label htmlFor="averageHrs" className="block font-medium text-gray-700">Average Hours Per Week:</label>
          <input
            type="text"
            id="averageHrs"
            name="averageHrs"
            value={userData["averageHrs"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
            />
          {errors.averageHrs && <p className="text-red-500">{errors.averageHrs}</p>}
        </div>

        <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData["socialSecurity"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData["firstName"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData["firstName"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-2 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
        
    </div>
    <div className='flex flex-col mt-3'>
    <div>
          <label htmlFor="firstName" className="block font-medium text-gray-700">Incident Details:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData["firstName"] || ""}
            onChange={handleChange}
            required
            className="mt-1 p-6 border-2 border-orange-500 rounded-md w-full focus:outline-none focus:border-orange-500 form-textarea"
            />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>
    </div>
           </form>
          </div>
    </div>
  )
}

export default Account;