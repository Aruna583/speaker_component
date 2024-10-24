const speakersData = [
    {
        "id": 1,
        "name": 'John Doe',
        "role": 'Chief Marketing Officer',
        "company": 'Acme Corp',
        "imageSrc": '/assets/img1.png'
    },
    {
        "id": 2,
        "name": 'John Doe',
        "role": 'Chief Engagement Officer',
        "company": 'Acquia',
        "imageSrc": '/assets/img2.png'
    },
    {
        "id": 3,
        "name": 'John Doe',
        "role": 'Chief Technical Developer',
        "company": 'Pantheon',
        "imageSrc": '/assets/img3.png'
    },
    {
        "id": 4,
        "name": 'John Doe',
        "role": 'Chief Marketing Officer',
        "company": 'Specbee',
        "imageSrc": '/assets/img4.png'
    },

]


const speakerCarousel = document.getElementById('speakerCarousel')

function createCards(){
    speakersData.forEach((speaker, index)=>{

        const carouselItem = document.createElement('div');
        speakerCarousel.classList.add('d-flex', 'justify-content-center', 'align-items-center')
        carouselItem.style.margin = '0px'
    
        if(index === 0) carouselItem.classList.add('active');
    
        carouselItem.innerHTML = `
        <div class="d-flex flex-column justify-content-center align-items-center text-center shadow bg-white p-4 rounded" onclick="showPopOver(${index})">
        <img src="${speaker.imageSrc}" class="h-10 w-10 rounded-circle d-block d-flex flex-row justify-content-center" width="150" height="150"/>
        <div>
        <h1 class="font-weight-bold text-dark fs-4" >${speaker.name}</h1>
        <p class="font-weight-bold text-dark fs-5">${speaker.role}</p>
        <p class="text-secondary fs-6">${speaker.company}</p>
        </div>
        </div>
        `
        speakerCarousel.appendChild(carouselItem)
    })
}

createCards();

speakerCarousel.addEventListener('click', ()=>{
    if(speakerCarousel.scrollLeft + speakerCarousel.offsetWidth >= speakerCarousel.scrollWidth){
        speakerCarousel.scrollTo({
            left:0,
            behavior: 'smooth'
        
        })
    }
})

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

prevBtn.addEventListener('click', () => {
    speakerCarousel.scrollBy({
        left: -speakerCarousel.clientWidth,
        behavior: "smooth"
    })
})


nextBtn.addEventListener('click', () => {
    speakerCarousel.scrollBy({
        left: speakerCarousel.clientWidth,
        behavior: "smooth"
    })
})



const speakerPopOver = document.getElementById('speakerPopOver');

function onRemovePopOver(userId) {
    const speaerData = document.getElementById(userId)
    speakerPopOver.removeChild(speaerData) 
}

let popOverFlag = false;

function showPopOver(index){

    if(popOverFlag) return

    popOverFlag = true

    let userId = 'user' + index

    const speaker = speakersData[index]

    const popOverContainer = document.createElement('div');
    popOverContainer.id = userId
    popOverContainer.style.height = "auto";
    popOverContainer.style.margin = '14px'
    popOverContainer.classList.add('custom-user-details')
    popOverContainer.classList.add('shadow', 'rounded-sm', 'd-flex', 'justify-content-center', 'align-items-center')
    
    const closeButtonIcon = document.createElement('button');
    closeButtonIcon.textContent = "X";
    closeButtonIcon.id = index;
    closeButtonIcon.style.height = '30px';
    closeButtonIcon.style.border = 'none';
    closeButtonIcon.classList.add('absolute', 'd-flex', 'justify-content-start','align-items-start', 'top-0', 'right-0', 'bg-white')
    

    closeButtonIcon.onclick = function(){
        onRemovePopOver(userId)
        popOverFlag= false
    }

    const userContainer = document.createElement('div');
    
    userContainer.classList.add('d-flex', 'flex-row', 'relative', 'm-2');

    userContainer.innerHTML = `
    <div class="container>
    <div class="row">
    <div class="col-lg-12 custom-user-details d-flex flex-row border-end border-secondary custom-border" width="400">
    <img src="${speaker.imageSrc}" class="rounded-circle object-cover" width="150px" height="150px" borderRadius="100"/>
    <div class="d-flex flex-column m-2">
        <h1 class="font-weight-bold fs-4" >${speaker.name} </h1>
        <p class="font-weight-bold text-dark fs-6">${speaker.role}</p>
        <p class="text-secondary fs-6">${speaker.company}</p>
        <div class="d-flex flex-row px-2">
         <img src="assets/dropImg.png"/>
         <img src="assets/crossImg.png" class="px-1"/>
         <img src="assets/linkedin.png" class="px-1"/>
        </div>
    <div>
    <div>
    </div>
    </div>
    `

    const descriptionContainer = document.createElement('div')
    descriptionContainer.classList.add('d-flex', 'flex-row','justify-content-end', 'align-items-center', 'p-2', 'pt-4')

    descriptionContainer.innerHTML = `
    <p>
    Monotonectally synergize business communities rather than client-centric convergence.
    Assertively unleash cross-platform best practices rather than pandemic total linkage.
    Synergistically monetize parallel infomediaries whereas 2.0 mindshare.
    Dramatically pursue real-time markets through e-business strategic theme areas.
    </p>
    `
    userContainer.appendChild(descriptionContainer)

    userContainer.appendChild(closeButtonIcon)
    popOverContainer.appendChild(userContainer)
    speakerPopOver.appendChild(popOverContainer)

}
 