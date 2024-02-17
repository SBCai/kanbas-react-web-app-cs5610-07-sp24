import "../../../../libs/bootstrap/bootstrap.min.css"
import "../../../styles.css";
import "./index.css";
import { useParams } from "react-router";
import React, { useState } from "react";
import { sidebar } from "../../../Database";

function Sidebar() {
    const { courseId } = useParams();
    const sidebarList = sidebar.filter((bar) => bar.course === courseId)[0];

    return (
      <div className="flex-grow-0 me-2 d-none d-xl-block">
        <div className="col wd-sidebar">
          <div className="row"><label>{sidebarList.title}</label></div>
          <div className="d-flex">
            <div className="col wd-btn-gray">
              <button className="btn"><span><i className="fa fa-ban fa-lg"></i></span>Unpublish</button>
            </div>
            <div className="col wd-btn-lightgreen">
              <button className="btn"><span><i className="fa fa-check-circle fa-lg"></i></span>Published</button>
            </div>
          </div>
          <br />
          {sidebarList.buttons?.map((button) => (
            <div className={`col wd-btn-gray mt-1`}>
              <button className="btn"><span><i className={`fa ${button.icon} fa-lg`}></i></span>{button.text}</button>
            </div>
          ))}
          <br />
          <div className="col wd-sidebar">
            <div className="row">
              <div className="col">
                <h6>To do</h6>
              </div>
            </div>
            <div className="wd-horizontal-line"></div>
            {sidebarList.todo?.map((toDo) => (
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-exclamation fa-lg" style={{ paddingRight: "10px" }}></i>
                </div>
                <div className="col-10">
                  <a href="/Kanbas/#/Kanbas">{toDo.text}</a>
                  <label>{toDo.label}</label>
                </div>
              </div>
            ))}
          </div>
          <br />
          <div className="col wd-sidebar">
            <div className="row">
              <div className="col">
                <h6>Coming Up</h6>
              </div>
              <div className="col">
                <span><i className="fa fa-calendar"></i><a href="/Kanbas/#/Kanbas"> View Calendar </a></span>
              </div>
            </div>
            <div className="wd-horizontal-line"></div>
            {sidebarList.comingUp?.map((comingUp) => (
              <div className="row">
                <div className="col-1">
                  <i className="fa fa-calendar" style={{ paddingRight: "10px" }}></i>
                </div>
                <div className="col-7">
                  <a href="/Kanbas/#/Kanbas">{comingUp.text}</a>
                  <label>{comingUp.label}</label>
                </div>
              </div>
            ))}
            <div className="row">
              <div className="col">
                <a href="/Kanbas/#/Kanbas"> 12 more in the next week ... </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;