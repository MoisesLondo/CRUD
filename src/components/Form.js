import Input from "./Input.js";
import Button from "./Button.js";
import Select from "./Select.js";

class Form 
{
    containerMain = document.createElement('div');
    formMini = document.createElement('div');
    constructor(components, componentsMini, button, buttonMini)
    {   
        const form = document.createElement("div");
        const container = document.createElement('div');
        const containerButton = document.createElement('div');
        const containerButtonMini = document.createElement('div');
        this.containerMain.className = "w-1/4 flex flex-col items-center";
        container.className = 'w-full p-4 rounded-xl shadow hidden md:block';
        containerButton.className = 'w-full flex flex-row gap-3';
        containerButtonMini.className = 'w-full flex flex-row gap-3';
        this.formMini.className = 'w-10/12 flex flex-col gap-6 p-4 rounded-xl shadow md:hidden';
        form.className = "flex flex-col gap-3";
        
        components.forEach((item)=>
        {
            form.appendChild(item.getInput());            
        });
        form.appendChild(containerButton);
        button.forEach((item)=>
        {
            containerButton.appendChild(item.getButton());
        });
        
        componentsMini.forEach((item)=>
        {
                this.formMini.appendChild(item.getInput());            
        });
        this.formMini.appendChild(containerButtonMini);
        buttonMini.forEach((item)=>
        {
            containerButtonMini.appendChild(item.getButton());
        });

        container.appendChild(form)
        this.containerMain.appendChild(container);
        document.getElementById("container-wrapped").appendChild(this.containerMain);
        document.getElementById("container-main").appendChild(this.formMini); 
    }
    getContainerMain()
    {
        return this.containerMain;
    }
    getFormMini()
    {
        return this.formMini;
    }
}

const inputName = new Input("name", "Nombre", "text", "Isidoro");
inputName.container.addEventListener("input", validateInput);

const inputLastName = new Input("lastName", "Apellido", "text", "Navarro");
inputLastName.container.addEventListener("input", validateInput);

const inputIDN = new Input("ced", "Cedula", "text", "30.292.216");
inputIDN.container.addEventListener("input", validateInputDNI);

const inputTLF = new Input("tlf", "Telefono", "tel", "XXX-8968401");
const inputAddress = new Input("address", "Correo", "text", "ex-ple@email.com");
const button = new Button("buton", "Siguiente");

const inputNameMini = new Input("miniName", "Nombre", "text", "Isidoro");
const inputLastNameMini = new Input("miniLastName", "Apellido", "text", "Navarro");
const inputIDNMini = new Input("miniCed", "Cedula", "text", "30.292.216");
const inputTLFMini = new Input("miniTlf", "Telefono", "tel", "XXX-8968401");
const inputAddressMini = new Input("miniAddress", "Correo", "text", "ex-ple@email.com");
const buttonMini = new Button("miniButon", "Siguiente");

export const form = new Form([inputName, inputLastName, inputIDN, inputTLF, inputAddress],[inputNameMini, inputLastNameMini, inputIDNMini, inputTLFMini, inputAddressMini],[button],[buttonMini]);

const inputCar = new Input("idCar", "Placa", "text", "AB123CD");
const inputYearCar = new Input("year", "Año del vehículo", "text", "2015");

inputYearCar.container.addEventListener("input", validateInputYear);
const inputColor = new Input("color", "Color", "text", "Rojo");

const selectMarca = new Select("selectBrand", "marca", "Marca", "la Marca", ["Toyota","Nissan","Mazda","Lexus","Subaru"]);
inputColor.container.addEventListener("input", validateInput);
const buttonCar = new Button("finish", "Registrar");
const back = new Button("back", "Atrás");

const inputCarMini = new Input("miniIdCar", "Placa", "text", "AB123CD");
const inputYearCarMini = new Input("miniYear", "Año del vehículo", "text", "2015");
const inputColorMini = new Input("miniColor", "Color", "text", "Rojo");
const buttonCarMini = new Button("miniFinish", "Registrar");
const miniBack = new Button("miniBack", "Atrás");

export const form2 = new Form([inputCar, inputYearCar, inputColor, selectMarca],[inputCarMini, inputYearCarMini, inputColorMini],[back, buttonCar],[miniBack, buttonCarMini]);
form2.getContainerMain().classList.add('hidden');
form2.getFormMini().classList.add('hidden');

function validateInput(e) {
    const input = e.target;
    const inputValue = input.value.trim();
    const hasNumbers = /[0-9]/.test(inputValue);
    input.value = hasNumbers ? inputValue.replace(/[0-9]/g, "") : inputValue;
  }
  function validateInputDNI(e) {
    const input = e.target;
    const inputValue = input.value.trim();
    const validLengthRegex = /^(\d{6}|\d{7}|\d{8})$/;
    const isValidLength = validLengthRegex.test(inputValue);
    input.value = isValidLength ? inputValue : inputValue.replace(/[^0-9]/g, "");
  
  }
  function validateInputYear(e) {
    const input = e.target;
    const inputValue = input.value.trim();
    const validLengthRegex = /^\d{4}$/;
    const validRange = inputValue >= 1970 && inputValue <= 2024;
    const isValidLength = validLengthRegex.test(inputValue) && validRange;
    input.value = isValidLength ? inputValue : inputValue.replace(/[^0-9]/g, "");
  
  }
  