var imageArray = [
    "img/1.jpg",		
    "img/2.jpg",		
    "img/3.jpg",		
    "img/4.jpg",		
    "img/5.jpg"					
];
window.number = '0';

var imageCount = imageArray.length;		
function image(num){				
 
    if(num == 1){
       
        if(number < imageCount - 1){						
            number++;
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }

        else {
            number = 0;
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }
    }					 
    else{  				
 
        if(number > 0){						
            number--;
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }

        else {
            number = 4;
            document.getElementById('images').src = imageArray[number];
            document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
        }
    }
}				

function btn_show(){
    if(number == 0) {
        document.getElementById('left').style.display='block'; 
    }
    else {
        document.getElementById('left').style.display='block';
    }

    if(number == imageCount - 1) {
        document.getElementById('right').style.display='block';
    }
    else {
        document.getElementById('right').style.display='block';
    }

}				
function btn_noshow(){
    document.getElementById('left').style.display='none';
    document.getElementById('right').style.display='none';
}
document.write('<img id="images" src="' + imageArray[0] + '">');