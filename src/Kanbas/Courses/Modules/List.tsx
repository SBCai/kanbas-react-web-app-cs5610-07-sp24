import React, { useState } from "react";
import "../../../libs/bootstrap/bootstrap.min.css"
import "../../styles.css";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
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