function scrollUp(pxScreen){
    window.addEventListener('scroll', () => {
        let scroll  = document.documentElement.scrollTop;
        let upButton = document.getElementById('upButton');

        if(scroll > pxScreen){
            upButton.style.display = 'block';
        } else {
            upButton.style.display = 'none';
        }
    })
}

scrollUp(75);