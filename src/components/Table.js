import Tr from './Tr.js';

class Table 
{
    list = [];
    table = document.createElement('table');
    container = document.createElement('div');
    containerMiniTr = document.createElement('div');
    containerMain = document.createElement('div');
    constructor()
    {
        this.containerMain.className = "flex flex-col items-center";
        this.container.className = "w-11/12 rounded-lg shadow hidden md:block";
        this.containerMiniTr.className = "w-11/12 grid grid-cols-1 gap-4 md:hidden";
        this.table.className = "w-full";
        this.table.innerHTML= 
        `
            <thead class="bg-gray-50 border-b-2 border-gray-200">
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 1</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 2</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 3</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 4</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 5</th>
            </thead>
            <tbody class="divide-y divide-gray-100"></tbody>
        `;
        this.container.appendChild(this.table);
        this.containerMain.appendChild(this.container);
        this.containerMain.appendChild(this.containerMiniTr);
        document.body.appendChild(this.containerMain);
    }

    Add(obj, obj1)
    {
        this.table.childNodes.item(3).appendChild(obj);
        this.containerMiniTr.appendChild(obj1)
    }
}

const table = new Table();
const tr = new Tr(1, "Luis");
table.Add(tr.getTr(), tr.getMiniTr());
const tr1 = new Tr(2, "Isidoro");
table.Add(tr1.getTr(), tr1.getMiniTr());
const tr2 = new Tr(3, "MiNombleEsBo");
table.Add(tr2.getTr(), tr2.getMiniTr());
