import ModuleList from "../Modules/List";
import Sidebar from "./SideBar";

function Home() {
  return (

    <div className="row">
      <div className="col-xl-9">
        <ModuleList />
      </div>

      <div className="col-xl-3 d-none d-xl-block">
        <Sidebar />
      </div>

    </div>

  );
}
export default Home;