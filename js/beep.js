function long() {
    o.connect(g)
    setTimeout(function () {
        o.disconnect()
        
    }, 100);  
};

function short() {
    o.connect(g)
    setTimeout(function () {
        o.disconnect()
        
    }, 50);  
};