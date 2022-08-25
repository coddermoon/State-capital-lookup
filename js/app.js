const search = document.getElementById('search')
const matchLists = document.getElementById('match-lists')

const  searchStates = async value=>{

    // fatch data

   const res = await fetch('./../data/data.json')
   const states = await res.json()
 
//   check match or not 
let matches = states.filter(state=>{
    const regx =new RegExp(`^${value}`, 'gi')
    return  state.name.match(regx)
   
})
if (value.length === 0) {
    matches = []
    matchLists.innerHTML = ''
}
outputHtml(matches)
}

// output html

const outputHtml = matches =>{
    if (matches.length >0) {
        const html = matches.map(match=>`
        
        <div class="card card-body mb-1 mx-auto ">
        <h4>${match.name} (${match.city}) <span class="text-primary">
        ${match.city}
        </span> </h4>
        <!-- <small>lat : ${match.lat}</small> -->
        </div>
        
        
        
        `).join('')
        matchLists.innerHTML= html
    }
}


search.addEventListener('input',()=>searchStates(search.value))

