import PropTypes from "prop-types";
export default function Blogs(props) {
  return (
    <>
      <h2 className={`post-title ${props.route.theme}_color`}>Posts</h2>
      <p>
        Currently, I haven`t written anything, but I will start writing soon. :)
      </p>
    </>
  );
}
Blogs.propTypes = {
  route: PropTypes.object.isRequired,
};