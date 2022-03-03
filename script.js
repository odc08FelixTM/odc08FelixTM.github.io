// holy trash code :D 

const button = document.getElementById('delb');
   button.addEventListener("click", () => {
    var afterclick = document.getElementById("tempbclick")    
    button.style.display = "none";
    afterclick.style.display = "block";
    var afterclick2 = document.getElementById("08")
    afterclick2.style.display = "none";
    afterclick.classList.add("nat");
    afterclick.style.letterSpacing = "8px";
    metaTag.content = "width=device-width, initial-scale=0.1"
});

var metaTag=document.createElement('meta');
metaTag.name = "viewport"
metaTag.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
document.getElementsByTagName('head')[0].appendChild(metaTag);

