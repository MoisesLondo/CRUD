export default class Tr
{
    tr;
    miniTr;
    constructor(id, vehicle)
    {
        this.tr = document.createElement('tr');
        this.miniTr = document.createElement('div');
        this.miniTr.className = "bg-gray-200 p-4 rounded-lg shadow";
        this.tr.className = id%2 ? "bg-white" : "bg-gray-50";
        this.tr.innerHTML = 
        `
            <td class="p-3 text-sm text-gray-700 whitespace-nowrap text-center">
                <img class="inline-block h-10 w-15 rounded-xl" src="${vehicle.getPictureVehicle()}" alt="minVehiculo"/>
            </td>    
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getLastName()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getOwn().getIdn()}</td>
            <td class="p-3 text-sm font-bold text-gray-700 whitespace-nowrap text-center">${vehicle.getLicensePlate()}</td>
            <td class="flex flex-col items-center p-3 text-sm text-gray-700 whitespace-nowrap text-center ">
                <div class="w-9 h-9 rounded-full bg-[${vehicle.getColour()}]" ></div>
            </td>
        `;
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