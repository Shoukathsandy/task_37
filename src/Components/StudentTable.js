import React,{useContext} from 'react'
import { AssignMentorsContext } from '../Context/AssignMentors'

function StudentTable() {
     const [mentors,setMentors,students,setStudents] = useContext(AssignMentorsContext)
    return (
        <div>
            <h3 className="text-info">Students List</h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Batch</th>
                        <th scope="col">Mentor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       students.map(student => {
                           const stud_mentors = mentors.filter(mentor => mentor._id === student.mentor)
                           console.log(stud_mentors)
                           return (
                               <tr key={student._id}>
                                   <td>{student.name}</td>
                                   <td>{student.batch}</td>
                                   <td>{stud_mentors[0] ? stud_mentors[0].name : ''}</td>
                               </tr>
                           )
                       }) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default StudentTable;