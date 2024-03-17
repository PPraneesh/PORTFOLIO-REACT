import pdf from "./resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
import PropTypes from 'prop-types';

export default function Resume(props) {
  return (
    <div className="resume">
      <div className="container">
        <h1>Resume</h1>
        <div className="resumepdf">
          <Document file={pdf} className="pdf">
            <Page pageNumber={1} scale={2} />
          </Document>
        </div>
        <br />
        <div className="download">
          <a href={pdf} download>
            <button className={`buttons ${props.route.theme}_Bcolor`}>
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

Resume.propTypes={
  route: PropTypes.object.isRequired,
}