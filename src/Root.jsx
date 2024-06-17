import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PropTypes from 'prop-types';
import { Analytics } from '@vercel/analytics/react';
import { useLayoutEffect, useState } from "react";

export default function Root(props) {
  const [bodyHeight, setBodyHeight] = useState(0);
  const [listHeight, setListHeight] = useState(0);

  useLayoutEffect(() => {
    var bodyElement = document.getElementsByClassName('head')[0]; 
    var listElement = document.getElementsByClassName('list')[0];
    setListHeight(listElement ? listElement.offsetHeight : 0);
    setBodyHeight(bodyElement ? bodyElement.offsetHeight : 0);
  }, []);

  return (
    <>
      <div className="body">
        <Header route={props.route} setRoute={props.setRoute} />
        <div className="outlet" style={{
          paddingTop: bodyHeight + listHeight 
        }}>
        <Outlet />
        </div>
        <Footer />
        <Analytics/>
      </div>
    </>
  );
}

Root.propTypes = {
  route: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired,
};
