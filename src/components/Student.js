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
            />
          </div>
          <div className="mb-3">
            
            <input
              type="text"
              className="form-control"
              id="studentAddress"
              placeholder="Enter student address"
            />
          </div>
        </form>
      </div>
    </div>
    </div>
    
  );
};

export default Student;
