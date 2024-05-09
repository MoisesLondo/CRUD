export default class Tr
{
    id;
    tr = document.createElement('tr');
    miniTr = document.createElement('div');
    containerButton = document.createElement('span');
    containerMiniButton = document.createElement('span');
    constructor(id, vehicle)
    {
        this.id = id;
        this.containerButton.className = "inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm";
        this.containerMiniButton.className = "inline-flex -space-x-px overflow-hidden rounded-md border bg-white shadow-sm";
        this.miniTr.className = "bg-gray-200 p-4 rounded-lg shadow";
        this.tr.className = id%2 ? "bg-white" : "bg-[#FFDFD0]";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                <img class="inline-block h-10 w-15 rounded-md ring-1 ring-white" src="${vehicle.getPictureVehicle()}" alt="minVehiculo"/>
            </td>    
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getLastName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getIdn()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getLicensePlate()}</td>
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center ">
                <div class="w-full ring-2 ring-white h-8 rounded-lg bg-[${vehicle.getColour()}]" ></div>
            </td>
            <td class="text-sm text-gray-700 whitespace-nowrap text-center"></td>  
        `;
        this.tr.childNodes.item(13).appendChild(this.containerButton);
        console.log(this.containerButton);
        this.miniTr.innerHTML = 
        `
            <div class="flex flex-row justify-between">
                <div>
                    <h3 class="text-lg font-bold text-gray-900 sm:text-xl">
                        Vehiculo ${this.id}
                    </h3>
                
                    <p class="mt-1 text-xs font-medium text-gray-600">Nombre y Apellido: ${vehicle.getOwn().getName()} ${vehicle.getOwn().getLastName()}</p>
                    <p class="mt-1 text-xs font-medium text-gray-600">Cedula: ${vehicle.getOwn().getIdn()} </p>
                </div>
            
                <div class="flex flex-row gap-5">
                    <div class="ml-5 block shrink-0">
                        <img
                            alt=""
                            src="${vehicle.getPictureVehicle()}"
                            class="size-16 rounded-lg object-cover shadow-sm ring-2 ring-white" 
                        />
                    </div>
                    <div class="block shrink-0">
                        <div class="size-16 rounded-lg object-cover shadow-sm bg-[${vehicle.getColour()}] border-2 border-white">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4">
                <p class="text-pretty text-sm text-gray-500">
                    Placa: ${vehicle.getLicensePlate()}
                </p>
            </div>
            
            <dl class="mt-6 flex gap-4 sm:gap-6">
                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">${vehicle.getBrand()}</dt>
                    <dd class="text-xs text-gray-500">Marca</dd>
                </div>
            
                <div class="flex flex-col-reverse">
                    <dt class="text-sm font-medium text-gray-600">${vehicle.getModel()}</dt>
                    <dd class="text-xs text-gray-500">Modelo</dd>
                </div>
            </dl>
            <div class="mt-5"></div>
        `;
        this.miniTr.childNodes.item(7).appendChild(this.containerMiniButton);
    }
    AddButtons(buttonEditar, buttonDelete)
    {
        this.containerButton.appendChild(buttonEditar.getButton());
        this.containerButton.appendChild(buttonDelete.getButton());
    }
    AddButtonsMini(buttonEditar, buttonDelete)
    {
        this.containerMiniButton.appendChild(buttonEditar.getButton());
        this.containerMiniButton.appendChild(buttonDelete.getButton());
    }
    getTr()
    {
        return this.tr;
    }
    getMiniTr()
    {
        return this.miniTr;
    }
    getId()
    {
        return this.id;
    }

}