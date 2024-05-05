export default class Tr
{
    tr;
    miniTr;
    constructor(id, name, lastName, idn, tlf, address)
    {
        this.tr = document.createElement('tr');
        this.miniTr = document.createElement('div');
        this.miniTr.className = "bg-gray-200 p-4 rounded-lg shadow";
        this.tr.className = id%2 ? "bg-white" : "bg-gray-50";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">${name}</td>    
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">${lastName}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">${idn}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">${tlf}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">${address}</td>
        `;
        this.miniTr.innerHTML = 
        `
            <div class="flex flex-col gap-1">
                <div>
                    <span class="text-md">${name}</span>
                    <span class="text-sm text-gray-500">${lastName}</span>
                </div>
                <div>
                    <span class="text-lg">${idn}</span>
                    <span class="text-md text-rose-500">${tlf}</span>
                </div>
                <span class="text-md text-rose-500">${address}</span>
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