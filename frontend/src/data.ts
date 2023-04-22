import { Image } from "./assets";
import { ProductType } from "./utils/type";

export const ProductData:ProductType[] =[
    {
        id:1,
        image: Image.product_1,
        name: 'Leather Gloves',
        des:'Perfect mint green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '42',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:2,
        image: Image.product_2,
        name: 'Manhattan Tou WRT',
        des:'New design 2023',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '30',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:3,
        image: Image.product_3,
        name: 'Ella Leather Tote',
        des:'Cream pink Tote',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '145',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:4,
        image: Image.product_4,
        name: 'Jums Rope Kids',
        des:'Classic green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '68',
        revirew: '98',
        rating:'4.9'
    },
]