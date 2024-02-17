import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import "./index.css";
import "../../../styles.css";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
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
        <input value={assignment?.title}
               className="form-control mb-2" />



      <div className="mb-3">
        <label htmlFor="textarea1" className="form-label"></label>
        <textarea className="form-control" id="textarea1"></textarea>
      </div>

        <div className="row d-flex align-items-center justify-content-center mb-3">
          <div className="col-2">
            <label htmlFor="points" className="form-label">Points</label>
          </div>
          <div className="col-8">
            <input type="text" className="form-control" id="points" placeholder="100"/>
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
                <input type="datetime-local" className="form-control" id="due" value="2023-09-18T11:59"/>
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
            <div className="mb-2">
              <button className="btn-secondary w-100 border-0"><i className="fa fa-plus pe-2"></i>Add</button>
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

