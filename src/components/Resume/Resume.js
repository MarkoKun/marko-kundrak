import React, { useState, useEffect } from "react";
import { saveAs } from 'file-saver';
import 'react-slideshow-image/dist/styles.css'
import { Container, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
//import pdf from "../../Assets/../Assets/MarkoKundrakCV.pdf";
import pdf from "../../Assets/MarkoKundrakCV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleDownload = () => {
    console.log("clicked")
    // Use file-saver library to download the PDF
    saveAs(pdf, 'MarkoKundrakCV.pdf');
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Col className="resume">
            <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={1} scale={width > 786 ? 1.3 : 0.65} />
            </Document>
            <br/>
            <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={2} scale={width > 786 ? 1.3 : 0.65} />
            </Document>
            <br/>
            <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={3} scale={width > 786 ? 1.3 : 0.65} />
            </Document>
            <br/>   
            <Document file={pdf} className="d-flex justify-content-center">
                <Page pageNumber={4} scale={width > 786 ? 1.3 : 0.65} />
            </Document>
            <br/>   
            <div>
              <Button
                onClick={handleDownload}
                variant="primary"
                href={pdf}
                target="_blank"
                style={{position: "relative", maxWidth: "250px", zIndex: "2"}}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>      
            </div>
        </Col>
      </Container>
    </div>
  );
}

export default ResumeNew;
