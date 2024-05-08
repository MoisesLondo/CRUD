import Tr from "./src/components/Tr.js";

function extractionsDatos()
{   
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastName").value;
    const idn = document.getElementById("ced").value;
    const tlf = document.getElementById("tlf").value;
    const address = document.getElementById("address").value;
    
    return {name, lastname, idn, tlf, address};
}
function miniExtractionsDatos()
{   
    const name = document.getElementById("miniName").value;
    const lastname = document.getElementById("miniLastName").value;
    const idn = document.getElementById("miniCed").value;
    const tlf = document.getElementById("miniTlf").value;
    const address = document.getElementById("miniAddress").value;
    
    return {name, lastname, idn, tlf, address};
}
