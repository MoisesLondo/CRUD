export default class People
{
    constructor(name, lastName, idn, tlf, address)
    {
        this.name = name;
        this.lastName = lastName;
        this.idn = idn;
        this.tlf = tlf;
        this.address = address;
    }

    getName()
    {
        return this.name;
    }
    getLastName()
    {
        return this.lastName;
    }
    getIdn()
    {
        return this.idn;
    }
    getTlf()
    {
        return this.tlf;
    }
    getAddress()
    {
        return this.address;
    }
}