import { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todayDate = new Date();
    const inputDate = new Date(selectedDate);

    // Email validation (simple regex pattern)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Invalid email. Please check your email address.');
      return;
    }

    // Phone number validation (must be 10 digits)
    if (phoneNumber.length !== 10) {
      alert('Invalid phone number. Please enter a 10-digit phone number.');
      return;
    }

    // Date validation (DOB should not be in the future)
    if (inputDate > todayDate) {
      alert('Invalid date of birth. Date of birth cannot be in the future.');
      return;
    }

    // If all validations pass, log success and clear form fields
    setPhoneNumber('');
    setSelectedDate('');
    setUsername('');
    setEmail('');
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handlePhoneValidation = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="container">
      <h1>User Details Modal</h1>
      <button className="btn" onClick={handleOpenModal}>
        Open Form
      </button>
      <Modal show={showModal} onClose={handleCloseModal}>
        <form onSubmit={handleSubmit}>
          <h1>Fill Details</h1>
          <h3>Username:</h3>
          <input
            type="text"
            className="input-box"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <h3>Email Address:</h3>
          <input
            type="email"
            className="input-box"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <h3>Phone Number:</h3>
          <input
            type="number"
            className="input-box"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneValidation}
            required
          />
          <h3>Date of Birth:</h3>
          <input
            type="date"
            className="input-box"
            id="dob"
            value={selectedDate}
            onChange={handleDateChange}
            required
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default App;
