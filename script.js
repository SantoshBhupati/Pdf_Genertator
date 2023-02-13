var pdfPreview=document.getElementById("pdf");
var generatePDFButton=document.getElementById("Submit");

// function wholePdf(){
var doc = new jsPDF();
// doc.text(20, 20, "Name: ");
// doc.text(20, 30, "Email: ");

doc.setFontSize(15)
doc.text(20,50,"STATE OF ______________________");
doc.text(20,65,"COUNTRY OF ______________________");
doc.setFontSize(12);
doc.text(20,75,"By signing this affidavit, I______________________________________,residing at");
doc.text(20,82,"________________,___________,______________,__________");
doc.text(20,90,"swear or affirm under penality that the following statements and the contents are true and");
doc.text(20,98,"correct");
// doc.setFontSize(20);
// doc.setFont("helvetica", "bold");
// doc.text(20,110,"Decendt Information");

doc.setFontSize(15)
// doc.setFont("helvetica", "bold");
doc.text(20,123,"Decendat Name:_______________");
doc.text(20,133,"Date of death:_______________");
doc.text(20,143,"Place of death:_______________");
doc.text(20,153,"here is actual copy of Decendats death certificate");
doc.setFontSize(25);
doc.setFont("helvetica", "bold");
doc.text(55,30,"Affidavit of Small Estate");
doc.setFontSize(20);
doc.setFont("helvetica", "bold");
doc.text(20,110,"Decendt Information");
doc.line(20,113,92,113);
var pdfData = doc.output();
doc.setFont("helvetica", "normal");
var pdfBlob = new Blob([pdfData], {
    type: "application/pdf"
});
var objectURL = URL.createObjectURL(pdfBlob);

pdfPreview.innerHTML = "";
pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";


// wholePdf();
////////////////////
var State_Name=document.getElementById("State_Name")
State_Name.addEventListener("change",function(e){
    // var State_Name=document.getElementById("State_Name").value;
    
    doc.setFontSize(15)
doc.text(60,50,`${State_Name.value}`);
    var pdfData = doc.output();

var pdfBlob = new Blob([pdfData], {
    type: "application/pdf"
});
var objectURL = URL.createObjectURL(pdfBlob);

pdfPreview.innerHTML = "";
pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
////////////////////////
var County_Name=document.getElementById("County_Name");
County_Name.addEventListener("change",(e)=>{

    doc.setFontSize(15)
    doc.text(60,65,`${County_Name.value}`);
    var pdfData = doc.output();

var pdfBlob = new Blob([pdfData], {
    type: "application/pdf"
});
var objectURL = URL.createObjectURL(pdfBlob);

pdfPreview.innerHTML = "";
pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
//////////////////////
var Affiant_Personal_Title=document.getElementById("Affiant_Personal_Title");
Affiant_Personal_Title.addEventListener("change",function(e){

    e.preventDefault();
    doc.setFontSize(12);
    doc.text(70,75,`${Affiant_Personal_Title.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
var Affiant_Name=document.getElementById("Affiant_Name");
Affiant_Name.addEventListener("change",function(e){
    
    e.preventDefault();
    doc.setFontSize(12);
    doc.text(75,75,`.${Affiant_Name.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
// //////////////////////////////
var Affiant_Address=document.getElementById("Affiant_Address");
Affiant_Address.addEventListener("change",function(e){
    e.preventDefault();
    doc.setFontSize(12);
    doc.text(20,82,`.${Affiant_Address.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
//////////////////////////////

var Affiant_City=document.getElementById("Affiant_City");
Affiant_City.addEventListener("change",function(e){
    e.preventDefault();
    doc.setFontSize(12);
    doc.text(65,82,`.${Affiant_City.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})


////////////////
var Affiant_State=document.getElementById("Affiant_State");
Affiant_State.addEventListener("change",function(e){
    e.preventDefault();
    doc.setFontSize(12);
    doc.text(85,82,`.${Affiant_State.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})
//////////////////

var Affiant_Zip_Code=document.getElementById("Affiant_Zip_Code");
Affiant_Zip_Code.addEventListener("change",function(e){
    e.preventDefault();
    doc.setFontSize(12);
    doc.text(120,82,`.${Affiant_Zip_Code.value}`);
    var pdfData = doc.output();

    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
})








// generatePDFButton.addEventListener("click",function(e){
//   e.preventDefault();
//      var State_Name=document.getElementById("State_Name").value;
//      var County_Name=document.getElementById("County_Name").value;
//      console.log(State_Name);
//      console.log(County_Name);
// //      var doc = new jsPDF();
// // doc.text(20, 20, "Name: ");
// // doc.text(20, 30, "Email: ");
// // doc.setFontSize(25);
// // doc.text(55,30,"Affidavit of Small Estate");
// // doc.setFontSize(15)
// // doc.text(20,50,"STATE OF ______________________");
// // doc.text(20,65,"COUNTRY OF ______________________");
// // doc.text(20,50,"STATE OF "+State_Name);
// // doc.text(20,65,"COUNTRY OF "+County_Name);
// // var pdfData = doc.output();
// // var pdfBlob = new Blob([pdfData], {
// //     type: "application/pdf"
// // });
// // var objectURL = URL.createObjectURL(pdfBlob);
   
// //      console.log(pdfPreview.innerHTML);
// //      pdfPreview.innerHTML = "";

// // pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='500px'>";
// });