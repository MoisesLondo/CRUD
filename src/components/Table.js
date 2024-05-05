class Table 
{
    table = document.createElement('table');
    container = document.createElement('div');
    containerMiniTr = document.createElement('div');
    containerMain = document.createElement('div');
    constructor()
    {
        this.containerMain.className = "w-4/6 flex flex-col items-center";
        this.container.className = "w-11/12 rounded-lg shadow hidden md:block";
        this.containerMiniTr.className = "w-11/12 grid grid-cols-1 gap-4 md:hidden";
        this.table.className = "w-full";
        this.table.innerHTML= 
        `
            <thead class="w-full bg-gray-50 border-b-2 border-gray-200 ">
                <th class="p-3 text-sm font-semibold tracking-wide text-center">Nombre</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center">Apellido</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center">Cedula</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center">Telefono</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center">Direccion</th>
            </thead>
            <tbody class="divide-y divide-gray-100"></tbody>
        `;
        this.container.appendChild(this.table);
        this.containerMain.appendChild(this.container);
        document.getElementById("container-main").appendChild(this.containerMiniTr);
        document.getElementById("container-wrapped").appendChild(this.containerMain);
    }

    Add(obj, obj1)
    {
        this.table.childNodes.item(3).appendChild(obj);
        this.containerMiniTr.appendChild(obj1)
    }
}

const table = new Table()


