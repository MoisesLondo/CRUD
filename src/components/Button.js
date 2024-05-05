export default class Button
{
    containerButton = document.createElement('div');
    constructor(id, buttonName)
    {
        this.containerButton.className = "w-full";
        this.containerButton.innerHTML = 
        `
            <button id="${id}" class="w-full p-2 bg-rose-400 rounded-lg text-white hover:bg-rose-600 transform-all duration-75 ease-in-out:hover">${buttonName}</button>
        `;
    }
    getButton()
    {
        return this.containerButton;
    }
}