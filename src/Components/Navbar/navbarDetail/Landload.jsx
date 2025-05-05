import React, { useState } from 'react';

export default function LandlordForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', mobile: '', city: '', state: '',
    landlordType: '', address: '', landCity: '', superArea: '', frontage: '', carpetArea: '', catchment: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submit', formData);
    // Add submission logic
  };

  // Inline style objects
  const container = { fontFamily: 'Arial, sans-serif',  padding: '20px' };
  const title = { textAlign: 'center', fontSize: '4rem', margin: '10px 0 20px',color:"#49aa98" };
  const sectionTitle = { fontSize: '1.25rem', margin: '20px 0 10px' ,color:"#49aa98"};
  const grid2 = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px' };
  const field = { marginBottom: '10px' };
  const label = { display: 'block', marginBottom: '4px' };
  const input = { width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' };
  const textarea = { ...input, height: '80px', resize: 'vertical' };
  const select = { ...input, appearance: 'none' };
  const button = { background: '#337a64', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1rem', marginTop: '20px' };

  return (
    <div style={container}>
      <p style={{ textAlign: 'center', background: '#000', color: '#fff', padding: '8px' }}>
        Be cautious while dealing with anyone claiming to offer Lenskart franchisee and to verify details click here.
      </p>
      <h1 style={title}>Landlords</h1>
      <div style={{marginLeft:"100px"}}>

      <p >Do you have a property in a main market in your city which you would like to rent? We are here for you.
         Lenskart has a network of 700+ stores across the country. As part of our expansion plan, we constantly require main market properties that meet our specifications.</p>
      <p>
        <a href="#" style={{ color: '#337a64', textDecoration: 'none' }}>Click here</a> to checkout out the list of cities and markets where we are actively looking for a store.
      </p>
      <p>We request you to fill the form below and we will contact you shortly.</p>
      </div>
      <hr />

      <form onSubmit={handleSubmit} style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Personal Details */}
        <div style={sectionTitle}>PERSONAL DETAILS</div>
        <div style={grid2}>
          <div>
            <div style={field}>
              <label style={label}>First Name*:</label>
              <input name="firstName" value={formData.firstName} onChange={handleChange} style={input} placeholder="Enter your First Name" />
            </div>
            <div style={field}>
              <label style={label}>Last Name*:</label>
              <input name="lastName" value={formData.lastName} onChange={handleChange} style={input} placeholder="Enter your Last Name" />
            </div>
            <div style={field}>
              <label style={label}>Email Id*:</label>
              <input name="email" type="email" value={formData.email} onChange={handleChange} style={input} placeholder="Enter your Email Id" />
            </div>
          </div>
          <div>
            <div style={field}>
              <label style={label}>Mobile No.*:</label>
              <input name="mobile" value={formData.mobile} onChange={handleChange} style={input} placeholder="Enter your Mobile No." />
            </div>
            <div style={field}>
              <label style={label}>City*:</label>
              <input name="city" value={formData.city} onChange={handleChange} style={input} placeholder="Enter your city" />
            </div>
            <div style={field}>
              <label style={label}>State*:</label>
              <select name="state" value={formData.state} onChange={handleChange} style={select}>
                <option value="">Select State</option>
                <option>State 1</option>
                <option>State 2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Land Details */}
        <div style={sectionTitle}>LAND DETAILS</div>
        <div style={grid2}>
          <div>
            <div style={field}>
              <label style={label}>Landlord Type*:</label>
              <select name="landlordType" value={formData.landlordType} onChange={handleChange} style={select}>
                <option value="">Select Landlord Type</option>
                <option>Individual</option>
                <option>Company</option>
              </select>
            </div>
            <div style={field}>
              <label style={label}>Property Address*:</label>
              <textarea name="address" value={formData.address} onChange={handleChange} style={textarea} placeholder="Layout Address" />
            </div>
            <div style={field}>
              <label style={label}>City*:</label>
              <input name="landCity" value={formData.landCity} onChange={handleChange} style={input} placeholder="Location" />
            </div>
            <div style={field}>
              <label style={label}>Super Area*:</label>
              <input name="superArea" value={formData.superArea} onChange={handleChange} style={input} placeholder="In Sq.ft" />
            </div>
          </div>
          <div>
            <div style={field}>
              <label style={label}>Frontage*:</label>
              <input name="frontage" value={formData.frontage} onChange={handleChange} style={input} placeholder="Frontage in Sq.ft" />
            </div>
            <div style={field}>
              <label style={label}>Carpet Area*:</label>
              <input name="carpetArea" value={formData.carpetArea} onChange={handleChange} style={input} placeholder="Size in Sq.ft" />
            </div>
            <div style={field}>
              <label style={label}>Catchment:</label>
              <select name="catchment" value={formData.catchment} onChange={handleChange} style={select}>
                <option value="">Select Catchment</option>
                <option>Neighborhood Market</option>
                <option>High Street</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button type="submit" style={button}>SUBMIT</button>
        </div>
      </form>
    </div>
  );
}
