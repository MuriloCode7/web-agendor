import { Link } from "react-router-dom";
import withRouter from "../../store/withRouter";
import logo from "../../assets/logo.png";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  return (
    <sidebar className="col-2 h-100">
      <Link to="/">
        <img src={logo} className="img-fluid px-3 py-4" alt="logo" />
      </Link>
      <ul className="m-0 p-0">
        <li>
          <Link
            to="/schedules"
            className={location.pathname === "/schedules" ? "active" : ""}
          >
            <span className="mdi mdi-calendar-check px-2"></span>
            <text>Agendamentos</text>
          </Link>
        </li>
        <li>
          <Link
            to="/customers"
            className={location.pathname === "/customers" ? "active" : ""}
          >
            <span className="mdi mdi-account-multiple px-2"></span>
            <text>Clientes</text>
          </Link>
        </li>
        <li>
          <Link
            to="/colaborators"
            className={location.pathname === "/colaborators" ? "active" : ""}
          >
            <span className="mdi mdi-card-account-details-outline px-2"></span>
            <text>Colaboradores</text>
          </Link>
        </li>
        <li>
          <Link
            to="/specialties"
            className={location.pathname === "/specialties" ? "active" : ""}
          >
            <span className="mdi mdi-auto-fix px-2"></span>
            <text>Serviços</text>
          </Link>
        </li>
        <li>
          <Link
            to="/timeTables"
            className={location.pathname === "/timeTables" ? "active" : ""}
          >
            <span className="mdi mdi-clock-check-outline px-2"></span>
            <text>Horários</text>
          </Link>
        </li>
      </ul>
    </sidebar>
  );
};

export default withRouter(Sidebar);
