window.jsPDF = window.jspdf.jsPDF;
const makeCVPDF = ()=>{
    const doc = new jsPDF();
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
}
makeCVPDF();
