class Form 
{
    constructor()
    {
        const form = document.createElement("form");
        form.className = "flex flex-col gap-2";
        form.innerHTML = 
        `
            <div>
                <label class=""> Nombre </label>
                <input type="text" id="name" pattern="[A-Za-zñÑ]+" required />
            </div>
            <div>
                <label > Telefono </label>
                <input type="tel" id="tel" />
            </div>
            <div>
                <label> Cédula </label>
                <input type="text" id="ced" />
            </div>
            <div>
                <label for="select_id">Marca del Vehículo</label>
                <select id="select_id" name="select_name">
                    <option value="valor1">Toyota</option>
                    <option value="valor2">Chevrolet</option>
                    <option value="valor3">Ford</option>
                </select>
            </div>
            <div>
                <label for="modelo_id">Marca del Vehículo</label>
                <select id="modelo_id" name="select_name">
                    <option value="valor1">Toyota</option>
                    <option value="valor2">Chevrolet</option>
                    <option value="valor3">Ford</option>
                </select>
            </div>
        `;
        document.body.appendChild(form);
    }   
}

const form = new Form();
