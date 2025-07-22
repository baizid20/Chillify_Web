// api theke data neb 
// data amar element er maddhome dekhabo 

function dataTaking() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then((data)=> dataManipulation(data.categories) )
}
dataTaking()

// // 0
// :[
// {category_id: '1001', category: 'Music'}
// 1
// : 
// {category_id: '1003', category: 'Comedy'}
// 2
// : 
// {category_id: '1005', category: 'Drawing'}]

function dataManipulation(recivedData){
   for (let singleEntry of recivedData){
    let cat = singleEntry.category;
   let newDiv = document.createElement('div')
   newDiv.innerHTML =` <button id="btnA" class="lg:btn font-inter flex sm:mx-2 bg-gray-200 hover:bg-teal-400 hover:text-white font-semibold text lg:rounded-md rounded-full my-2 lg:text-base text-xl px-8 py-1"> <span class="lg:hidden block">#</span>${cat}</button>
   `
   document.getElementById('nav-container').appendChild(newDiv)
   }
}
