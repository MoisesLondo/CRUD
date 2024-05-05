import Tr from "./Tr.js";
class Table 
{
    table = document.createElement('table');
    container = document.createElement('div');
    containerMiniTr = document.createElement('div');
    containerMain = document.createElement('div');
    constructor()
    {
        this.containerMain.className = "w-auto flex flex-col items-center p-1";
        this.container.className = "w-11/12 rounded-lg shadow hidden md:block";
        this.containerMiniTr.className = "w-11/12 grid grid-cols-1 gap-4 md:hidden";
        this.table.className = "w-full table";
        this.table.innerHTML= 
        `
            <thead class="bg-gray-50 border-b-2 border-gray-200 table-header-group">
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Nombre</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Apellido</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Cedula</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Telefono</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Direccion</th>
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

const tr = new Tr(1, "Isidoro", "Navarro", "21.383.923", "0412-2903142", "Malibu");
table.Add(tr.getTr(), tr.getMiniTr());
