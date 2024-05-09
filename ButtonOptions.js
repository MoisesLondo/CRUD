export default class ButtonOptions
{
    button = document.createElement('button');
    idRegister;
    constructor(id, name, bg, colorText, idRegister)
    {
        this.idRegister = idRegister;
        this.button.id = id;
        this.button.className = `inline-block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[${bg}] hover:text-[${colorText}] focus:relative`;
        this.button.innerHTML = name;
    }
    AddEvent(event)
    {
        this.button.onclick = event;
    }
    getButton()
    {
        return this.button;
    }
    getIdRegister()
    {
        return this.idRegister;
    }

}
