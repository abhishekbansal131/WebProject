const APIURL =  "https://api.tvmaze.com/search/shows?q=";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getMovies = async (url) => {
const resp = await fetch(url);
const respData = await resp.json();

console.log(respData);

showMovies(respData.results);
};

const showMovies = (movies) => {
main.innerHTML = "";

movies.forEach((movie) => {
const { poster_path, title } = movie;

const movieEl = document.createElement("div");
movieEl.classList.add("movie");

movieEl.innerHTML = `
<img
src="${IMGPATH + poster_path}"
alt="${title}"
/>`;
main.appendChild(movieEl);
});
};

getMovies(APIURL);


form.addEventListener("submit", (e) => {
e.preventDefault();
const searchTerm = search.value;

if (searchTerm) {
getMovies(SEARCHAPI + searchTerm);
search.value = "";
}
});

//Theme 
const themecolor = document.querySelectorAll('[name = "theme"]');

const storeTheme = function(theme){
localStorage.setItem('theme', theme);
}
const applyTheme = function(){
const activetheme = localStorage.getItem('theme');
themecolor.forEach((themeOption)=>{
if(themeOption.id === activetheme){
  themeOption.checked = true;
}
})
}
themecolor.forEach((themeOption)=>{
themeOption.addEventListener('click',()=>{  
storeTheme(themeOption.id);
})
})

document.onload = applyTheme();