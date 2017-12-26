
//add to cart button
document.getElementById('cart').addEventListener('click', function(){

    alert('Element added to the cart');
})

//expanded and collapsed text

var arrow = function (name,expanded){
    this.element=document.getElementById(name);
    this.element.src = 'assets/arrow-collapsed.png';
    this.expanded=expanded;
}

var arrow1 = new arrow ('arrow-1',false);
var arrow2 = new arrow ('arrow-2',false);
var arrow3 = new arrow ('arrow-3',false);

document.getElementById('text-1').addEventListener ('click',function(){exp_collap(arrow1,1)});
document.getElementById('text-2').addEventListener ('click',function(){exp_collap(arrow2,2)});
document.getElementById('text-3').addEventListener ('click',function(){exp_collap(arrow3,3)});

function exp_collap(arrow,number){

   var header = document.getElementById('header-' + number);
   var par = document.getElementById('paragraph-' + number);

   par.classList.toggle('no-show');

    if (arrow.expanded){
        arrow.element.src = 'assets/arrow-collapsed.png';
        arrow.expanded = false;
        header.textContent = 'collapsed';
       } 
       else {
        arrow.element.src = 'assets/arrow-expanded.png';
           arrow.expanded = true;
           header.textContent = 'expanded';
       }
}

//Apron images 

var apron = function (character){
    this.element=this.element=document.getElementById('small-' + character);
    this.character=character;
}

var small1 = new apron('a');
var small2 = new apron('b');
var small3 = new apron('c');
var small4 = new apron('d');

document.getElementById('small-a').addEventListener('click',function(){change_image(small1,'a')});
document.getElementById('small-b').addEventListener('click',function(){change_image(small2,'b')});
document.getElementById('small-c').addEventListener('click',function(){change_image(small3,'c')});
document.getElementById('small-d').addEventListener('click',function(){change_image(small4,'d')});

function change_image(small,character){

    var large = document.getElementById('img-large');

    large.src = ('assets/product-large-' + character + '.jpg');

    document.getElementById('small-a').classList.remove('picture-border');
    document.getElementById('small-b').classList.remove('picture-border');
    document.getElementById('small-c').classList.remove('picture-border');
    document.getElementById('small-d').classList.remove('picture-border');

    small.element.classList.add('picture-border');
}


