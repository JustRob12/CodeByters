import React, { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    schoolId: '',
    yearLevel: '',
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="middleName">Middle Name (optional)</label>
          <input 
            type="text" 
            id="middleName" 
            name="middleName" 
            value={formData.middleName} 
            onChange={handleChange} 
          />
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="schoolId">School ID (9 characters)</label>
          <input 
            type="text" 
            id="schoolId" 
            name="schoolId" 
            value={formData.schoolId} 
            onChange={handleChange} 
            maxLength="9"
            required 
            pattern="\d{9}" 
            title="School ID must be exactly 9 digits" 
          />
        </div>

        <div>
          <label htmlFor="yearLevel">School Year Level</label>
          <input 
            type="text" 
            id="yearLevel" 
            name="yearLevel" 
            value={formData.yearLevel} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
