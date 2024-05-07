export default class Select
{
    containerMain = document.createElement('div');
    constructor(id, nameSelect, nameLabel, optionDefault, options)
    {   
        this.containerMain.className = 'w-full flex flex-col';
        const select = document.createElement('select');
        const label = document.createElement('label');
        select.id = id;
        select.name = nameSelect;
        select.className = "w-full text-sm border border-rose-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-rose-500 focus:ring-1 ring-rose-500";
        label.for = id;
        label.innerHTML = nameLabel;
        label.className = "ml-1 block text-lg text-rose-500";
        select.innerHTML = 
        `
            <option value="">Por favor ingrese ${optionDefault}</option>
        `;
        options.forEach((item) =>
        {
            const option = document.createElement('option');
            option.value = item.toLowerCase();
            option.innerHTML = item;
            select.appendChild(option);
        });
        this.containerMain.appendChild(label);
        this.containerMain.appendChild(select);
    }
    getInput()
    {
        return this.containerMain;
    }
}