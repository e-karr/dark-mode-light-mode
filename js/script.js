// const changeModeButton = document.getElementById("toggle-btn");

function handleToggleButtonClick() {
    // get the body element
    // const bodyTag = document.getElementsByTagName('body')[0];
    const bodyTag = document.body;
    
    // get class of body
        //bodyTag.classList

    // if body element has a class of "light"
        // change to dark
    // if body element has class of "dark"  
        // change to light

    if (bodyTag.classList.contains('light')){
        bodyTag.classList.remove('light');
        bodyTag.classList.add('dark');
    } else {
        bodyTag.classList.remove('dark');
        bodyTag.classList.add('light');
    }
}