window.onload= function (){
    function startUserInput() {
        var context = new AudioContext()

        o = context.createOscillator()
        g = context.createGain()


        g.connect(context.destination)
        o.start()
    }

    document.getElementById("start").addEventListener("click", startUserInput);
    document.getElementById("decode").addEventListener("click", decode);
}
