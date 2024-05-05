import People from "../objects/Persona.js";
import Tr from "./Tr.js";

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
        formMini.innerHTML = 
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
}
const form = new Form();
const boton = document.getElementById("buton")
let i = 1;
boton.addEventListener("click", (e) =>{
    e.preventDefault();
    const { name, lastname, idn, tlf, address} = form.extractionsDatos();
    const trNew = new Tr(i, name, lastname, idn, tlf, address);
    console.log(trNew);
    i++;
    table.Add(trNew.getTr(), trNew.getMiniTr());
})

