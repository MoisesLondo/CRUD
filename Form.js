import Input from "./Input.js";
import Button from "./Button.js";
import Select from "./Select.js";
import Color from "./Color.js";
import People from "./Persona.js";
import Vehicle from "./Vehiculo.js";
import Tr from "./Tr.js";
import Lista from "./Lista.js";
import ButtonOptions from "./ButtonOptions.js";

class Form 
{
    containerMain = document.createElement('div');
    formMini = document.createElement('div');
    constructor(titulo, components, componentsMini, button, buttonMini)
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
        form.className = "flex flex-col gap-6";
        
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

        container.appendChild(form);
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
const lista = new Lista();
const inputName = new Input("name", "Nombre", "text", "Isidoro");
inputName.container.addEventListener("input", validateInput);

const inputLastName = new Input("lastName", "Apellido", "text", "Navarro");
inputLastName.container.addEventListener("input", validateInput);

const inputIDN = new Input("ced", "Cedula", "text", "30.292.216");
inputIDN.container.addEventListener("input", validateInputNumbers);

const inputTLF = new Input("tlf", "Telefono", "tel", "XXX-8968401");
const inputAddress = new Input("address", "Correo", "text", "ex-ple@email.com");
const button = new Button("buton", "Siguiente");

const inputNameMini = new Input("miniName", "Nombre", "text", "Isidoro");
const inputLastNameMini = new Input("miniLastName", "Apellido", "text", "Navarro");
const inputIDNMini = new Input("miniCed", "Cedula", "text", "30.292.216");
const inputTLFMini = new Input("miniTlf", "Telefono", "tel", "XXX-8968401");
const inputAddressMini = new Input("miniAddress", "Correo", "text", "ex-ple@email.com");
const buttonMini = new Button("miniButon", "Siguiente");

export const form = new Form("Formulario para Persona",[inputName, inputLastName, inputIDN, inputTLF, inputAddress],[inputNameMini, inputLastNameMini, inputIDNMini, inputTLFMini, inputAddressMini],[button],[buttonMini]);

const inputCar = new Input("idCar", "Placa", "text", "AB123CD");
const inputYearCar = new Input("year", "Año del vehículo", "text", "2015");
inputYearCar.container.addEventListener("input", validateInputNumbers);

const inputColor = new Color("inputColor", "spanColor");

const selectMarca = new Select("selectBrand", "marca", "Marca", "la Marca");
const selectModelo = new Select("selectModel", "modelo", "Modelo", "el Modelo");
selectMarca.AddOptions(["Toyota","Nissan","Mazda","Mitsubishi","Subaru"]);
selectMarca.AddEvent(()=>
    {
        const Select = selectMarca.getSelect();
        const list = 
            (Select.value == "toyota") ? ["Supra", "Corolla", "Starlet"] : 
            (Select.value == "nissan") ? ["GT-R", "370z", "Skyline"]: 
            (Select.value == "mazda") ? ["MX-5 Miata", "RX-8", "MX-6"] :
            (Select.value == "mitsubishi") ? ["Lancer Evolution IX", "Galant VR-4", "Eclipse"] :
            (Select.value == "subaru") ? ["BRZ", "WRX STI", "Legacy"]: [""]; 
        selectModelo.AddOptions(list); 
    })
const url = new Input("url", "Imagen", "url", "https://....com");
const register = new Button("finish", "Registrar");
const update = new Button("update", "Editar");
update.getButton().classList.add('hidden');
const back = new Button("back", "Atrás");

const inputCarMini = new Input("miniIdCar", "Placa", "text", "AB123CD");
const inputYearCarMini = new Input("miniYear", "Año del vehículo", "text", "2015");

const selectMarcaMini = new Select("miniSelectBrand", "marca", "Marca", "la Marca");
selectMarcaMini.AddOptions(["Toyota","Nissan","Mazda","Mitsubishi","Subaru"]);
const selectModeloMini = new Select("miniSelectModel", "modelo", "Modelo", "el Modelo");
selectMarcaMini.AddEvent(()=>
    {
        const Select = selectMarcaMini.getSelect();
        const list = 
            (Select.value == "toyota") ? ["Supra", "Corolla", "Starlet"] : 
            (Select.value == "nissan") ? ["GT-R", "370z", "Skyline"]: 
            (Select.value == "mazda") ? ["MX-5 Miata", "RX-8", "MX-6"] :
            (Select.value == "mitsubishi") ? ["Lancer Evolution IX", "Galant VR-4", "Eclipse"] :
            (Select.value == "subaru") ? ["BRZ", "WRX STI", "Legacy"]: [""]; 
        selectModeloMini.AddOptions(list); 
    })

const inputColorMini = new Color("miniColor", "miniSpanColor");
const miniUrl = new Input("url", "Imagen", "url", "https://....com");
const registerMini = new Button("miniFinish", "Registrar");
const miniBack = new Button("miniBack", "Atrás");

export const form2 = new Form("Formulario para Vehiculo",[inputCar, inputYearCar, inputColor, selectMarca, selectModelo, url],[inputCarMini, inputYearCarMini, inputColorMini, selectMarcaMini, selectModeloMini, miniUrl],[back, register, update],[miniBack, registerMini]);
form2.getContainerMain().classList.add('hidden');
form2.getFormMini().classList.add('hidden');

button.AddEvent((e) => validationFormPerson() ? PaginationForm() : e.stopImmediatePropagation());
buttonMini.AddEvent((e) => validationFormPerson() ? PaginationForm() : e.stopImmediatePropagation());
back.AddEvent(PaginationFormBack);
miniBack.AddEvent(PaginationFormBack);
inputColor.AddEvent(ChangeColor);
register.AddEvent((e) => validationFormCar() ? Register() : e.stopImmediatePropagation())
registerMini.AddEvent((e) => validationFormCar() ? Register() : e.stopImmediatePropagation())



function validationFormPerson(){
    const name = document.getElementById("name").value
    const lastName = document.getElementById("lastName").value
    const idn = document.getElementById("ced").value
    const tlf = document.getElementById("tlf").value
    const address = document.getElementById("address").value
    const expresion = /^\S+@\S+\.\S+$/
    const phoneRegex = /^(0412|0414|0424|0426)-\d{7}$/;


    const isIdnValid = (idn.length >= 6 && idn.length <= 8) ? true : false;
    const isFormValid = (name === "" || lastName === "" || idn === "" || tlf === "" || address === "") ? false : true;
    const isEmailValid = (expresion.test(address))
    const isTlfValid = (phoneRegex.test(tlf))

    return (!isFormValid) ? (alert("Todos los campos son obligatorios."), false) :
           (!isIdnValid) ? (alert("La cédula debe tener entre 6 y 8 caracteres."), false) :
           (!isEmailValid) ? (alert("El correo es invalido."), false) :
           (!isTlfValid) ? (alert("El número de teléfono no es valido."), false) : 
           true;
}

function validationFormCar(){
    const placa = document.getElementById("idCar").value
    const year = document.getElementById("year").value
    const color = document.getElementById("inputColor").value
    const marca = document.getElementById("selectBrand").value
    const modelo = document.getElementById("selectModel").value
    const url = document.getElementById("url").value
    const expresion = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/


    const isFormValid = (placa === "" || year === "" || color === "" || marca === "" || modelo === "" || url === "") ? false : true;
    const isYearValid = (year.length >= 4 && year.length <= 4) ? true : false;
    const isIdCarValid = (placa.length >= 6 && placa.length <= 7) ? true : false;
    const yearNumber = parseInt(year, 10);
    const isYearValid2 = (yearNumber >= 1960 && yearNumber <= 2024);
    const isUrlValid = (expresion.test(url))

    return(!isFormValid) ? (alert("Todos los campos son obligatorios."), false) :
    (!isYearValid) ? (alert("Ingrese el año del vehículo en formato AAAA."), false) :
    (!isYearValid2) ? (alert("Año invalido."), false) :
    (!isIdCarValid) ? (alert("Placa invalida."), false) :
    (!isUrlValid) ? (alert("La URL no es valida.")) :
    (alert("Registrado correctamente.")), true;
}
function validateInput(e) {
    const input = e.target;
    const inputValue = input.value.trim();
    const hasNumbers = /[0-9]/.test(inputValue);
    input.value = hasNumbers ? inputValue.replace(/[0-9]/g, "") : inputValue;
}
function validateInputNumbers(e) {
    const input = e.target;
    const inputValue = input.value.trim();
    const validLengthRegex = /^(\d{6}|\d{7}|\d{8})$/;
    const isValidLength = validLengthRegex.test(inputValue);
    input.value = isValidLength ? inputValue : inputValue.replace(/[^0-9]/g, "");
  
}
function PaginationForm()
{

    form.getContainerMain().classList.add('hidden');
    form.getFormMini().classList.add('hidden');
    
    form2.getContainerMain().classList.remove('hidden');
    form2.getFormMini().classList.remove('hidden');
}
function PaginationFormBack()
{
    form2.getContainerMain().classList.add('hidden');
    form2.getFormMini().classList.add('hidden');

    form.getContainerMain().classList.remove('hidden');
    form.getFormMini().classList.remove('hidden');
}
function ChangeColor()
{
    const span = document.getElementById("spanColor");
    span.innerHTML = inputColor.getInputColor().value;
    span.value = inputColor.getInputColor().value;
}
function Register()
{
    form2.getContainerMain().classList.add('hidden');
    form2.getFormMini().classList.add('hidden');

    form.getContainerMain().classList.remove('hidden');
    form.getFormMini().classList.remove('hidden');

    const { name, lastname, idn, tlf, address } = extractionsDatosPeople();
    const Persona = new People(name, lastname, idn, tlf, address);
    const { car, year, brand, modelo, color, url } = extractionsDatosCar();
    const Vehiculo = new Vehicle( brand, modelo, color, car, year, url)
    Vehiculo.asigOwn(Persona);


    lista.Add(Vehiculo);
    showRegister();


    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("ced").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("address").value = "";
    document.getElementById("idCar").value = "";
    document.getElementById("year").value = "";
    const selectBrand = document.getElementById("selectBrand");
    selectBrand.selectedIndex = 0;
    const selectModel = document.getElementById("selectModel");
    selectModel.selectedIndex = 0;
    document.getElementById("url").value = ""; 
}

function extractionsDatosPeople()
{   
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("lastName").value;
    const idn = document.getElementById("ced").value;
    const tlf = document.getElementById("tlf").value;
    const address = document.getElementById("address").value;
    
    return {name, lastname, idn, tlf, address};
}

function extractionsDatosCar()
{   
    const car = document.getElementById("idCar").value;
    const year = document.getElementById("year").value;
    const brand = document.getElementById("selectBrand").value;
    const modelo = document.getElementById("selectModel").value;
    const color = document.getElementById("spanColor").value;
    const url = document.getElementById("url").value;
    
    return {car, year, brand, modelo, color, url};
}

function showRegister()
{
    table.ClearTbody();
    lista.getList().forEach((item, index) =>
        {
            const buttonEditar = new ButtonOptions("buttonEditar", "Editar", "#00B05D", "white",(index+1));
            const buttonDelete = new ButtonOptions("buttonDelete", "Eliminar", "#E03625", "white",(index+1));
            buttonDelete.AddEvent(()=>
                {
                    lista.Delete(buttonDelete.getIdRegister()-1);
                    showRegister();
                    alert("Se ha eliminado correctamente.")
                });
            buttonEditar.AddEvent(() => {
                    editVehicle(buttonEditar.getIdRegister() - 1);
                    register.getButton().classList.add('hidden');
                    update.getButton().classList.remove('hidden');
                  });
                  
            const tr = new Tr((index+1), item);
            tr.AddButtons(buttonEditar, buttonDelete);
            table.Add(tr.getTr(), tr.getMiniTr());
            register.getButton().classList.remove('hidden');
            update.getButton().classList.add('hidden');
        });

}

function editVehicle(index) {
    const vehicle = lista.getList()[index];
    const person = vehicle.getOwn();
    
    document.getElementById("idCar").value = vehicle.getLicensePlate();
    document.getElementById("year").value = vehicle.getYearVehicle();
    document.getElementById("inputColor").value = vehicle.getColour();
    document.getElementById("selectBrand").value = vehicle.getBrand();
    document.getElementById("selectModel").value = vehicle.getModel();
    document.getElementById("url").value = vehicle.getPictureVehicle();
    
    document.getElementById("name").value = person.getName();
    document.getElementById("lastName").value = person.getLastName();
    document.getElementById("ced").value = person.getIdn();
    document.getElementById("address").value = person.getAddress();
    document.getElementById("tlf").value = person.getTlf();
    update.AddEvent((e) => validationFormCar() ? UpdateVehiculo(index) : e.stopImmediatePropagation());
}

function UpdateVehiculo(index)
{
    form2.getContainerMain().classList.add('hidden');
    form2.getFormMini().classList.add('hidden');

    form.getContainerMain().classList.remove('hidden');
    form.getFormMini().classList.remove('hidden');

    const { name, lastname, idn, tlf, address } = extractionsDatosPeople();
    const Persona = new People(name, lastname, idn, tlf, address);
    const { car, year, brand, modelo, color, url } = extractionsDatosCar();
    const Vehiculo = new Vehicle( brand, modelo, color, car, year, url)
    Vehiculo.asigOwn(Persona);


    lista.Update(index, Vehiculo);
    showRegister();


    document.getElementById("name").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("ced").value = "";
    document.getElementById("tlf").value = "";
    document.getElementById("address").value = "";
    document.getElementById("idCar").value = "";
    document.getElementById("year").value = "";
    const selectBrand = document.getElementById("selectBrand");
    selectBrand.selectedIndex = 0;
    const selectModel = document.getElementById("selectModel");
    selectModel.selectedIndex = 0;
    document.getElementById("url").value = ""; 


}