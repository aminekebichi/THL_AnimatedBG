//lol idk
var counter = 0;

// function myfunc(){
//     var bg = document.createElement("div");
//     bg.innerHTML = `
//     <div class="bg-wrapper" style="float: left; z-index: 0;">
//         <div class="triangle-up">
//             <div class="inner-triangle-up"></div>
//         </div>
//         <div class="vertical-rectangle"></div>
//         <div class="center-wrapper">
//             <div class="triangle-left">
//                 <div class="inner-triangle-left"></div>
//             </div>
//             <div class="horizontal-rectangle"></div>
//             <div class="square"></div>
//             <div class="horizontal-rectangle"></div>
//             <div class="triangle-right">
//                 <div class="inner-triangle-right"></div>
//             </div>
//         </div>
//         <div class="vertical-rectangle"></div>
//         <div style="transform: rotate(180deg)">
//         <div class="triangle-up">
//             <div class="inner-triangle-up"></div>
//         </div>
//         </div>
//     </div>
//     `;

//     var overlay = document.createElement("div");
//     overlay.innerHTML = `
//     <div class="overlay-wrapper" onmouseover="highlight(this)"  id="fractal` + (counter++) + `" style="float: left; z-index: 0; transform: translate(-3px, -15px);">
//         <div class="triangle-up-bg"></div>
//         <div class="vertical-rectangle-bg"></div>
//         <div class="center-wrapper">
//             <div class="triangle-left-bg"></div>
//             <div class="horizontal-rectangle-bg"></div>
//             <div class="square-bg"></div>
//             <div class="horizontal-rectangle-bg"></div>
//             <div class="triangle-right-bg"></div>
//         </div>
//         <div class="vertical-rectangle-bg"></div>
//         <div class="triangle-down-bg"></div>
//     </div>
//     `;

//     // document.getElementById('overlay').appendChild(overlay);
//     document.getElementById('my-bg').appendChild(bg);
// }

function myfunc(){
    var mydiv = document.createElement("div");
    mydiv.innerHTML = `
    <div class="bg-wrapper" id="fractal` + (counter++) + `" onmouseover="highlight(this)" style="float: left; z-index: 0; transform: translate(-3px, -15px);">
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

function highlight(param){
    // console.log(param.id);
    document.getElementById(param.id).style.opacity = "1";
    setTimeout(() => {
        document.getElementById(param.id).style.opacity = "0";
    }, 1600);
}

for(var i=0; i<9999; i++){
    myfunc();
}

// myfunc();