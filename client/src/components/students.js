import { useState, useEffect } from "react";
import Form from "./form";

function Students() {

    const [students, setStudents] = useState([]);

    const loadStudents = () => {
        fetch("http://localhost:5000/api/students")
            .then((response) => response.json())
            .then(students => {
                setStudents(students);
            })
    }

    useEffect(() => {
        loadStudents();
    }, []);

    const onDelete = (student) => {
        return fetch(`http://localhost:5000/api/students/${student.id}`, {
            method: "DELETE"
        }).then((response) =>{
            //console.log(response);
            if(response.ok){
                loadStudents();
            }
        })
    }



    const addStudent = (newStudent) => {
        //console.log(newStudent);
        //postStudent(newStudent);
        setStudents((students) => [...students, newStudent]);
    }


    return (
        <div className="students">
            <h2> List of Students </h2>
            <ul>
                {students.map(student =>
                    <li key={student.id}> {student.firstname} {student.lastname} <button type="button" onClick={() =>{onDelete(student)}}>X</button></li>)}
            </ul>
            <Form addStudent={addStudent} />
        </div>
    );
}

export default Students;