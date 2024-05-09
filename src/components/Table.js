class Table 
{
    table = document.createElement('table');
    container = document.createElement('div');
    containerMiniTr = document.createElement('div');
    containerMain = document.createElement('div');
    tbody = document.createElement('tbody');
    constructor()
    {
        const titulo = document.createElement('span');
        titulo.innerHTML = "Lista de Vehiculos";
        titulo.className = "text-2xl text-[#EC5853] tracking-wider";
        this.containerMain.className = "w-4/6 flex flex-col items-center gap-5";
        this.container.className = "w-11/12 rounded-lg shadow-md hidden md:block bg-[#FF9E8F]";
        this.containerMiniTr.className = "w-11/12 grid grid-cols-1 gap-4 md:hidden";
        this.tbody.className = "divide-y divide-gray-100";
        this.table.className = "w-full";
        this.table.innerHTML= 
        `
            <thead class="w-full bg-transparent border-b-2 border-gray-200">
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Imagen</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Nombre</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Apellido</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Cedula</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Placa</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Color</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-center text-white">Acciones</th>
            </thead>
        `;
        this.table.appendChild(this.tbody);
        this.containerMain.appendChild(titulo);
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
    ClearTbody()
    {
        this.tbody.innerHTML = "";
    }
}

const table = new Table()


