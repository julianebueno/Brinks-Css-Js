const container = document.querySelector(".Container");
const quoteText = document.querySelector(".Quote_text");
const quoteAutor = document.querySelector(".Quote_autor");
const quoteImage = document.querySelector(".QuoteImage");

async function setup() {
    container.removeAttribute('data-animation');
    await getQuote()
    container.setAttribute('data-animation', '');
    setTimeout(setup, 10000);
}

async function getQuote() {
    const response = await axios.get('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = response.data[0];
    quoteText.innerHTML = data.quote;
    quoteAutor.innerHTML = data.author;
    quoteImage.src = getImage(data.author);
}

function getImage(authorName) {
    const authorImage = authorsImage.find((author) => author.name === authorName);
    return authorImage ? authorImage.imageSrc : defaultImage;
}

setup();



// ----------------------
// Assets
// ----------------------

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/2560px-Breaking_Bad_logo.svg.png';
const authorsImage = [
    { name: 'Walter White', imageSrc:'https://www.pngall.com/wp-content/uploads/5/Walter-White-Breaking-Bad-PNG-Image.png' },
    { name: 'Jesse Pinkman', imageSrc:'https://static.wikia.nocookie.net/vsbattles/images/4/49/Jesse_season_one.png' },
    { name: 'Gustavo Fring', imageSrc:'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fb6a00b4-9cdc-401d-9a61-41fdbe9d09ce/dfqnms9-ce74f7b1-0c45-44f1-b867-362791c0cdd8.png/v1/fill/w_1280,h_1829/gus_fring__render__2__by_yessing_dfqnms9-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgyOSIsInBhdGgiOiJcL2ZcL2ZiNmEwMGI0LTljZGMtNDAxZC05YTYxLTQxZmRiZTlkMDljZVwvZGZxbm1zOS1jZTc0ZjdiMS0wYzQ1LTQ0ZjEtYjg2Ny0zNjI3OTFjMGNkZDgucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.llMkUDn02rDomffjEqbCkaJjEDmv4_oWWVzXP7E3Tco' },
    { name: 'Walter White Jr', imageSrc:'https://64.media.tumblr.com/aa1c7d5ca4d0f7ab900f14d1cfdfb142/tumblr_mx4u4sB8zg1rxkqbso1_400.png' },
    { name: 'Mike Ehrmantraut', imageSrc:'https://static.wikia.nocookie.net/vsbattles/images/f/f7/Mike-ehrmantraut-jacket.png' },
    { name: 'Saul Goodman', imageSrc:'https://staticdelivery.nexusmods.com/mods/2679/images/thumbnails/536/536-1660919970-1619132817.png' },
    { name: 'Hank Schrader', imageSrc:'https://static.wikia.nocookie.net/vsbattles/images/7/72/Hankprofilerender.png' },
];