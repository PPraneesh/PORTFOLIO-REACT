import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
export default function Header(props) {
  let location = useLocation();
  const { scrollYProgress } = useScroll();
  const [lenProgress, setLenProgress] = useState(1);
  const [progressLen, setProgressLen] = useState(0);
  const [lastestProgress, setLatestProgress] = useState(0);

  useEffect(() => {
    handleRouteChange(location.pathname);
  }, [location.pathname]);

  // useEffect(() => {
  //   var element = document.getElementsByClassName('header')[0];
  //   var elementSpan = document.getElementsByClassName('progress_span')[1];
  //   var elementLogo = document.getElementsByClassName('logo')[0];

  //   if (element && elementSpan && elementLogo) {
  //     var width = element.offsetWidth;
  //     var widthSpan = elementSpan.offsetWidth;
  //     var widthLogo = elementLogo.offsetWidth;
  //     var len = (Math.round((width-widthLogo)/widthSpan));
  //     setLenProgress(len);
  //   }
  // }, []);

  const widthProgressFinder = () => {
    var element = document.getElementsByClassName("header")[0];
    var width = element.offsetWidth;
    var elementSpan = document.getElementsByClassName("progress_span")[0];
    var widthSpan = elementSpan.offsetWidth;
    var elementLogo = document.getElementsByClassName("logo")[0];
    var widthLogo = elementLogo.offsetWidth;
    var len = Math.round((width - widthLogo) / widthSpan);
    setLenProgress(len);
    console.log(len);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    widthProgressFinder();
    setLatestProgress(latest);
    setProgressLen(Math.round(lastestProgress * lenProgress));
    console.log(lenProgress, progressLen);
  });

  function handleRouteChange(pathname) {
    switch (pathname) {
      case "/":
        props.setRoute({
          loc: "C:\\home>",
          theme: "yellow",
        });
        break;
      case "/about":
        props.setRoute({
          loc: "C:\\home\\about>",
          theme: "green",
        });
        break;
      case "/blogs":
        props.setRoute({
          loc: "C:\\home\\blogs>",
          theme: "yellow",
        });
        break;
      case "/projects":
        props.setRoute({
          loc: "C:\\home\\projects>",
          theme: "red",
        });
        break;
      case "/resume":
        props.setRoute({
          loc: "C:\\home\\resume>",
          theme: "green",
        });
        break;
      default:
        break;
    }
  }

  function handleLinkEnter(locString) {
    let newLoc = props.route.loc + ` cd ${locString}`;
    props.setRoute({
      ...props.route,
      loc: newLoc,
    });
    setTimeout(() => {
      widthProgressFinder();
      setProgressLen(Math.round(lastestProgress * lenProgress));
    }, 100);
  }

  function handleMouseLeave() {
    let originalLoc = props.route.loc.split("cd")[0];
    props.setRoute({
      ...props.route,
      loc: originalLoc,
    });
    setTimeout(() => {
      widthProgressFinder();
    }, 100);
  }
  var bodyElement = document.getElementsByClassName("outlet")[0];
  var bodyWidth = bodyElement ? bodyElement.offsetWidth : 0;

  var logoElement = document.getElementsByClassName("header_space")[0];
  var logoHeight = logoElement ? logoElement.offsetHeight : 0;
  return (
    <>
      <div
        className="header"
        style={{
          width: bodyWidth,
        }}
      >
        <div className="head">
          <div id="loc" className={`header_space ${props.route.theme}`}>
            <span className="logo">{props.route.loc}</span>
          </div>
          <motion.div className="progress_cont">
          <span
                  className={`progress_span ${props.route.theme}_color`}
                  style={{ fontSize: logoHeight }}
                >
                  {"["}
                </span>
            {Array(progressLen)
              .fill()
              .map((_, i) => (
                <span
                  className={`progress_span ${props.route.theme}_color`}
                  key={i}
                  style={{ fontSize: logoHeight }}
                >
                  #
                </span>
              ))}
            {Array(
              lenProgress - progressLen > 0 ? lenProgress - progressLen : 0
            )
              .fill()
              .map((_, i) => (
                <span
                  className={`progress_span ${props.route.theme}_color`}
                  key={i}
                  style={{ fontSize: logoHeight }}
                >
                  .
                </span>
              ))}
               <span
                  className={`progress_span ${props.route.theme}_color`}
                  style={{ fontSize: logoHeight }}
                >
                  {"]"}
                </span>
          </motion.div>
        </div>
        <ul className="list">
          <Link className="link" to="">
            <span
              onMouseEnter={() => handleLinkEnter("..")}
              onMouseLeave={handleMouseLeave}
            >
              /home
            </span>
          </Link>
          <Link className="link" to="about">
            <span
              onMouseEnter={() => handleLinkEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              About me
            </span>
          </Link>
          <div className="dropdown">
            <span className={`dropbtn ${props.route.theme}_color link`}>
              Show more ▾
            </span>
            <div className="dropdown-content">
              <Link className="link" to="blogs">
                <span
                  onMouseEnter={() => handleLinkEnter("blogs")}
                  onMouseLeave={handleMouseLeave}
                >
                  Blogs
                </span>
              </Link>
              <Link className="link" to="projects">
                <span
                  onMouseEnter={() => handleLinkEnter("projects")}
                  onMouseLeave={handleMouseLeave}
                >
                  My Projects
                </span>
              </Link>
              <Link className="link" to="resume">
                <span
                  onMouseEnter={() => handleLinkEnter("resume")}
                  onMouseLeave={handleMouseLeave}
                >
                  My resume
                </span>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </>
  );
}

Header.propTypes = {
  route: PropTypes.object.isRequired,
  setRoute: PropTypes.func.isRequired,
};
