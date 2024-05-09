class Navbar
{
    constructor()
    {
        const navbar = document.createElement("nav");
        navbar.className = 'bg-[#FFBFAF] shadow-md shadow-[#FF9E8F] rounded-sm';
        navbar.innerHTML = 
        `
            <div class="flex flex-col p-3">
                <h1 class='ml-5 text-4xl tracking-wider text-white'>Lista de Vehiculos</h1>
                <h1 class='ml-6 text-md -mt-1 font-bold text-[#C63637]'>Formulario</h1>
            </div>
        `;
        document.body.appendChild(navbar).firstChild;
    }
}

const nav = new Navbar();