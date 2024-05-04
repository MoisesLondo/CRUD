class Navbar
{
    constructor()
    {
        const navbar = document.createElement("nav");
        navbar.className = 'bg-color shadow-md rounded-sm';
        navbar.innerHTML = 
        `
            <div class="flex flex-col p-3">
                <h1 class='text-3xl'>Lista de Vehiculos</h1>
                <h1 class='text-sm -mt-2 text-color-txt'>Formulario</h1>
            </div>
            <a href="./crud.html">Crud</a>
        `
        document.body.appendChild(navbar).firstChild;
    }
}

const nav = new Navbar();