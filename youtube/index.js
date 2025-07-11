let api_key = "f4e3006f";
let api = "https://www.omdbapi.com/?i=tt3896198&apikey=f4e3006f";
let input = document.querySelector("input")
let main = document.getElementById("main")
const getData =async ()=>{
    let res = await fetch(`${api}&s=${input.value}`);
    // console.log(res);
    let data = await res.json();
    console.log(data);
    console.log(input.value);
    
    let x = data.Search;
    // console.log(x);
    display(x)

}
// getData()

const delay = ()=>{
    setTimeout(getData,2000)
}

const display = (movies)=>{
    // console.log(movies);

    movies.map((el)=>{
        // console.log(el.Title);
        // console.log(el.Poster);
        
        let div = document.createElement("div")
        let title = document.createElement("h2")
        title.innerText = el.Title
        let img = document.createElement("img")
        img.src = el.Poster
        div.append(img,title)
        main.append(div)

    })
    

}