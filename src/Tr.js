export default class Tr
{
    tr;
    miniTr;
    constructor(id, name)
    {
        this.tr = document.createElement('tr');
        this.miniTr = document.createElement('div');
        this.miniTr.className = "bg-gray-200 p-4 rounded-lg shadow";
        this.tr.className = id%2 ? "bg-white" : "bg-gray-50";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">${name}</td>    
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 2</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 3</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 4</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 5</td>
        `;
        this.miniTr.innerHTML = 
        `
            <div class="flex flex-col gap-1">
                <div>
                    <span class="text-md">${name}</span>
                    <span class="text-sm text-gray-500">Contenido 2</span>
                </div>
                <div>
                    <span class="text-lg">Contenido 3</span>
                    <span class="text-md text-rose-500">Contenido 4</span>
                </div>
                <span class="text-2xl text-rose-500">Contenido 5</span>
            </div>
        `;
    }

    getTr()
    {
        return this.tr;
    }
    getMiniTr()
    {
        return this.miniTr;
    }

}