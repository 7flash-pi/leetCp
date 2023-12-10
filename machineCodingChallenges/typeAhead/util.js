import { FRUITS } from './data.js'

export const getSuggestions = async(keyword)=>{
    const result=FRUITS.filter((item)=> item.toLocaleLowerCase().includes(keyword))

    return new Promise((res) =>{
        setTimeout(() =>res(result),1000);
    });
}