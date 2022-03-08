import { useState, useEffect } from "react";

function Students() {

    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/students")
        .then((response) => response.json())
        .then(students =>{
            //setStudents((students[3]));
            //console.log("Testing", typeof students);
            for (let index in students){
               if( index !== "3"){
                   setStudents(students);
               }
            };       
        })
        
    }, []);


    return (
      <div className="students">
        <h2> List of Students </h2>
        <ul>
            {students.map(student =>
                <li key={student.id}> {student.firstName} {student.lastName}</li>)}
        </ul>
      </div>
    );
  }
  
  export default Students;