
import { getSuggestions} from './util.js'


const inputBox = document.getElementById('search-input');
const suggestionBox =document.getElementById('suggestion-listWrapper')

const handlSearch = async(keyword) =>{
    const res=await getSuggestions(keyword)
    if(res.length){
        suggestionBox.classList.add('suggestion-visible')
        suggestionBox.innerHTML='hello'
    }
}

const handleInputChange = (event) => {
 const searchValue= event.target.value
 handlSearch(searchValue)
}

(()=> {
    inputBox.addEventListener('input',handleInputChange)
})();
