

function StudentsList() {
     let students = ['Ravi','Manu','Raju']
  return (
    <div>
        <ul>
     {
        students.map((student,index)=>(
            <li key={index}>{student}</li>
        ))
     }
        </ul>
    </div>
  )
}

export default StudentsList

//    <ul>
//             <li>Ravi</li>
//             <li>Manu</li>
//             <li>Raju</li>
//         </ul>