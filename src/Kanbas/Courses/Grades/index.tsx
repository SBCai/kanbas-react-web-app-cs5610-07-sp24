import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport } from "react-icons/fa";
import "./index.css";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="wd-grade">
        <div className="row">
          <div className="col">
            <div className="float-end">
              <button className="btn wd-btn me-2"><FaFileImport className="me-1"/>Import</button>
              <button className="btn wd-btn me-2"><FaFileExport className="me-1"/>Export<i className="fa fa-caret-down ps-2"></i></button>
              <button className="btn wd-btn me-2"><i className="fa fa-gear"></i></button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label className="form-label" htmlFor="student-name">Student Names</label>
            <select className="form-select" id="student-name">
              <option selected>Search Students</option>
              {es.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                return (<option value={user?._id}>{user?.firstName} {user?.lastName}</option>);
              })}
            </select>
          </div>
          <div className="col">
            <label className="form-label" htmlFor="assignment-name">Student Names</label>
            <select className="form-select" id="assignment-name">
              <option selected>Search Assignments</option>
              {as.map((assignment) => (<option> {assignment.title}</option>))}
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="btn wd-btn rounded"><i className="fa fa-filter"></i>Apply Filters</button>
          </div>
        </div>

      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th rowSpan={2} style={{verticalAlign: "middle"}}>Student Name</th>
            {as.map((assignment) => (<th>{assignment.title}</th>))}
          </tr>
          <tr>
            {as.map((assignment) => (<th>Out of 100</th>))}
          </tr>
          </thead>


          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td style={{color: "red", textAlign: "left"}}>{user?.firstName} {user?.lastName}</td>
                   {as.map((assignment) => {
                     const grade = grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div></div>);
}
export default Grades;

