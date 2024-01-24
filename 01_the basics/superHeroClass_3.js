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

//exportar la clase
module.exports = superHeroClass;