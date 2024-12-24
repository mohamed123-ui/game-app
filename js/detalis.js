
let gameId= localStorage.getItem('selectedGameId');
if (!gameId) {
  alert('Invalid Game ID');
  console.log('Game ID is null:', gameId);
} else {
  console.log('Game ID:', gameId);
}
getDetails("452")  



let data={};
async function getDetails(id) {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'fb9cfc386fmsh18abe7fb1b166cdp101713jsn46e9c192a340',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    try {
        const response=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
        if(response.ok){
            let finalResponse=await response.json();
            data=finalResponse
        }
        diplayDetails(data);
    } catch (error) {
        alert('data invalid')
        
    }
}
function diplayDetails(data){
    let cartona=''
        cartona += `
             <div class="img-game col-lg-4">
<h1 class="text-white">Details Game
</h1>
<img src="${data.thumbnail}" alt="james">
                </div>
                <div class="game-deails ps-5 pt-4 col-lg-8">
<div class="title text-white mb-2"><h3>title :  ${data.title}</h3></div>
<div class="category mb-2 "><h4 class="text-white">Category : <span class="btn btn-info">${data.genre}</span></h4></div>
<div class="platform mb-2"><h5 class="text-white">Platform: <span class="btn btn-info"> ${data.platform}</span></h5></div>
<div class="status "><h6 class="text-white">Status: <span class="btn btn-info"> ${data.status}</span>
</h6></div>
<div class="description "> <p class="text-white">${data.description}</p></div>
                
</div>
        `
        document.getElementById('rowDetails').innerHTML=cartona;
    }  
    document.addEventListener('DOMContentLoaded', () => {
        const closeButton = document.getElementById('close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                location.href = "index.html";
            });
        }
    });
    
    
