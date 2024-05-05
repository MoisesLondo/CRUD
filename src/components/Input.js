export default class Input
{
    container = document.createElement('div');
    constructor(id, labelName, type, placeholder)
    {
        this.container.className = "relative w-full flex flex-col";
        this.container.innerHTML = 
        `
            <input required class="
            rounded-lg border-2 border-rose-300 
            py-2 px-4 outline-none focus:border-rose-400 duration-100 peer   
            focus:ring-1 ring-rose-400 bg-inherit text-m font-medium shadow-sm
            id=${id} type=${type}"/>

            <span class="
            tracking-wider absolute left-0 top-3 px-3 text-md 
            peer-focus:text-rose-400 pointer-events-none duration-100 
            peer-focus:text-sm peer-focus:-translate-y-5 bg-white ml-2
            peer-valid:text-sm peer-valid:-translate-y-5
            text-gray-500">${labelName} |
            <span class="text-xs italic">${placeholder}</span>
            </span>

        `;
    }

    getInput()
    {
        return this.container;
    }

}