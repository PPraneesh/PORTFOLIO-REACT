import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropTypes from 'prop-types';

export default function Root(props) {
  
  return (
    <>
      <div className="body">
        <Header route={props.route} setRoute={props.setRoute} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

Root.propTypes = {
  route: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired,
};
