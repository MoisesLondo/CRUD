export default class Lista 
{
    list = [];
    Add(obj)
    {
        this.list.push(obj);
    }
    Delete(index)
    {
        this.list.splice(index, 1);
    }
    Get(index)
    {
        return this.list.indexOf(index);
    }
    getList()
    {
        return this.list;
    }
}