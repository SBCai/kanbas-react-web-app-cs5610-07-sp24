import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentsReducer from "../Courses/Assignments/assignmentsReducer";

export type moduleType = {
                           "_id": string,
                           "name": string,
                           "description": string,
                           "course": string,
                           "lessons": [
                             {
                               "_id": string,
                               "name": string,
                               "description": string,
                               "module": string
                             },
                           ]
                         }

export type assignmentType = {
                              "_id": string,
                              "title": string,
                              "course": string,
                              "due": string,
                              "point": number,
                            }

export interface KanbasState {
  modulesReducer: {
    module: moduleType;
    modules: [moduleType];
  };
  assignmentsReducer: {
    assignment: assignmentType;
    assignments: [assignmentType];
  };
}
const store = configureStore({
  reducer: {
    modulesReducer,
    assignmentsReducer,
  }
});


export default store;