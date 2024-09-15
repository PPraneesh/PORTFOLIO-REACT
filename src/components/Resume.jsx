import pdf from "./resume.pdf";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import PropTypes from "prop-types";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume(props) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <div className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="resumepdf">
          <Document file={pdf}>
            <Page pageNumber={1} scale={width > 745 ? 1.225 :0.62} />
          </Document>
        </div>
        <br />
        <div className="download">
          <a href={pdf} download>
            <button className={`green-button ${props.route.theme}_Bcolor`}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

Resume.propTypes = {
  route: PropTypes.object.isRequired,
};
