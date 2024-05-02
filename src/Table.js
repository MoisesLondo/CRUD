class Table 
{
    constructor()
    {
        const table = document.createElement('table');
        const container = document.createElement('div');
        container.className = "flex flex-col gap-2 overflow-auto rounded-lg shadow m-9 hidden md:block";
        table.className = "w-full";
        table.innerHTML= 
        `
            <thead class="bg-gray-50 border-b-2 border-gray-200">
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 1</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 2</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 3</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 4</th>
                <th class="p-3 text-sm font-semibold tracking-wide text-left">Titulo 5</th>
            </thead>
            <tbody class="divide-y divide-gray-100">
                <tr class="bg-white">
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 1</td>    
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 2</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 3</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 4</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 5</td>
                </tr>
                <tr class="bg-gray-50">
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 1</td>    
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 2</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 3</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 4</td>
                    <td class="p-3 text-sm text-gray-700 whitespace-nowrap">Contenido 5</td>
                </tr>
            </tbody>
        `;
        container.appendChild(table);
        document.body.appendChild(container);
    }
}
const table = new Table();