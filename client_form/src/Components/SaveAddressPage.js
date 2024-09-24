import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SaveAddressPage() {
  const [formData, setFormData] = useState({
    name: '', mobile: '', street: '', city: '', state: '', postal_code: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/submit', formData);
      alert('Address Saved..');
    } catch (err) {
      console.error(err);
      alert('Another user with this Mobile Number already exists...!');
    }
  };

  const handleSearchClick = () => {
    navigate('/search'); 
  };

  return (
    <div>
      <h2>Address Book</h2>
      <form onSubmit={handleSubmit}>
        <h4>Enter your details to save your address</h4>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="mobile" placeholder="Mobile" onChange={handleChange} required />
        <input type="text" name="street" placeholder="Street" onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" onChange={handleChange} required />
        <input type="text" name="postal_code" placeholder="Postal Code" onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleSearchClick}>Search for User Address</button>
    </div>
  );
}

export default SaveAddressPage;
