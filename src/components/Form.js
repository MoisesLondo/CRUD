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
        containerMain.className = "w-1/4 flex flex-col items-center";
        container.className = 'w-full p-4 rounded-xl shadow hidden md:block';
        formMini.className = 'w-10/12 flex flex-col gap-6 p-4 rounded-xl shadow md:hidden';
        form.className = "flex flex-col gap-3";
        
        form.appendChild(new Input("name", "Nombre", "text", "Isidoro").getInput());
        form.appendChild(new Input("lastName", "Apellido", "text", "Navarro").getInput());
        form.appendChild(new Input("ced", "Cedula", "text", "30.292.216").getInput());
        form.appendChild(new Input("tlf", "Telefono", "tel", "XXX-8968401").getInput());
        form.appendChild(new Input("address", "Correo", "text", "ex-ple@email.com").getInput());
        form.appendChild(new Button("buton", "Siguiente").getButton());

        formMini.appendChild(new Input("miniName", "Nombre", "text", "Isidoro").getInput());
        formMini.appendChild(new Input("miniLastName", "Apellido", "text", "Navarro").getInput());
        formMini.appendChild(new Input("miniCed", "Cedula", "text", "30.292.216").getInput());
        formMini.appendChild(new Input("miniTlf", "Telefono", "tel", "XXX-8968401").getInput());
        formMini.appendChild(new Input("miniAddress", "Correo", "text", "ex-ple@email.com").getInput());
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

    changeInputs()
    {
        const form = document.querySelector('.flex.flex-col.gap-3');

    form.querySelectorAll('input').forEach(inputElement => {
        const labelElement = inputElement.nextElementSibling;
        inputElement.remove();
        labelElement.remove();
        
    });
    const boton = document.getElementById("buton");
    boton.remove();

    form.appendChild(new Input("idCar", "Placa", "text", "AB123CD").getInput());
    form.appendChild(new Input("year", "Año del vehículo", "text", "2015").getInput());
    form.appendChild(new Input("color", "Color", "text", "Rojo").getInput());
    form.appendChild(new Button("finish", "Registrar").getButton());
}
        
    }

const form = new Form();
const boton = document.getElementById("buton");
const finish = document.getElementById("finish");
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
    form.changeInputs();
})

miniBoton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = form.miniExtractionsDatos();
    const trNew = new Tr(i, name, lastname, idn, tlf, address);
    i++;
    table.Add(trNew.getTr(), trNew.getMiniTr());
    form.changeInputs();
})

finish.addEventListener("click", (e) =>{
    e.preventDefault();
})
