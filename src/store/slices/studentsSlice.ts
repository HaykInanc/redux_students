import { createSlice } from "@reduxjs/toolkit";
import { Student } from "../../types/Student";


const initialState:Student[] = [
    {id: 1, firstName: "Анатолий", lastName: "Ушанов", isActive: true, marks: [3, 4, 5, 3, 4, 3]},
    {id: 2, firstName: "Максим", lastName: "Грибов", isActive: false, marks: [5, 4, 5, 5, 4]},
    {id: 3, firstName: "Антон", lastName: "Куликов", isActive: true, marks: []},
    {id: 4, firstName: "Роман", lastName: "Иванв", isActive: true, marks: [4, 5, 3, 4, 3, 3, 4]}
];

// action
// {type: "students/addMark", payload: {id, mark}}


const studentsSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addMark: (state, {payload}) => {
            const {id, mark} = payload;
            const target:Student | undefined = state.find((student) => student.id === id);
            target && target.marks.push(mark);
        }
    }
})

export const { addMark } = studentsSlice.actions;

export default studentsSlice.reducer;
