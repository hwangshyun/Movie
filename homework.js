const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzMxN2Q4ZjQ1ODg2OTMwMjU0Y2NkMDYyZTBlZDhhMSIsInN1YiI6IjY2MmEwODc5ZDE4YjI0MDA5YmRlMDdhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3Cg1X24o5jVGH9ejSs7O2EBWDSpAb6SHIcyBU_UXq3g'
    }
};
 let map =  new Map()
 
fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        
        let movie_list = response['results'];

        let temp_html = ``;
        movie_list.forEach((data)=>{
           
            let img_url = 'https://image.tmdb.org/t/p/w500' + data['backdrop_path'];
            let movie_title = data['title'];
            let overview = data['overview'];
            let vote = data['vote_average'];
            let movieid = data['id'];

            temp_html += `
                    <div id="card" onclick="alert(${movieid})">
                    <img id="image" src="${img_url}" alt="영화이미지">
                    <h3 id="movie-title" class = "movietitle">${movie_title}</h3>
                    <p id="overview">${overview}</p>
                    <p id="grade">${vote}</p>
                </div>
            `
        
        
        document.getElementById('card-list').innerHTML = temp_html
        
        
       
})

const searchinput = document.getElementById('movie_name_input')
const searchBtn = document.getElementById('searchbtn')

searchinput.addEventListener('input',function () {
    const searchTerm = searchinput.value.toLowerCase();
    const movieList = document.querySelectorAll('#card');

    movieList.forEach ((card)=>{
        const title = card.querySelector('.movietitle').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none'
        }
    })
}     
)

 }); 
 
