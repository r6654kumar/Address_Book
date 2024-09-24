import { useState } from 'react';
import axios from 'axios';

function FindAddressPage() {
  const [mobile, setMobile] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/user/${mobile}`);
      setUserData(response.data);
    } catch (err) {
      console.error(err);
      alert('User not found');
    }
  };

  return (
    <div>
      <h2>Search User by Mobile Number</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {userData && (
        <div>
          <h3>User Information</h3>
          <p><strong>Name:</strong> {userData.name}</p>
          <h4>Addresses:</h4>
          <ul>
            {userData.addresses.map((address, index) => (
              <li key={index}>
                {address.street}, {address.city}, {address.state}, {address.postal_code},{address.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default FindAddressPage;
