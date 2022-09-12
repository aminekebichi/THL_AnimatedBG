//lol idk

function myfunc(){
    var mydiv = document.createElement("div");
    mydiv.innerHTML = `
    <div class="bg-wrapper" id="fractal" style="float: left; z-index: 0;">
        <div class="triangle-up"></div>
        <div class="vertical-rectangle"></div>
        <div class="center-wrapper">
            <div class="triangle-left"></div>
            <div class="horizontal-rectangle"></div>
            <div class="square"></div>
            <div class="horizontal-rectangle"></div>
            <div class="triangle-right"></div>
        </div>
        <div class="vertical-rectangle"></div>
        <div class="triangle-down"></div>
    </div>
    `;

    document.getElementById('temp').appendChild(mydiv);
}

for(var i=0; i<9999; i++){
    myfunc();
}