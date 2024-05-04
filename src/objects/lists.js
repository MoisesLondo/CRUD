class List{

    constructor(){
        this.list = []
        this.id= 1;
    }
    
    Add(tr){
        this.list.push(tr)
        this.id+= 1;
    }

    getIndex(i)
    {
        return this.list.indexOf(i);
    }
    getList()
    {
        return this.list;
    }

    getId()
    {
        return this.id;
    }
}

export const list = new List()