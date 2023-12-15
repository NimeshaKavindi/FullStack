import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/student.css'; // Import a CSS file for custom styles

const Student = () => {

    const [name, setName] = useState();
    const [address, setAddress] =useState();

  
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
        <div className="container-box">
        <h1>Add Student</h1>
      <div className="container mt-4">
        <form>
          <div className="mb-3">
           
            <input
              type="text"
              className="form-control"
              id="studentName"
              placeholder="Enter student name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            
            <input
              type="text"
              className="form-control"
              id="studentAddress"
              placeholder="Enter student address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <br></br>
          <button type="submit" className="btn btn-primary" >SUBMIT</button>
        </form>

      </div>
    </div>
    </div>
    
  );
};

export default Student;
