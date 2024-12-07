const switchmodebtn = document.getElementById('switchmodebtn');

let isdarkmode = false;

switchmodebtn.addEventListener('click', () => {

    if (isdarkmode) {

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        switchmodebtn.textContent = 'Switch to Dark Mode';
    }
     else {

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        switchmodebtn.textContent = 'Switch to Light Mode';
    }

    isdarkmode = !isdarkmode;

});