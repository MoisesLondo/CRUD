import People from "../objects/Persona.js";
import Tr from "./Tr.js";

class Form 
{
    constructor()
    {
        const form = document.createElement("div");
        const container = document.createElement('div');
        const containerMain = document.createElement('div');
        containerMain.className = "w-full flex flex-col items-center";
        container.className = 'p-5 rounded-xl shadow';
        form.className = "flex flex-col gap-3";
        form.innerHTML = 
        `
            <div>
                <label class=""> Nombre </label>
                <input type="text" id="name" pattern="[A-Za-zñÑ]+" required />
            </div>
            <div>
                <label for="lastName" > Apellido </label>
                <input type="text" id="lastName" />
            </div>
            <div>
                <label> Cédula </label>
                <input type="text" id="ced" />
            </div>
            <div>
                <label for="tlf"> Telefono </label>
                <input type="tel" id="tlf"/>
            </div>
            <div>
                <label for="address"> Direccion </label>
                <input type="text" id="address"/>
            </div>
            <div class="flex gap-5">
                <button id="buton" class="w-full p-2 bg-rose-400 rounded-lg text-white hover:bg-rose-600 transform-all duration-75 ease-in-out:hover">Siguiente</button>
            </div>
        `;
        container.appendChild(form)
        containerMain.appendChild(container);
        document.body.appendChild(containerMain);
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
}

const form = new Form();