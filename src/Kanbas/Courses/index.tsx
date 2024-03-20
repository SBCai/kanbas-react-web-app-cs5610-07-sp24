import { Link, useLocation } from "react-router-dom";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "../styles.css";
import "./index.css";
import {CoursesType} from "../Database";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();

  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const { pathname } = useLocation();
  const currentPath = pathname.split('/').pop()?.replace("%20", ' ')
  return (
    <div className="row">
      <div className="d-none d-md-block pt-3">
        <div className="row align-items-center pb-2">
          <div className="col d-flex">
            <button className="btn"><i className="fa fa-bars fa-lg pe-2" style={{color: "red"}}></i></button>
            <nav className="pt-3" aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <label style={{color: "red"}}>{course?.name}</label>
                </li>
                <li className="breadcrumb-item active" aria-current="page">{currentPath}</li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row wd-horizontal-line ms-2"></div>
        <div className="row ms-2"><label style={{fontSize: "10px", color: "gray"}}>2024.10.1 Fall 2023 semest...</label></div>
      </div>


      <div className="d-block d-md-none" style={{padding: "10px"}}>
        <div className="row wd-header align-items-center">
          <div className="col-4">
            <Link to="/Kanbas"><i className="fa fa-bars fa-lg" style={{color:"white"}}></i></Link>
          </div>
          <div className="col-6">
            <div className="row">
              <label style={{color:"white"}}>{course?.name}</label>
            </div>
            <div className="row">
              <label style={{color:"white"}}>{currentPath}</label>
            </div>
          </div>
          <div className="col d-flex flex-row-reverse">
            <span><i className="fa fa-eye fa-lg" style={{color:"white"}}></i>
              <Link to="/Kanbas"><i className="fa fa-chevron-down" style={{color:"white"}}></i></Link>
            </span>
          </div>
        </div>
      </div>


      <div className="d-none d-md-block wd-col-10">
        <CourseNavigation/>
      </div>

       <div className="wd-col-90">
        <div className="wd-overflow-y-scroll">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
            <Route path="Grades" element={<Grades/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
