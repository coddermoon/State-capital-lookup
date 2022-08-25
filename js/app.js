const search = document.getElementById('search')
const matchLists = document.getElementById('match-lists')

const  searchStates = async value=>{

    // fatch data

   const res = await fetch('./../data/data.json')
   const states = await res.json()
   console.log(states)
 
 
  

//   check match or not 



}


search.addEventListener('keyup',()=>searchStates(search.value))

