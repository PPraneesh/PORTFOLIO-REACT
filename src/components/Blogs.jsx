import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {blogData} from "../data/blogs";

export default function Blogs(props) {
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>Posts</h2>
      <div className="posts">
        {blogData.map((blog, index) => (<>
          <div key={index} className={`post ${props.route.theme}_border`}>
            <h2 className={`${props.route.theme}_color`}>{blog.title}</h2>
            <p>
              {" "}
              <span className={`${props.route.theme}_color`}>
                Written On:
              </span>{" "}
              {blog.date}
            </p>
            <p>
              <span className={`${props.route.theme}_color`}>
                Description:
              </span>{" "}
              {blog.contentsShort}
            </p>
            <div className="proj-buttons">
              <button className={`buttons ${props.route.theme}_Bcolor`}>
                {" "}
                <Link to={blog.link}>Read it here </Link>
              </button>
              <button className={`buttons ${props.route.theme}_Bcolor`}>
              <Link to={blog.link_online}>Read it on dev.to </Link>
              </button>
            </div>
          </div>
            <hr />
        </>))}
      </div>
    </>
  );
}

Blogs.propTypes = {
  route: PropTypes.object.isRequired,
};
