window.onload = function () {
    // $('#ProductSluder').load('PRODUCTS.html');
    
    // validate();
};



// home

function loadError() {
    $('#Error').load('ERRORS.html');
    katalogHiden();
}
function katalogHiden() {
    document.getElementById('katalog').style.display = 'none';
    document.getElementById('productSluder').style.display = 'none';
}


function readyMenu() {
    $('#accordionMenu').load('accordMenu.html');
}
document.addEventListener("DOMContentLoaded", readyMenu);


//productSlider

function loadErrorContent1() {
    $('#content-1').load('ERRORS.html');

  }
  function loadErrorContent2() {
    $('#content-2').load('ERRORS.html');

  }
  function loadErrorContent4() {
    $('#content-4').load('ERRORS.html');

  }
  window.onload = function () {
    document.getElementById("NewProduct").click();
    loadContent3();
   
  };

  function loadContent3() {
    $('#content-3').load('KARTOCHKA1.html');
  }




//СЛАЙДЕР 1

function changeHeat1() {
        
    if (document.getElementById('heat1').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat1').src = './img/heart2.svg';
    } else {
        document.getElementById('heat1').src = './img/heart1.svg';
    }
}

function validateKartochka1() {
    if (document.getElementById('1r1').checked) {
       
        document.getElementById('s1').style.marginLeft = "0";
    } else if (document.getElementById('1r2').checked) {
        document.getElementById('s1').style.marginLeft = "-25%";
        
    } else if (document.getElementById('1r3').checked) {
        document.getElementById('s1').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s1').style.marginLeft = "-75%";
       
    }
}

//СЛАЙДЕР 2

function changeHeat2() {
        
    if (document.getElementById('heat2').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat2').src = './img/heart2.svg';
    } else {
        document.getElementById('heat2').src = './img/heart1.svg';
    }
}

function validateKartochka2() {
    if (document.getElementById('2r1').checked) {
       
        document.getElementById('s2').style.marginLeft = "0";
    } else if (document.getElementById('2r2').checked) {
        document.getElementById('s2').style.marginLeft = "-25%";
        
    } else if (document.getElementById('2r3').checked) {
        document.getElementById('s2').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s2').style.marginLeft = "-75%";
       
    }
}


//СЛАЙДЕР 3
function changeHeat3() {
        
    if (document.getElementById('heat3').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat3').src = './img/heart2.svg';
    } else {
        document.getElementById('heat3').src = './img/heart1.svg';
    }
}

function validateKartochka3() {
    if (document.getElementById('3r1').checked) {
       
        document.getElementById('s3').style.marginLeft = "0";
    } else if (document.getElementById('3r2').checked) {
        document.getElementById('s3').style.marginLeft = "-25%";
        
    } else if (document.getElementById('3r3').checked) {
        document.getElementById('s3').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s3').style.marginLeft = "-75%";
       
    }
}

//СЛАЙДЕР 4
function changeHeat4() {
        
    if (document.getElementById('heat4').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat4').src = './img/heart2.svg';
    } else {
        document.getElementById('heat4').src = './img/heart1.svg';
    }
}

function validateKartochka4() {
    if (document.getElementById('4r1').checked) {
       
        document.getElementById('s4').style.marginLeft = "0";
    } else if (document.getElementById('4r2').checked) {
        document.getElementById('s4').style.marginLeft = "-25%";
        
    } else if (document.getElementById('4r3').checked) {
        document.getElementById('s4').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s4').style.marginLeft = "-75%";
       
    }
}


//СЛАЙДЕР 5
function changeHeat5() {
        
    if (document.getElementById('heat5').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat5').src = './img/heart2.svg';
    } else {
        document.getElementById('heat5').src = './img/heart1.svg';
    }
}

function validateKartochka5() {
    if (document.getElementById('5r1').checked) {
       
        document.getElementById('s5').style.marginLeft = "0";
    } else if (document.getElementById('5r2').checked) {
        document.getElementById('s5').style.marginLeft = "-25%";
        
    } else if (document.getElementById('5r3').checked) {
        document.getElementById('s5').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s5').style.marginLeft = "-75%";
       
    }
}


//СЛАЙДЕР 6
function changeHeat6() {
        
    if (document.getElementById('heat6').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat6').src = './img/heart2.svg';
    } else {
        document.getElementById('heat6').src = './img/heart1.svg';
    }
}

function validateKartochka6() {
    if (document.getElementById('6r1').checked) {
       
        document.getElementById('s6').style.marginLeft = "0";
    } else if (document.getElementById('6r2').checked) {
        document.getElementById('s6').style.marginLeft = "-25%";
        
    } else if (document.getElementById('6r3').checked) {
        document.getElementById('s6').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s6').style.marginLeft = "-75%";
       
    }
}
//СЛАЙДЕР 7
function changeHeat7() {
        
    if (document.getElementById('heat7').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat7').src = './img/heart2.svg';
    } else {
        document.getElementById('heat7').src = './img/heart1.svg';
    }
}

function validateKartochka7() {
    if (document.getElementById('7r1').checked) {
       
        document.getElementById('s7').style.marginLeft = "0";
    } else if (document.getElementById('7r2').checked) {
        document.getElementById('s7').style.marginLeft = "-25%";
        
    } else if (document.getElementById('7r3').checked) {
        document.getElementById('s7').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s7').style.marginLeft = "-75%";
       
    }
}
//СЛАЙДЕР 8
function changeHeat8() {
        
    if (document.getElementById('heat8').getAttribute("src")=='./img/heart1.svg') {
        document.getElementById('heat8').src = './img/heart2.svg';
    } else {
        document.getElementById('heat8').src = './img/heart1.svg';
    }
}

function validateKartochka8() {
    if (document.getElementById('8r1').checked) {
       
        document.getElementById('s8').style.marginLeft = "0";
    } else if (document.getElementById('8r2').checked) {
        document.getElementById('s8').style.marginLeft = "-25%";
        
    } else if (document.getElementById('8r3').checked) {
        document.getElementById('s8').style.marginLeft = "-50%";
        
    } else {
        document.getElementById('s8').style.marginLeft = "-75%";
       
    }
}




