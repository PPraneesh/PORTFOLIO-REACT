import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropTypes from 'prop-types';

export default function Root(props) {
  var bodyElement = document.getElementsByClassName('head')[0]; 
  var listElement = document.getElementsByClassName('list')[0];
  var listHeight = listElement ? listElement.offsetHeight : 0;
  var bodyHeight = bodyElement ? bodyElement.offsetHeight : 0;
  return (
    <>
      <div className="body">
        <Header route={props.route} setRoute={props.setRoute} />
        <div className="outlet" style={{
          paddingTop: bodyHeight+listHeight
        }}>
        <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

Root.propTypes = {
  route: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired,
};
