import React from "react";

const students = [
    {
        id: 1,
        name: "PoBiRi",
    },
    {
        id: 2,
        name: "Jundang",
    },
    {
        id: 3,
        name: "Asom",
    },
    {
        id: 4,
        name: "JunPo",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;