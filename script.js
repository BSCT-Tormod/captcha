document.querySelector('#light-mode').addEventListener('change', function(){
    if(this.checked){
        document.querySelector('.game-container').style.backgroundColor = '#fff';
        document.querySelector('.game-container').style.color = '#272727';
    } else {
        document.querySelector('.game-container').style.backgroundColor = '#272727';
        document.querySelector('.game-container').style.color = '#fff';
    }
});