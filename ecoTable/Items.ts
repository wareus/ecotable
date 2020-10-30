export const getItems: () => Item[] = () => {
    
    return items.map(item => setPrice(item))
        
}

const setPrice = (item:Item) => {
    
    if(item.price) return item
    
    if(item.ingredients.length > 0)
    {
        const totalPrice = item.ingredients.map(ingredient => {
            const item = setPrice(findItem(ingredient))
            const price = item.price || 0
            return price * ingredient.number
        }).reduce((total, price) => total+price, 0)

        const labor = item.labor || 0
        const extra = item.extra || 0

        return {...item, price: totalPrice + labor + extra}
    }

    return {...item, info:'Missing price', price: 0}
}

const findItem = (ingredient:Ingredient) =>{
    return items.filter(item => item.name === ingredient.name)[0]
}

interface Item
{
    name:string,
    price?:number
    ingredients: Ingredient []
    info?: string
    labor?: number,
    extra?: number
}

interface Ingredient
{
    name:string,
    number:number
}

const items = [
    {
        name: 'Metallurgy Research Paper Basic',
        price: 175,
        ingredients: [],

    },
    {
        name: 'Fried Vegetable Tag',
        price: 40,
        ingredients: [],

    },
    {
        name: 'Campfire Salad Tag',
        price: 35,
        ingredients: [],

    },
    {
        name: 'Leather Hide',
        price: 40,
        ingredients: [],

    },
    {
        name: 'Crushed Stone',
        price: 20,
        ingredients: [],

    },
    {
        name: 'Sand',
        price: 20,
        ingredients: [],
    },
    {
        name: 'Clay',
        price: 15,
        ingredients: [],
    },
    {
        name: 'Mortar',
        price: 30,
        ingredients: [],
    },
    {
        name: 'Stone',
        price: 5,
        ingredients: [],
    },
    {
        name: 'Plant Fibers',
        price: 1,
        ingredients: [],
    },
    {
        name: 'Wood',
        price: 7,
        ingredients: [],
    },
    {
        name: 'Crushed Iron Ore',
        price: 50,
        ingredients: [],
    },
    {
        name: 'Basic Research',
        price: 350,
        ingredients: [],
    },
    {
        name: 'Cast Iron Stove',
        ingredients: [{name: 'Iron Bar', number:8}, {name: 'Lumber', number:8}],
        labor: 500
    },
    {
        name: 'Iron Bar',
        ingredients: [{name: 'Iron Concentrate', number:0.66}],
        labor: 50,
        extra: 50
    },
    {
        name: 'Iron Concentrate',
        ingredients: [{name: 'Crushed Iron Ore', number:5}],
        labor: 40,
        extra: 50
    },
    {
        name: 'Lumber',
        ingredients: [{name: 'Nail', number:4}, {name: 'HewnLog', number:4}],
        labor: 60,
    },
    {
        name: 'HewnLog',
        ingredients: [{name: 'Wood', number:2}],
        labor: 30,
    },
    {
        name: 'Nail',
        ingredients: [{name: 'Iron Bar', number:0.0625}],
        labor: 5,
    },
    {
        name: 'Hand Plow',
        ingredients: [{name: 'Iron Bar', number:10}, {name: 'HewnLog', number:10}, {name: 'Wood Board', number:50}, {name: 'Wooden Wheel', number:1}],
        labor: 100,
    },
    {
        name: 'Wood Board',
        ingredients: [{name: 'HewnLog', number:1}],
        labor: 60,
    },
    {
        name: 'Wooden Wheel',
        ingredients: [{name: 'HewnLog', number:4}],
        labor: 60,
    },
    {
        name: 'Basic Upgrade 4',
        ingredients: [{name: 'Wooden Wheel', number:20}, {name: 'Plant Fibers', number:120}, {name: 'Basic Upgrade 3', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 3',
        ingredients: [{name: 'Wood Board', number:20}, {name: 'Plant Fibers', number:80}, {name: 'Basic Upgrade 2', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 2',
        ingredients: [{name: 'Mortar', number:20}, {name: 'Mortared Stone', number:20}, {name: 'Basic Upgrade 1', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 1',
        ingredients: [{name: 'HewnLog', number:40}],
        labor: 100,
    },
    {
        name: 'Mortared Stone',
        ingredients: [{name: 'Mortar', number:1},{name: 'Stone', number:4}],
        labor: 30,
    },
    {
        name: 'Powered Cart',
        ingredients: [{name: 'Cloth', number:20},{name: 'Wood Board', number:30}, {name: 'Cast Iron Stove', number:1},{name: 'Iron Wheel', number:3}],
        labor: 200,
    },
    {
        name: 'Cloth',
        ingredients: [{name: 'Plant Fibers', number:6}],
        labor: 50,
    },
    {
        name: 'Iron Wheel',
        ingredients: [{name: 'Iron Bar', number:6}],
        labor: 160,
    },
    {
        name: 'Pottery Skill Book',
        ingredients: [{name: 'Geology Research Paper Basic', number:10}, {name: 'Geology Research Paper Advanced', number:5},{name: 'Engineering Research Paper Advanced', number:10}, {name: 'Basic Research', number:10}],
        labor: 4000,
    },
    {
        name: 'Geology Research Paper Basic',
        ingredients: [{name: 'Stone', number:30}],
        labor: 50,
    },
    {
        name: 'Geology Research Paper Advanced',
        ingredients: [{name: 'Mortared Stone', number:20}],
        labor: 200,
    },
    {
        name: 'Engineering Research Paper Advanced',
        ingredients: [{name: 'Waterwheel', number:2}, {name: 'Windmill', number:2}],
        labor: 200,
    },
    {
        name: 'Waterwheel',
        ingredients: [{name: 'HewnLog', number:10}, {name: 'Wood Board', number:5}],
        labor: 300,
    },
    {
        name: 'Windmill',
        ingredients: [{name: 'Cloth', number:16}, {name: 'HewnLog', number:15}],
        labor: 300,
    },
    {
        name: 'Iron Rock Drill',
        ingredients: [{name: 'Iron Bar', number:4}, {name: 'Wood Board', number:4}],
        labor: 250,
    },
    {
        name: 'Brick',
        ingredients: [{name: 'Clay', number:1}, {name: 'Mortar', number:4}],
        labor: 40,
    },
    {
        name: 'Glass',
        ingredients: [{name: 'Sand', number:3}],
        labor: 50,
    },
    {
        name: 'Iron Plate',
        ingredients: [{name: 'Iron Bar', number:1}],
        labor: 100,
    },
    {
        name: 'Iron Gear',
        ingredients: [{name: 'Iron Bar', number:1}],
        labor: 120,
    },
    {
        name: 'Screws',
        ingredients: [{name: 'Iron Bar', number:0.25}],
        labor: 35,
    },
    {
        name: 'Iron Piston',
        ingredients: [{name: 'Iron Pipe', number:2}, {name: 'Iron Bar', number:2}],
        labor: 100,
    },
    {
        name: 'Rocker Box',
        ingredients: [{name: 'Wood Board', number:10}, {name: 'Wood', number:6}],
        labor: 100,
    },
    {
        name: 'Sawmill',
        ingredients: [{name: 'Iron Bar', number:4}, {name: 'Wood', number:16}, {name: 'Iron Saw Blade', number:1}],
        labor: 1000,
    },
    {
        name: 'Iron Saw Blade',
        ingredients: [{name: 'Iron Bar', number:6}],
        labor: 100,
    },
    {
        name: 'Iron Pipe',
        ingredients: [{name: 'Iron Bar', number:2}],
        labor: 20,
    },
    {
        name: 'Advanced Upgrade 1',
        ingredients: [{name: 'Brick', number:20}, {name: 'Clay', number:12}],
        labor: 150,
    },
    {
        name: 'Advanced Upgrade 2',
        ingredients: [{name: 'Glass', number:20}, {name: 'Sand', number:10}, {name: 'Advanced Upgrade 1', number:1}],
        labor: 150,
    },
    {
        name: 'Advanced Upgrade 3',
        ingredients: [{name: 'Nail', number:10}, {name: 'Iron Bar', number:6}, {name: 'Advanced Upgrade 2', number:1}],
        labor: 150,
    },
    {
        name: 'Advanced Upgrade 4',
        ingredients: [{name: 'Iron Piston', number:8}, {name: 'Iron Plate', number:6},{name: 'Lumber', number:12}, {name: 'Advanced Upgrade 3', number:1}],
        labor: 150,
    },
    {
        name: 'Stamp Mill',
        ingredients: [{name: 'Iron Bar', number:5}, {name: 'Screws', number:14},{name: 'Iron Gear', number:8}, {name: 'Wood Board', number:14}],
        labor: 200,
    },
    {
        name: 'Stone Road',
        ingredients: [{name: 'Crushed Stone', number:2}, {name: 'Mortar', number:3},],
        labor: 100,
    },
    {
        name: 'Boiler',
        ingredients: [{name: 'Iron Plate', number:15}, {name: 'Screws', number:10}],
        labor: 300,
    },
    {
        name: 'Portable Steam Engine',
        ingredients: [{name: 'Iron Plate', number:12}, {name: 'Screws', number:18}, {name: 'Iron Piston', number:8}, {name: 'Boiler', number:3}],
        labor: 2000,
    },
    {
        name: 'Steam Truck',
        ingredients: [{name: 'Iron Plate', number:12}, {name: 'Screws', number:24}, {name: 'Iron Pipe', number:8}, {name: 'Leather Hide', number:3}, {name: 'Lumber', number:30}, {name: 'Portable Steam Engine', number:1}, {name: 'Iron Wheel', number:4}, {name: 'Iron Axle', number:1}],
        labor: 1000,
    },
    {
        name: 'Iron Axle',
        ingredients: [{name: 'Iron Bar', number:2}],
        labor: 120,
    },
    {
        name: 'Culinary Research Paper Basic',
        ingredients: [{name: 'Campfire Salad Tag', number:5}, {name: 'Campfire Salad Tag', number:21}],
        labor: 50,
    },
    {
        name: 'Culinary Research Paper Basic',
        ingredients: [{name: 'Culinary Research Paper Basic', number:10}, {name: 'Metallurgy Research Paper Basic', number:5}, {name: 'Geology Research Paper Basic', number:10},],
        labor: 4000,
    },




] as Item[]

