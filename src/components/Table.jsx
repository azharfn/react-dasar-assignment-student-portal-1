import React from "react";
const Table = (props) => {
    
    const { students } = props;
    // if (!students) {
    //     return <table id="table-student">

    //     </table>
            
    // }
    
    const handleDelete = (id) => {
        console.log("Delete Student id", id)
    }
    //ternary logic = condition ? expression1 : expression2
    /*NOTE!!: ditable harus pake kondisi pengecekan sebelum data student masuk ke map menggunakan ternary lebih simple;
    jadi kalau students tidak ada, tetap menampilkan Table dan headernya th tapi tablenya kosong gitu*/
    return (
            <div className="grid-item">
                <table id="table-student">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Full Name</th>
                        <th>Birth Date</th>
                        <th>Gender</th>
                        <th>Faculty</th>
                        <th>Program Study</th>
                        <th>Option</th>
                    </tr>
                </thead>
                    <tbody>
                    {students ? (
                    students.map((student, index) => (
                        <tr key={student.id}>
                            <td>{index + 1}</td>
                            <td>{student.fullname}</td>
                            <td>{student.birthDate}</td>
                            <td>{student.gender}</td>
                            <td>{student.faculty}</td>
                            <td>{student.programStudy}</td>
                            <td>
                                <button
                                    type="button"
                                    className="delete-btn"
                                    onClick={() => handleDelete(student.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Cek No Student</td> 
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
    );
};

export default Table;
