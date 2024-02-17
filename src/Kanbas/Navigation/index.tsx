import { Link, useLocation } from "react-router-dom";
import "../../libs/font-awesome/css/font-awesome.min.css";
import "./index.css";
import "../styles.css";
import { TbLetterN } from "react-icons/tb"
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaHistory, FaDesktop, FaArrowAltCircleRight, FaHireAHelper } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: " ",   icon: <TbLetterN className="fs-2" />  },
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" style={{color: "lightgray"}}/>  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaHistory className="fs-2" /> },
    { label: "Studio",  icon: <FaDesktop className="fs-2" /> },
    { label: "Commons",  icon: <FaArrowAltCircleRight className="fs-2" /> },
    { label: "Help",  icon: <FaHireAHelper className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;