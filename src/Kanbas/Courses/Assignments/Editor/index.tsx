import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "./index.css";
import "../../../styles.css";
import {addAssignment, removeAssignment, updateAssignment, setAssignment} from ".././assignmentsReducer";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState, assignmentType } from "../../../store";

function AssignmentEditor() {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const {assignmentId } = useParams();
  const assignmentList = useSelector((state: KanbasState) => state.assignmentsReducer.assignments).filter((a: assignmentType) => a.course === courseId);
  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
  const navigate = useNavigate();
  const handleSave = () => {
    if (assignmentList.find((a: assignmentType) => a._id === assignment._id)) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <>
    <div className= "wd-assignment-edit">
      <div className="float-end">
        <button className="btn text-success"><i className="fa fa-check-circle text-success pe-1"></i>Published</button>
        <button className="btn wd-btn"><i className="fa fa-ellipsis-v"></i></button>
      </div>

      <div className="wd-horizontal-line mt-5"></div>

      <div>
        <h5>Assignment Name</h5>
        <input value={assignment.title}
               className="form-control mb-2"
               onChange={(e) => dispatch(setAssignment({ ...assignment, title: e.target.value }))}
               />

      <div className="mb-3">
        <label htmlFor="textarea1" className="form-label"></label>
        <textarea className="form-control" id="textarea1"></textarea>
      </div>

        <div className="row d-flex align-items-center justify-content-center mb-3">
          <div className="col-2">
            <label htmlFor="points" className="form-label">Points</label>
          </div>
          <div className="col-8">
            <input type="text" className="form-control" id="points" value={assignment.point}
             onChange={(e) => dispatch(setAssignment({ ...assignment, point: e.target.value }))}/>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center mb-3">
          <div className="col-2">
            <label htmlFor="group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-8">
            <select className="form-select" id="group">
              <option selected>ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center mb-3">
          <div className="col-2">
            <label htmlFor="display_grade" className="form-label">Display Grade as</label>
          </div>
          <div className="col-8">
            <select className="form-select" id="display_grade">
              <option selected>Percentage</option>
            </select>
          </div>
        </div>

        <div className="row d-flex align-items-center justify-content-center mb-3">
          <div className="col-6">
            <input className="form-check-input"
                   type="checkbox" id="r6"/>
            <label className="form-check-label ms-1" htmlFor="r6">
              Do not count this assignment toward final grade</label>
          </div>
        </div>

        <div className="row d-flex justify-content-center mb-3">
          <div className="col-2">
            <label className="form-label">Assign</label>
          </div>
          <div className="col-8">
            <div className="container wd-rounded-corners-top">
              <div className="mb-2 mt-3">
                <label htmlFor="assign-to" className="form-label">Assign to</label>
                <input type="text" className="form-control" id="assign-to" placeholder="100"/>
              </div>
              <div className="mb-2 mt-3">
                <label htmlFor="due" className="form-label">Due</label>
                <input type="datetime-local" className="form-control" id="due" value={assignment.due}
                 onChange={(e) => dispatch(setAssignment({ ...assignment, due: e.target.value }))}/>
              </div>
              <div className="mb-2 mt-3">
                <div className="row">
                  <div className="col">
                    <label htmlFor="avaliable-from" className="form-label">Avaliable from</label>
                    <input type="datetime-local" className="form-control" id="avaliable-from" value="2023-09-06T12:00"/>
                  </div>
                  <div className="col">
                    <label htmlFor="until" className="form-label">Until</label>
                    <input type="datetime-local" className="form-control" id="until"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wd-horizontal-line"></div>

        <button onClick={handleSave} className="btn btn-success ms-2 float-end">
          Save
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
              className="btn btn-danger float-end">
          Cancel
        </Link>

        <div className="mt-4 pt-4">
          <div className="wd-horizontal-line"></div>
        </div>

      </div>
    </div>
    </>
  );
}
export default AssignmentEditor;

