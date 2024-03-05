import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaBook } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../../../libs/bootstrap/bootstrap.min.css"
import "../../styles.css";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {setAssignment, removeAssignment} from "./assignmentsReducer";
import { KanbasState, assignmentType } from "../../store";

function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments).filter((assignment : assignmentType) => assignment.course === courseId);

 const handleDelete = (assignmentId: string) => {
   const toDelete = window.confirm("Are you sure you want to delete this assignment?");
   if (toDelete) {
     dispatch(removeAssignment(assignmentId));
   }
 };
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
          <Link style={{color: "black", fontSize: "1.2rem"}}
                to={`/Kanbas/Courses/${courseId}/Assignments/${new Date().getTime().toString()}`}>
            <button className="btn btn-danger ms-1" onClick={() => dispatch(setAssignment({ ...assignment, course: courseId }))}>+ Assignment</button>
          </Link>
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
            {assignmentList.map((asm : assignmentType) => (
              <li className="list-group-item">
                <div className="row d-flex align-items-center">
                  <div className="col-1">
                    <FaEllipsisV className="me-2" />
                    <FaBook className="ms-2" style={{color: "green"}}/>
                  </div>
                  <div className="col-9">
                    <Link style={{color: "black", fontSize: "1.2rem"}}
                       to={`/Kanbas/Courses/${courseId}/Assignments/${asm._id}`}>{asm.title}</Link>
                    <br/>
                    <label>
                      <>
                        <span style={{ color: "red" }}> Multiple Modules </span>
                        | Due {asm.due} | {asm.point}
                      </>
                    </label>
                  </div>
                  <div className="col-2">
                    <span className="float-end">
                      <Link to={`/Kanbas/Courses/${courseId}/Assignments/${asm._id}`}>
                        <button className="btn btn-danger me-1" onClick= {() => dispatch(setAssignment(asm))}>Edit</button>
                      </Link>
                      <button className="btn btn-danger me-1" onClick={() => handleDelete(asm._id)}>Delete</button>
                      <FaCheckCircle className="text-success me-1" />
                      <FaEllipsisV />
                    </span>
                  </div>
                </div>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;