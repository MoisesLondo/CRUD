import Tr from "./src/components/Tr.js";
import { form, form2 } from "./src/components/Form.js";
import People from "./src/objects/Persona.js"

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

const boton = document.getElementById("buton");
const finish = document.getElementById("finish");
const miniBoton = document.getElementById("miniButon");
const back = document.getElementById("back")
let i = 1;
const trNew = new Tr(i, "Freddy", "Trucazo", "12.343.532", "245-2032121", "Los Santos");
table.Add(trNew.getTr(), trNew.getMiniTr());

boton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = extractionsDatos();
    const persona = new People(name, lastname, idn, tlf, address)
    console.log(persona)
    form.getContainerMain().classList.add('hidden');
    form.getFormMini().classList.add('hidden');

    form2.getContainerMain().classList.remove('hidden');
    form2.getFormMini().classList.remove('hidden');
})

miniBoton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = miniExtractionsDatos();
    form.getContainerMain().classList.add('hidden');
    form.getFormMini().classList.add('hidden');

    form2.getContainerMain().classList.remove('hidden');
    form2.getFormMini().classList.remove('hidden');
})

finish.addEventListener("click", (e) =>{
    e.preventDefault();
    form2.getContainerMain().classList.add('hidden');
    form2.getFormMini().classList.add('hidden');

    form.getContainerMain().classList.remove('hidden');
    form.getFormMini().classList.remove('hidden');
    
    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("ced").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("address").value = "";
    document.getElementById("idCar").value = "";
    document.getElementById("year").value = "";
    document.getElementById("color").value = "";

    
})

back.addEventListener("click", (e) =>{
    e.preventDefault();
    form2.getContainerMain().classList.add('hidden');
    form2.getFormMini().classList.add('hidden');

    form.getContainerMain().classList.remove('hidden');
    form.getFormMini().classList.remove('hidden');
})
