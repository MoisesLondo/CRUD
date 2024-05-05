export default class Input
{
    container = document.createElement('div');
    constructor(id, labelName, type, pattern)
    {
        this.container.className = "w-full flex flex-col gap-1";
        this.container.innerHTML = 
        `
            <label class="text-left text-lg" for=${id}>${labelName}</label>
            <input class="rounded-lg ring-1 ring-gray-300 pl-2" id=${id} type=${type} pattern=${pattern}/>
        `;
    }

    getInput()
    {
        return this.container;
    }

}