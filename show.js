// function to change color
count = 0
function Color() {
    var color = ["lightblue", "gold", "whitesmoke", "wheat"];
    count ++;
    if (count == 4){
        count = 0;
    }
    return color[count];
}
setInterval(() => {
    document.querySelector("#heading").style.color = Color();
}, 1000);

// ajax call
document.getElementById("sub").onclick = function() {
    var name = document.getElementById("showname").value;
    if(name.trim() == ""){
        alert("Empty field");
        return false
    }
    else{
        newrequest = new XMLHttpRequest();
        newrequest.open("GET", `API?q=${name}`, true)
        newrequest.onload = function(){
        if (this.status === 200) {
            var myObj = JSON.parse(this.responseText);
            if (myObj == undefined || myObj == null || myObj == ""){
                swal({ text: "Sorry, Not Found!",
                       icon: "warning"})
            }
            else{
                swal(`Title : ${myObj[0].show.name},
                    Language : ${myObj[0].show.language},
                    Genres : ${myObj[0].show.genres},
                    Premiered : ${myObj[0].show.premiered},
                    Rating : ${Object.entries(myObj[0].show.rating)}
                    Status : ${myObj[0].show.status}`)
                    return true
            }
        }
        else{
            alert("none");
            return false
        }
    }
    newrequest.send();
    }
    document.getElementById("showname").value = ""
}
