function openInstagram(){
    window.open('https://www.instagram.com/nicole_mkp/')
}

function openFacebook(){
    window.open('https://www.facebook.com/nicolefloresphotography/?eid=ARAk-nm2PxasogW4-4-jSnZhry_DZuUjYiVVsvpTo_Qhyb1QdBxt5bQQmoIsedDDGINWwFSiJ6srG2OX&timeline_context_item_type=intro_card_work&timeline_context_item_source=100000324354992&fref=tag')
}


function open500px(){
    window.open('https://500px.com/nicoleflores97')
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}