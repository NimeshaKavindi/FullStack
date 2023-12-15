import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/student.css'; // Import a CSS file for custom styles

const Student = () => {

    const [name, setName] = useState();
    const [address, setAddress] =useState();
    const [students, setStudents] =useState([]);
    
    const handleClick =(e) =>{
        e.preventDefault()
        const student = {name, address};
        console.log(student);
        fetch ("http://localhost:8080/student/add",{ 
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify(student)
    }).then(() =>{
        console.log("New student added")
    })
    }

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
      },[])

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
          <button type="submit" className="btn btn-primary" onClick={handleClick}>SUBMIT</button>
        </form>
        

      </div>
      <br/><br/>
      <div className="container mt-4">
                    <h2>Students List</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.address}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
    </div>
     
    </div>
    
  );
};

export default Student;
