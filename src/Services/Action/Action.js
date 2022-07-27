import {Add} from '../Constent'
import {Remove} from '../Constent'
export let addTocart = (data) =>{
    console.log(data);
    return {
        type:Add,
        data:data
    }
}

export let removeTocart = (data) =>{
    return {
        type:Remove,
    }
}