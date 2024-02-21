
import { useDispatch } from 'react-redux';
import { Student } from '../../types/Student'
import s from "./style.module.css";
import { addMark } from '../../store/slices/studentsSlice';

export default function StudentItem({id, firstName, lastName, marks}: Student) {

  const dispatch = useDispatch();
  const avgMark:number = (marks.reduce((acc, item) => acc + item, 0) / marks.length) || 0;
  return (
    <div className={s.student}>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{avgMark.toFixed(2)} ({marks.length})</p>

        <button onClick={() => dispatch(addMark({id, mark: 5}))}>5</button>
    </div>
  )
}