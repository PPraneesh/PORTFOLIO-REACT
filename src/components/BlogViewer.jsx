import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import {blogData} from "../data/blogs";
export default function BlogViewer() {
  const { blogname } = useParams();
  const blog = blogData.find((b) => b.id === blogname);
  return (
    <>
      <div className="blog-viewer post">
        <h2 className={`post-title yellow_color`}>{blog.title}</h2>
        <p className={`post-date yellow_color`}>written on {blog.date}</p>
        <div className="blog-content">
          <Markdown>{blog.contents}</Markdown>
        </div>
      </div>
    </>
  );
}
