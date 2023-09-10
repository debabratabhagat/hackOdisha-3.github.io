import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import PdfViewer from "./components/pdfviewer/PDFViewer";
import Home from "./components/home";
import TextEditor from "./components/texteditor/texteditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pdfviewer" element={<PdfViewer />} />
        <Route path="/textEditor" element={<TextEditor />} />
      </Routes>
    </BrowserRouter>

    // <div>

    //   <PdfViewer></PdfViewer>
    // </div>
  );
}

export default App;
