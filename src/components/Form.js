import People from "../objects/Persona.js";
import Tr from "./Tr.js";
import Input from "./Input.js";
import Button from "./Button.js";
class Form 
{
    constructor()
    {   
        const form = document.createElement("div");
        const formMini = document.createElement('div');
        const container = document.createElement('div');
        const containerMain = document.createElement('div');
        containerMain.className = "w-auto flex flex-col items-center";
        container.className = 'p-4 rounded-xl shadow hidden md:block';
        formMini.className = 'w-10/12 flex flex-col gap-3 p-4 rounded-xl shadow md:hidden';
        form.className = "flex flex-col gap-3";
        
        form.appendChild(new Input("name", "Nombre", "text", "").getInput());
        form.appendChild(new Input("lastName", "Apellido", "text", "").getInput());
        form.appendChild(new Input("ced", "Cedula", "text", "").getInput());
        form.appendChild(new Input("tlf", "Telefono", "tel", "").getInput());
        form.appendChild(new Input("address", "Direccion", "text", "").getInput());
        form.appendChild(new Button("buton", "Siguiente").getButton());

        formMini.appendChild(new Input("miniName", "Nombre", "text", "[A-Za-zñÑ]+").getInput());
        formMini.appendChild(new Input("miniLastName", "Apellido", "text", "[A-Za-zñÑ]+").getInput());
        formMini.appendChild(new Input("miniCed", "Cedula", "text", "[A-Za-zñÑ]+").getInput());
        formMini.appendChild(new Input("miniTlf", "Telefono", "tel", "[A-Za-zñÑ]+").getInput());
        formMini.appendChild(new Input("miniAddress", "Direccion", "text", "[A-Za-zñÑ]+").getInput());
        formMini.appendChild(new Button("miniButon", "Siguiente").getButton());
        
        container.appendChild(form)
        containerMain.appendChild(container);
        document.getElementById("container-wrapped").appendChild(containerMain);
        document.getElementById("container-main").appendChild(formMini);
    }

    extractionsDatos()
    {   
        const name = document.getElementById("name").value;
        const lastname = document.getElementById("lastName").value;
        const idn = document.getElementById("ced").value;
        const tlf = document.getElementById("tlf").value;
        const address = document.getElementById("address").value;
        
        return {name, lastname, idn, tlf, address};
    }
    miniExtractionsDatos()
    {   
        const name = document.getElementById("miniName").value;
        const lastname = document.getElementById("miniLastName").value;
        const idn = document.getElementById("miniCed").value;
        const tlf = document.getElementById("miniTlf").value;
        const address = document.getElementById("miniAddress").value;
        
        return {name, lastname, idn, tlf, address};
    }
}
const form = new Form();
const boton = document.getElementById("buton");
const miniBoton = document.getElementById("miniButon");
let i = 1;
const trNew = new Tr(i, "Freddy", "Trucazo", "12.343.532", "245-2032121", "Los Santos");
table.Add(trNew.getTr(), trNew.getMiniTr());

boton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = form.extractionsDatos();
    const trNew = new Tr(i, name, lastname, idn, tlf, address);
    i++;
    table.Add(trNew.getTr(), trNew.getMiniTr());
})

miniBoton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = form.miniExtractionsDatos();
    const trNew = new Tr(i, name, lastname, idn, tlf, address);
    i++;
    table.Add(trNew.getTr(), trNew.getMiniTr());
})
