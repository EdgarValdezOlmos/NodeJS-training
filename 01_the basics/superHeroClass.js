class superHeroClass
{
    constructor(name)
    {
        this.name = name;
    }

    getName()
    {
        return this.name;
    }

    setName(name)
    {
        this.name = name;
    }
}


//exportar una instancia de la clase
module.exports = new superHeroClass("Batibubis");