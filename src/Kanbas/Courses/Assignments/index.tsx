import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "../../../libs/bootstrap/bootstrap.min.css"
import "../../styles.css";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <>

      <div className="d-flex justify-content-between">
        <div className="w-25">
          <label htmlFor="search">
            <input type="text"
                   className="form-control"
                   id="search"
                   placeholder="Search for Assignment"/></label>
        </div>
        <div className="float-end pe-2">
          <button className="btn wd-btn ms-1">+ Group</button>
          <button className="btn btn-danger ms-1">+ Assignment</button>
          <button className="btn wd-btn ms-1"><i className="fa fa-ellipsis-v"></i></button>
        </div>
      </div>

      <div className="wd-horizontal-line"></div>

      <ul className="list-group wd-assignments">
        <li className="list-group-item">
          <div className="wd-title">
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              <label><input type="text" className="form-control wd-input" value="40% of total"/></label>
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group wd-homework">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <div className="row d-flex align-items-center">
                  <div className="col-1">
                    <FaEllipsisV className="me-2" />
                    <FaBook className="ms-2" style={{color: "green"}}/>
                  </div>
                  <div className="col-10">
                    <Link style={{color: "black", fontSize: "1.2rem"}}
                       to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                    <br/>
                    <label><span><label style={{color: "red"}}> Multiple Modules </label></span> | Due {assignment.due} | {assignment.point}</label>
                  </div>
                  <div className="col-1">
                    <span className="float-end">
                      <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
                  </div>
                </div>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;