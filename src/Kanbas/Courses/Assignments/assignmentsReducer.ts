import {createSlice} from "@reduxjs/toolkit";
import db from "../../Database";

const initialState = {
    assignments: db.assignments,
    assignment: {title: "new assignment", point: 100, course: ""}
}

const assignmentSlice = createSlice({
    name: "assignment",
    initialState,
    reducers: {
        addAssignment: (state, action) => {
            state.assignments = [
              { ...action.payload, _id: new Date().getTime().toString() },
                ...state.assignments,
            ];
        },
        removeAssignment: (state, action) => {
            state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map(assignment => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                }
                return assignment;
            });
        },
        setAssignment: (state, action) => {
            state.assignment = action.payload;
        }
    }
});

export const {addAssignment, removeAssignment, updateAssignment, setAssignment} = assignmentSlice.actions;
export default assignmentSlice.reducer;