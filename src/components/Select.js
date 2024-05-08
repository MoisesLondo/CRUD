export default class Select
{
    containerMain = document.createElement('div');
    select = document.createElement('select');
    optionDefault = document.createElement('option');
    constructor(id, nameSelect, nameLabel, optionDefault)
    {   
        this.containerMain.className = 'w-full flex flex-col';
        const label = document.createElement('label');
        this.select.id = id;
        this.select.name = nameSelect;
        this.select.className = "w-full text-sm border border-rose-300 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-rose-500 focus:ring-1 ring-rose-500";
        label.for = id;
        label.innerHTML = nameLabel;
        label.className = "ml-1 block text-lg text-rose-500";
        this.optionDefault.innerHTML = `Por favor ingrese ${optionDefault}`;
        this.select.appendChild(this.optionDefault);
        this.containerMain.appendChild(label);
        this.containerMain.appendChild(this.select);
    }
    AddEvent(event)
    {
        this.select.addEventListener('change', event);
    }
    AddOptions(options)
    {
        this.select.innerHTML = "";
        this.select.appendChild(this.optionDefault);
        options.forEach((item) =>
        {
            const option = document.createElement('option');
            option.value = item.toLowerCase();
            option.innerHTML = item;
            this.select.appendChild(option);
        });
    }
    getSelect()
    {
        return this.select;
    }
    getInput()
    {
        return this.containerMain;
    }
}