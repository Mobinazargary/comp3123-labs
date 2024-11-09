import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address1: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    termsAccepted: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions before submitting.");
      return;
    }
    setSubmittedData(formData);
  };

  return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <h1>Data Entry Form</h1>

          <div className="form-row">
            <div className="form-group">
              <label>Email:</label>
              <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Address:</label>
              <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label className="optional-field">Address 2 (Optional):</label>
              <input
                  type="text"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City:</label>
              <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="form-group">
              <label>Province:</label>
              <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
              >
                <option value="">Choose...</option>
                <option value="Alberta">Alberta</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Manitoba">Manitoba</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="Ontario">Ontario</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Quebec">Quebec</option>
                <option value="Saskatchewan">Saskatchewan</option>
              </select>
            </div>
            <div className="form-group">
              <label>Postal Code:</label>
              <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  required
              />
            </div>
          </div>

          <div className="checkbox-container">
            <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
            />
            <label>Agree to Terms & Conditions?</label>
          </div>

          <button type="submit">Submit</button>
        </form>

        {submittedData && (
            <div className="submitted-data">
              <h2 className="text-center text-success">Submitted Information</h2>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p>
                <strong>Full Name:</strong> {submittedData.fullName}
              </p>
              <p>
                <strong>Address:</strong> {submittedData.address1}
              </p>
              <p>
                <strong>City:</strong> {submittedData.city}
              </p>
              <p>
                <strong>Province:</strong> {submittedData.province}
              </p>
              <p>
                <strong>Postal Code:</strong> {submittedData.postalCode}
              </p>
            </div>
        )}

      </div>
  );
}

export default App;
