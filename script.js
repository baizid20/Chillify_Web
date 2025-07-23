// all btn js file ----------> 


const removeActive = () =>{
   const removeActiveBtn = document.getElementsByClassName('active');
   
   for (let btn of removeActiveBtn){
    btn.classList.remove('active')
   }
}

function dataTaking() {
    
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then((data)=> dataManipulation(data.categories) )
}
dataTaking()


const dynamicId = (id) =>{
   
    
     const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => {
      dataRecived(data.category)
      removeActive()
     const navBtn = document.getElementById(`btn-${id}`)
      navBtn.classList.add('active')
      
     })
     
}

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
    let cat = singleEntry;



   let newDiv = document.createElement('div')
   newDiv.innerHTML =` <button id='btn-${cat.category_id}'onclick="dynamicId(${cat.category_id})" class="lg:btn font-inter flex sm:mx-2 bg-white  hover:border-teal-200 hover:border-2 font-semibold text lg:rounded-md rounded-full my-2 lg:text-base text-xl px-8 py-1"> <span class="lg:hidden block">#</span>${cat.category}</button>
   `
   document.getElementById('nav-container').appendChild(newDiv)
    
    
   }
}


//  video_id: 'aaal',
//  thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', 
// title: 'Enchanted Harmonies', 
// authors: Array(1), …}authors: [{…}]
// category_id: "1001"
// description: "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
// others: {views: '7.6K', posted_date: '16450'}
// thumbnail: "https://i.ibb.co/hdtZYbB/enchnting.jpg"
// title: "Enchanted Harmonies"video_id: "aaal"[[Prototype]]: Object



