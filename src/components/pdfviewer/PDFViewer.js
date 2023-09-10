import React, { useState } from "react";
import pdfjs from "pdfjs-dist/build/pdf";
import "./pdfViewer.css";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PdfViewer() {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewFile, setViewFile] = useState(null);

  const handleFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = (e) => {
        setPdfFile(e.target.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (pdfFile != null) {
      setViewFile(pdfFile);
    }
  };
  const newPlugin = defaultLayoutPlugin();

  return (
    <div className="container">
      <h1>PDF Viewer</h1>
      <form onSubmit={handleSubmit}>
        <input className="choosefile" type="file" accept=".pdf" onChange={handleFileChange} />
        <button type="submit">View</button>
      </form>
      <div className="pdfContainer">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          {/* <!-- The viewer component will be put here --> */}
          {viewFile && (
            <>
              <Viewer fileUrl={viewFile} plugins={[newPlugin]} />{" "}
            </>
          )}
          {!viewFile && <>No pdf</>}
        </Worker>
      </div>
    </div>
  );
}

export default PdfViewer;
