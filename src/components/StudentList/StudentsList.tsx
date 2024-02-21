import { Student } from '../../types/Student'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import StudentItem from '../StudentItem/StudentItem';

export default function StudentsList() {
  const students:Student[] = useSelector((store: RootState) => store.students);
  
  return (
    <div>
        {
            students.map(student => <StudentItem 
                key={student.id} 
                {...student} 
            />)
        }
    </div>
  )
}