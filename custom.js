var counter = 0;

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();   
});

function swap(selected) {
    // First don't display all div id contents
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('pepper').style.display = 'none';

    //Then display the selected div id contents
    document.getElementById(selected).style.display = 'block';
}

function changeLook() {
    counter += 1;
    switch (counter) {
        case 1:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = 'red';
            document.getElementById('footer').style.backgroundColor = 'red';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#204074';
            document.getElementById('footer').style.backgroundColor = '#17913C';
            break;
        case 3:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#FF8302';
            document.getElementById('footer').style.backgroundColor = '#010A8D';
            break;
        case 4:
            document.getElementById('body').style.backgroundColor = 'white';
            document.getElementById('header').style.backgroundColor = '#760000';
            document.getElementById('footer').style.backgroundColor = '#760000';
            break;
    }
}

function changeBack() {
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('header').style.backgroundColor = 'black';
    document.getElementById('footer').style.backgroundColor = 'black';
}