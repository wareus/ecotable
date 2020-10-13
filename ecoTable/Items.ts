export const getItems: () => Item[] = () => {
    
    return [
        {
        name: 'test',
        price: 12
    },
    {
        name: 'test2',
        price: 121
    }
] as Item[]
}

interface Item
{
    name:string,
    price:number

}