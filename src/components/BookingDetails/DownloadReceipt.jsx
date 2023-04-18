import React from 'react'
import html2canvas  from "html2canvas";
import {jsPDF} from "jspdf"

const DownloadReceipt = ({rootElementId, downloadFileName}) => {
    const downloadFileDocument = () =>{
        const input= document.getElementById(rootElementId);
        html2canvas(input).then((canvas) =>{
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("P", "pt", "a4");
            pdf.addImage(imgData, "JPEG", 70, 70);
            pdf.save(`${downloadFileName}`);
        });
    };
  return (
    <div>
       <button onClick={downloadFileDocument}>Download Details</button> 
    </div>
  )
}

export default DownloadReceipt