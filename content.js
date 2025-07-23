
const getData = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then((data) => {
         dataRecived(data.videos);
         removeActive()
          document.getElementById('btn-1000').classList.add('active')
          
        } )
};

const dataRecived = (multipleData) => {
    const mainCardContainer = document.getElementById('card-main-container');

    if (!multipleData || multipleData.length === 0) {
        mainCardContainer.innerHTML = `
        <div id="empty container" class="col-span-full flex flex-col gap-y-7 justify-center items-center">
            <div>
                <img src="assets/Icon.png" alt="no video">
            </div>
            <p class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</p>
        </div>`;
        return;
    } else {
        mainCardContainer.innerHTML = '';
    }

    multipleData.forEach((singleData) => {
        const { thumbnail, title, authors, others } = singleData;

        const author = authors[0];
        const isVerified = author?.verified;

        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card w-80 h-80">
            <div>
                <figure class="relative rounded-xl">
                    <img class="object-cover w-100 h-50"
                        src="${thumbnail}"
                        alt="Video Thumbnail" />
                    <span class="bg-black text-white text-sm p-2 rounded-md absolute bottom-2 right-2">${others?.posted_date || ''}</span>
                </figure>
            </div>

            <!-- card body -->
            <div class="card-body px-1">
                <div class="avatar flex gap-x-6">
                    <div class="ring-primary ring-offset-base-100 h-10 w-10 rounded-full">
                        <img class="object-cover w-full h-full rounded-full" src="${author.profile_picture}" />
                    </div>

                    <div>
                        <p class="text-base font-semibold pb-1">${title}</p>
                        <p class="text-sm flex gap-x-2 items-center text-gray-500 pb-1 font-semibold">
                            ${author.profile_name}
                            ${isVerified ? `
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-blue-500 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>` : ''}
                        </p>
                        <p class="text-sm text-gray-500 pb-1 font-semibold">${others.views} views</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        mainCardContainer.appendChild(newDiv);
    });
};

getData();



