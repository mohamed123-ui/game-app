//fixed scroll!!
let loading=document.getElementById('loading')
const scroll = document.getElementById('scroll');
const scrollEvent = scroll.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY >= scrollEvent) {
        scroll.classList.add('position-fixed','top-0');
    } else {
        scroll.classList.remove('position-fixed');
    }
});
///click in nav bar links 
document.querySelectorAll('.nav-link[data-category]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); 
        const category = this.getAttribute('data-category');
        loading.classList.remove('d-none')
        getGames(category);

    });
});
   /** api func */
   getGames("mmorpg")
   let data=[];
async function getGames(category) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fb9cfc386fmsh18abe7fb1b166cdp101713jsn46e9c192a340',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
try {
    loading.classList.remove('d-none')
    let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)
    if(response.ok){
    let finalResponse=await response.json();
        data=finalResponse;
    }
    console.log(response);
displayGames(data);
loading.classList.add('d-none')
}
catch (error) {
    alert('data invalid')
}}
function  displayGames(data){
    let conatainer=''
    for(let i=0;i<data.length;i++){
        conatainer +=`    <div class="card col-md-3 p-3" data-id="${data[i].id}" >
            <img src="${data[i].thumbnail}" class="card-img-top w-100" alt="...">
            <div class="card-body d-flex justify-content-between align-content-center   ">
              <h5 class="card-title text-white">${data[i].title}</h5>
              <p class="free p-1 rounded-4">free</p>
            </div>
              <p class="card-description  ">${data[i].short_description}</p>
            <div class="footer d-flex justify-content-between align-content-center">
                <div class="gener text-white"><p>${data[i].genre}</p></div>
                <div class="plat-form text-white"><p>${data[i].platform}</p></div>
            </div>
          </div>`
    }
    document.getElementById('rowData').innerHTML=conatainer;
    document.querySelectorAll('.card').forEach(card => {

        card.addEventListener('click', function () {
        loading.classList.remove('d-none')

            let gameId = this.getAttribute('data-id');
            console.log('Game ID:', gameId);
                localStorage.setItem('selectedGameId', gameId);
                console.log(localStorage);
                showDetails();
        loading.classList.add('d-none')

        });
    });
}  

function showDetails() {
location.href ="details.html";
}


