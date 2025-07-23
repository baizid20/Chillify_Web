// content file : 

const getData = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then((data)=> dataRecived(data.videos))
}


const dataRecived = (multipleData) => {
      console.log( multipleData.length)
        
      const mainCardContainer = document.getElementById('card-main-container');
    //  let emptyPageDiv = document.createElement='div';
      if (multipleData.length === 0){
        
        mainCardContainer.innerHTML=`<div id="empty container" class="col-span-full flex flex-col gap-y-7 justify-center items-center">
          <div>
         <img src="assets/Icon.png" alt="no video" >
              </div>
             <p class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</p>
            </div>`
         
           return
         }
         else{
           mainCardContainer.innerHTML=''
         }
     
      //  if (muilipleData.length == 0){
     
      //  }
      multipleData.forEach((singleData) => {
        //  console.log(singleData);
       
         
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
           <div class="card w-80 h-80 ">
  <div>
    <figure class="relative rounded-xl " >
    <img  class="object-cover w-100 h-50" 
      src="${singleData.thumbnail}"
      alt="Shoes" />
  </figure>
  <span class="bg-black text-white text-sm p-2 rounded-md absolute top-35 right-2">${singleData.others.posted_date}</span>
  </div>



<!-- card body -->

  <div class="card-body px-1">

    <!-- .......... -->

    <div class="avatar flex gap-x-6 ">
  <div class="ring-primary ring-offset-base-100 h-10 w-10 rounded-full  ">
    <img class="object-cover w-full" src="${singleData.authors[0].profile_picture}" />
  </div>
   
   <div class="">
    <p class="text-base font-semibold pb-1">${singleData.title}</p>
    <p class="text-sm flex gap-x-2 items-center text-gray-500 pb-1 font-semibold">${singleData.authors[0].profile_name}
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<linearGradient id="csF85US9HGjIK87qotE6pa_QMxOVe0B9VzG_gr1" x1="24" x2="24" y1="3.999" y2="43.001" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#csF85US9HGjIK87qotE6pa_QMxOVe0B9VzG_gr1)" d="M43.466,25.705l-2.599-4.259l1.293-4.817c0.187-0.694-0.146-1.424-0.793-1.738l-4.488-2.178	l-1.518-4.752c-0.219-0.686-0.888-1.114-1.607-1.033l-4.953,0.594l-3.846-3.178c-0.555-0.459-1.355-0.459-1.91,0l-3.846,3.178	l-4.953-0.594c-0.717-0.081-1.389,0.348-1.607,1.033l-1.518,4.752l-4.488,2.178c-0.646,0.314-0.979,1.044-0.793,1.738l1.293,4.817	l-2.599,4.259c-0.375,0.614-0.261,1.408,0.271,1.892l3.693,3.354l0.116,4.987c0.018,0.719,0.542,1.325,1.252,1.444l4.92,0.825	l2.795,4.133c0.403,0.595,1.172,0.822,1.833,0.538L24,40.913l4.585,1.966C28.776,42.961,28.977,43,29.175,43	c0.486,0,0.957-0.236,1.243-0.659l2.795-4.133l4.92-0.825c0.71-0.119,1.234-0.726,1.252-1.444l0.116-4.987l3.693-3.354	C43.727,27.113,43.841,26.319,43.466,25.705z"></path><path fill="#fff" d="M21.814,31c-0.322,0-0.646-0.104-0.92-0.316l-4.706-3.66c-0.436-0.339-0.514-0.967-0.175-1.403	l0.614-0.789c0.339-0.436,0.967-0.514,1.403-0.175l3.581,2.785l7.086-8.209c0.361-0.418,0.992-0.464,1.41-0.104l0.757,0.653	c0.418,0.361,0.464,0.992,0.104,1.41l-8.017,9.289C22.655,30.822,22.236,31,21.814,31z"></path>
</svg>
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
</p>
    
    <p class="text-sm text-gray-500 pb-1 font-semibold">${singleData.others.views}</p>
      </div>
</div>
<!-- ........... -->
     
    </div>
  </div>
        `

        mainCardContainer.appendChild(newDiv)
      })
}

// getData()
// {category_id: '1001',