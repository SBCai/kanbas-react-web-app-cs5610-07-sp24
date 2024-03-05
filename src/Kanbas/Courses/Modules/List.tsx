import React, { useState } from "react";
import "../../../libs/bootstrap/bootstrap.min.css"
import "../../styles.css";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
      state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
      state.modulesReducer.module);
    const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);

  return (
    <>

      <div className="d-flex flex-row-reverse wd-flex-gap">
        <div className="p2"><button type="submit" className="btn wd-btn"><FaEllipsisV/></button> </div>
        <div className="p2"><button type="submit" className="btn btn-danger">
          + Module </button></div>
        <div className="p2"> <label htmlFor="publish">
          <select className="btn wd-btn" id="publish">
            <option> Publish All </option>
          </select></label> </div>
        <div className="p2"><button type="submit" className="btn wd-btn">View Progress</button></div>
        <div className="p2"><button type="submit" className="btn wd-btn">Collapse All</button> </div>
      </div>
      <div className="wd-horizontal-line mt-3"></div>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <input className="form-control" value={module.name}
            onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))}
          />
          <textarea className="mt-1 form-control" value={module.description}
            onChange={(e) => dispatch(setModule({
              ...module, description: e.target.value }))}
          />
          <button className="mt-1 btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button>
          <button className="mt-1 ms-1 btn btn-success" onClick={() => dispatch(updateModule(module))}>
                  Update
          </button>

        </li>

        {moduleList.filter((module) => module.course === courseId)
          .map((module, index) => (
          <li key={index}
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <button className="ms-2 btn btn-danger"
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>

              <button className="ms-2 btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))}>
                Delete
              </button>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;