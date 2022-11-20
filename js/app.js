const app = {
    render:()=>{
        const url ="https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=61394c69d344dec6dd2b98fbce86983d&hash=a4890cfa25dd55867519a0f833601bb9";

        var HTMLc ="";
        fetch(url)
        .then(res=>res.json())
        .then((json)=>{
            for(const hero of json.data.results){
                let urlHero = hero.urls[0].url;
                HTMLc +=
                    `<div class="col-md-4 pad">
                        <a href="${urlHero}" target="_blank">
                            <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                        </a>
                        <h3 class="title white">${hero.name}</h3>
                    </div>`;
            }
            document.querySelector('#Body').innerHTML = HTMLc;
        })
    }
};
app.render();