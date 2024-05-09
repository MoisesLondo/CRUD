export default class Button
{
    containerButton = document.createElement('div');
    button = document.createElement('button');
    constructor(id, buttonName)
    {
        this.containerButton.className = "w-full";
        this.button.id = id;
        this.button.innerHTML = buttonName;
        this.button.className = "w-full p-2 bg-rose-400 rounded-lg text-white hover:bg-rose-600 transform-all duration-75 ease-in-out:hover";
        this.containerButton.appendChild(this.button);
    }
    getButton()
    {
        return this.containerButton;
    }
    AddEvent(event)
    {
        this.button.onclick = event;
    }
}