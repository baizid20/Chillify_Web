const getData = () => {
    fetch ('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then((data)=> dataRecived(data.videos))
}
getData()

const dataRecived = (multipleData) => {
      console.log( multipleData)
      const mainCardContainer = document.getElementById('card-main-container');
      multipleData.forEach((singleData) => {
         console.log(singleData)
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
           <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${singleData.thumbnail}
      alt="videos" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${singleData.title}</h2>
    <p>${singleData.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Play Now</button>
    </div>
  </div>
</div>
        `

        mainCardContainer.appendChild(newDiv)
      })
}


// {category_id: '1001',
//  video_id: 'aaal',
//  thumbnail: 'https://i.ibb.co/hdtZYbB/enchnting.jpg', 
// title: 'Enchanted Harmonies', 
// authors: Array(1), …}authors: [{…}]
// category_id: "1001"
// description: "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience."
// others: {views: '7.6K', posted_date: '16450'}
// thumbnail: "https://i.ibb.co/hdtZYbB/enchnting.jpg"
// title: "Enchanted Harmonies"video_id: "aaal"[[Prototype]]: Object