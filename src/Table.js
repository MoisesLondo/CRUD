import Tr from './Tr.js';

class Table 
{
    list = [];
    table = document.createElement('table');
    container = document.createElement('div');
    containerMain = document.createElement('div');
    constructor()
    {
        this.containerMain.className = "flex flex-col items-center";
        this.container.className = "w-9/12 rounded-lg shadow hidden sm:block";
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
        document.body.appendChild(this.containerMain);
    }

    Add(obj)
    {
        this.table.childNodes.item(3).appendChild(obj);
    }
}

const table = new Table();
const tr = new Tr(1, "Luis");
table.Add(tr.getTr());
const tr1 = new Tr(2, "Isidoro");
table.Add(tr1.getTr());
const tr2 = new Tr(3, "MiNombleEsBo");
table.Add(tr2.getTr());
