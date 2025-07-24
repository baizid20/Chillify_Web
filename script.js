
 getCatagoryBtn ()
function getCatagoryBtn (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json())
    .then ((data) =>{
        getCatagoryBtnArray(data.categories);
        
    } )
}

function  categoryVedio(){

}
function getCatagoryBtnArray (allArray){
      const navContainer = document.getElementById('navContainer')
      for (let singleArray of allArray){
        
        console.log(singleArray.category_id)
        const newDiv = document.createElement('div');
        // console.log(newDiv)
        newDiv.innerHTML = `<button onclick='getlink ()' id='btn-${singleArray.category_id}' class="btn hover:bg-slate-200  font-bold  btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"> ${singleArray.category} </button>`
        navContainer.appendChild(newDiv)
      }
}
// card container code
const getVieos = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then(((data) => setVedioBox(data.videos)))
}

function getlink (id){
    fetch ('https://openapi.programming-hero.com/api/phero-tube/category/${id}')
    .then((res) => res.json())
    .then((data) => {
              
    })
}

function setVedioBox(videos){
    const MainCardContainer = document.getElementById('card-main-container')
    for (video of videos){
        console.log(video)
        const cardDiv = document.createElement('div')
        cardDiv.innerHTML=`   <div class="card bg-base-100 w-80 h-90 shadow-sm">
  <figure class='w-full'>
    <img class='object-cover '
      src='${video.thumbnail}' />
  </figure>

  <div class="card-body grid gap-y-5 ">
    <!-- avater and title div -->
  <div class="flex items-center gap-x-5">
      <div class="avatar">
  <div class="w-12 h-12 rounded-full">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
    <h2 class="card-title text-xl">${video.title}</h2>
  </div>
    
          <div>
            <p class="text-base flex items-center  gap-x-2 ">${video.authors[0].profile_name}
            <img class="w-5 h-5 mt-1" src="https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000" alt="verified"></p>
    <p class="">${video.others.views}  Views</p>
          </div>
    
    <div class="card-actions justify-end">
      <button id='showDetails' class="btn w-full btn-primary" onclick="my_modal_1.showModal()">Show Details</button>
    </div>
  </div>
</div>    

`
        MainCardContainer.appendChild(cardDiv)
       const showDetailsBtn = document.getElementById('showDetails')
    }

}

//  getVieos()
// function getActive (id){
    
//     // document.getElementById(id).classList.add('active')
// }


// function category () {
//     fetch ('https://openapi.programming-hero.com/api/phero-tube/category/1001')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
// }





