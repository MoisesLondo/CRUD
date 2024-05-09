export default class ButtonImage
{
    button = document.createElement('button');
    constructor(id, name, bg, colorText)
    {
        this.button.id = id;
        this.button.className = `inline-block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-[${bg}] hover:text-[${colorText}] focus:relative`;
        this.button.innerHTML = name;
    }
    AddEvent(event)
    {
        this.button.addEventListener('click', event)
    }
    getButton()
    {
        return this.button;
    }

}