let contain = document.getElementById("box");

contain.addEventListener('input', function(){
    let cont = this.value;
    let chr = cont.length;
    document.getElementById("ctr").innerHTML = chr;

    cont = cont.trim();
    let words = cont.split(" ");
    let word = words.length;
    let  extraSpace = words.filter(function(ele){
       return ele != "";
    });
    document.getElementById("word").innerHTML = extraSpace.length;

})