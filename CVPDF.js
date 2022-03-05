import {jsPDF} from "jspdf";
const makeCVPDF = ()=>{
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
}
makeCVPDF();
