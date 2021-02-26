
var picArray = ["L1.jpg", "L2.jpg", "L3.jpg", "L4.jpg", "L5.jpg", "L6.jpg", "L10.jpg", "L11.jpg", "L12.jpg", "L21.jpg", "L22.jpg", "L24.jpg", "L25.jpg"];
var path = "/assets/images/Unit_Pictures/";



var picID = document.getElementById("unitPics");

showPic();

/* function wait5s () {
    var i = 0;
    for(i=0; i < picArray.length-1; i++) {
        setTimeout(() => {
            picID.setAttribute("src", path + picArray[i]);
            console.log("i = " + i + "  pic: " + path + picArray);
        }, 5000);
    }
} */

function doSetTimeout(i) {
    setTimeout(function() { alert(i); }, 100);
  }

var timeoutID;
function showPic() {
    for(i=0; i<3; i++){
        setTimeout(swapPic, 5000, i);
    // console.log("from the timer function");
    }
}

function swapPic(picNum) {
    picID.setAttribute("src", path + picArray[picNum]);
    console.log(path+picArray[picNum]);
}



