iterate = -1 // must start at -1 or else it'll skip over the first character

function decode() {
    input = document.getElementById("translate").value; //get text from text box

    iterate += 1
    letter = input.charAt(iterate)
    console.log(letter)
    length = input.length;

    
    if (iterate < length) {
        
        setTimeout(function(){ decode() }, 1000);
        findLetter()
        //console.log("fwd")
    } else { //reset back to -1
        console.log("done!")
        iterate = -1
    }
}

