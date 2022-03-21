import { useState } from "react";

const Form = (props) => {
    const [student, setStudent] = useState({
        id: "",
        firstName: "",
        lastName: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const firstName = event.target.value;
        setStudent((student) => ({ ...student, firstName }));

    }

    const handleLastNameChange = (event) => {
        const lastName = event.target.value;
        setStudent((student) => ({ ...student, lastName }));

    }

    const handleIdChange = (event) => {
        const id = event.target.value;
        setStudent((student) => ({ ...student, id }));
    }

    //A function to handle the post request
    const postStudent = (newStudent) => {
        fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(newStudent)
      }).then((response) => {
          response.json()
      }).then((data) => 
      console.log("From the post ", data)
      )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postStudent(student);
        props.addStudent(student);

    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>First Name</label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="First Name"
                    required
                    value={student.name}
                    onChange={handleNameChange}

                />
                <label>Last Name</label>
                <input
                    type="text"
                    id="add-user-lastName"
                    placeholder="LastName"
                    required
                    value={student.lastName}
                    onChange={handleLastNameChange}
                />

                <label>ID</label>
                <input
                    type="number"
                    id="add-user-id"
                    placeholder="Id"
                    required
                    value={student.id}
                    onChange={handleIdChange}
                />
            </fieldset>
            <button type="submit">Add</button>
        </form>
    );
};

export default Form;