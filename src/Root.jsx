import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropTypes from 'prop-types';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { useEffect } from "react";

export default function Root(props) {
  // Store the toast object in a variable
  const toast = Toastify({
    text: "Explore my AI-infused creativity in my latest Projects!",
    duration: 3000,
    destination: "/projects",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(34, 33, 41)",
      display: "flex",
      opacity: 0.9,
      justifyContent: "center",
      gap: "1rem",
      fontSize: "1rem",
      padding: "1rem",
      maxWidth: "12rem",
    },
  });
  
  useEffect(() => {
  toast.showToast();
}, []);

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
