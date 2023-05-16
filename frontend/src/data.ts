import { Image } from "./assets";
import { ProductType, Step } from "./utils/type";

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

export const ProductTrandingData:ProductType[] =[
    {
        id:1,
        image: Image.proTran1,
        name: 'Leather Gloves',
        des:'Perfect mint green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '42',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:2,
        image: Image.proTran2,
        name: 'Manhattan Tou WRT',
        des:'New design 2023',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '30',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:3,
        image: Image.proTran3,
        name: 'Ella Leather Tote',
        des:'Cream pink Tote',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '145',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:4,
        image: Image.proTran4,
        name: 'Jums Rope Kids',
        des:'Classic green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '68',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:5,
        image: Image.proTran5,
        name: 'Jums Rope Kids',
        des:'Classic green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '68',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:6,
        image: Image.proTran6,
        name: 'Jums Rope Kids',
        des:'Classic green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '68',
        revirew: '98',
        rating:'4.9'
    },
    {
        id:7,
        image: Image.proTran8,
        name: 'Jums Rope Kids',
        des:'Classic green',
        type:['red','black', 'blue','lawngreen', 'pink'],
        price: '68',
        revirew: '98',
        rating:'4.9'
    },
]

export const StepData:  Step[]=[
    {
        img:Image.HIW1img,
        title: 'Filter & Discover',
        step: 'Step 1',
        des:'Smart filtering and suggestions make it easy to find'
    },
    {
        img:Image.HIW2img,
        title: 'Add to bag',
        step: 'Step 2',
        des:'Easily select the correct items and add them to the cart'
    },
    {
        img:Image.HIW3img,
        title: 'Fast shipping',
        step: 'Step 3',
        des:'The carrier will confirm and ship quickly to you'
    },

    {
        img:Image.HIW4img,
        title: 'Enjoy the product',
        step: 'Step 4',
        des:'Have fun and enjoy your 5-star quality products'
    },
]