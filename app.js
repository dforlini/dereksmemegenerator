document.addEventListener('DOMContentLoaded', function(){
    const generateButton = document.getElementById('generateButton');
    const deleteAllButton = document.getElementById('deleteAllButton');

    generateButton.addEventListener('click', function(){
        console.log('generate clicked');
        generateMeme();
    })

    deleteAllButton.addEventListener('click', function(){
        console.log('delete clicked');
        deleteAllMemes();
    })
});
function generateMeme(){
    
    const topText = document.getElementById('topText').value;
    const botomText = document.getElementById('bottomText').value;
    const imageUrl = document.getElementById('imageUrl').value;

const memeContainer = document.getElementById('memeContainer');
const memeDiv = document.createElement('div');
memeDiv.classList.add('meme');

const img = document.createElement('img');
img.src= imageUrl;

if (topText){
    const topTextDiv = document.createElement('div');
    topTextDiv.innerText = topText;
    topTextDiv.classList.add('top-text');
    memeDiv.appendChild(topTextDiv);
}
if (bottomText){
    const bottomTextDiv = document.createElement('div');
    memeDiv.appendChild(bottomTextDiv);
}



memeDiv.appendChild(img);
memeContainer.appendChild(memeDiv);

document.getElementById('topText').value = '';
document.getElementById('bottomText').value = "";
document.getElementById('imageUrl').value = '';
console.log('meme generated');
}
function deleteAllMemes(){
    const memeContainer = document.getElementById('memeContainer');
    memeContainer.innerHTML = '';
    console.log('deleted');
}