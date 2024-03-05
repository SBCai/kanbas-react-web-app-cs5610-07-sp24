import courses from "./courses.json";
import modules from "./modules.json";
import sidebar from "./sidebar.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";
import grades from "./grades.json";

const db = {
  courses,
  modules,
  sidebar,
  assignments,
  users,
  enrollments,
  grades
};

export type CoursesType = typeof courses;
export type CourseType = typeof courses[0];

export default db;

export {  courses, modules, sidebar, assignments, users, enrollments, grades};