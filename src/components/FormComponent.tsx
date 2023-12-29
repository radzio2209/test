import React, { useState } from 'react';

const SampleForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    // logika przetwarzania danych w formularzu
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Imię:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="age">Wiek:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Wyślij</button>
    </form>
  );
};

export default SampleForm;
