import ButtonImage from "./ButtonImg.js";
export default class Tr
{
    tr = document.createElement('tr');;
    miniTr = document.createElement('div');
    containerButton = document.createElement('span');
    buttonEditar = new ButtonImage("buttonEditar", "Editar", "#00B05D", "white");
    buttonDelete = new ButtonImage("buttonDelete", "Eliminar", "#E03625", "white");
    constructor(id, vehicle)
    {
        this.containerButton.className = "inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm";
        this.miniTr.className = "bg-gray-200 p-4 rounded-lg shadow";
        this.tr.className = id%2 ? "bg-white" : "bg-gray-50";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                <img class="inline-block h-10 w-15 rounded-md" src="${vehicle.getPictureVehicle()}" alt="minVehiculo"/>
            </td>    
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getLastName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getIdn()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getLicensePlate()}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center ">
                <div class="w-full h-8 rounded-lg bg-[${vehicle.getColour()}]" ></div>
            </td>
            <td class="text-sm text-gray-700 whitespace-nowrap text-center"></td>  
        `;
        this.tr.childNodes.item(13).appendChild(this.containerButton);
        this.miniTr.innerHTML = 
        `
            <div class="flex flex-col gap-1">
                <div>
                    <span class="text-md">${vehicle.getOwn().getName()}</span>
                    <span class="text-sm text-gray-500">${vehicle.getOwn().getLastName()}</span>
                </div>
                <div>
                    <span class="text-lg">${vehicle.getOwn().getIdn()}</span>
                    <span class="text-md text-rose-500">${vehicle.getColour()}</span>
                </div>
                <span class="text-md text-rose-500">${vehicle.getLicensePlate()}</span>
            </div>
        `;
        this.containerButton.appendChild(this.buttonEditar.getButton());
        this.containerButton.appendChild(this.buttonDelete.getButton());
    }
    AddButtons(buttons)
    {
        this.buttonEditar.AddEvent(eventEditar);
        this.buttonDelete.AddEvent(eventEliminar);
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