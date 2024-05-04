export default class Tr
{
    tr;
    constructor(id, name)
    {
        this.tr = document.createElement('tr');
        this.tr.className = id%2 ? "bg-white" : "bg-gray-50";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">${name}</td>    
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 2</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 3</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 4</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 5</td>
        `;
    }

    getTr()
    {
        return this.tr;
    }
}