export default class Color
{
    containerMain = document.createElement('div');
    span = document.createElement('span');
    inputColor = document.createElement('input');
    constructor(id, idSpan)
    {
        this.containerMain.className = "w-full flex flex-col";
        const containerColor = document.createElement('div');
        containerColor.className = "w-full flex flex-row gap-2 items-center justify-center";
        this.inputColor.type= 'color';
        this.span.id = idSpan;
        this.span.className = "w-full text-m text-gray-500 border border-rose-300 px-3 py-2 rounded-lg";
        this.span.innerHTML = this.inputColor.value;
        this.inputColor.id = id;
        this.inputColor.className = "appearance-none w-2/12 bg-transparent";
        this.containerMain.innerHTML = 
        `
            <label for="${id}" class="block ml-1 text-lg text-rose-500">Color</label>
        `;
        containerColor.appendChild(this.inputColor);
        containerColor.appendChild(this.span);
        this.containerMain.appendChild(containerColor);
    }
    AddEvent(event)
    {
        this.inputColor.addEventListener('change', event)
    }
    getInput()
    {
        return this.containerMain;
    }

    getInputColor()
    {
        return this.inputColor;
    }
}