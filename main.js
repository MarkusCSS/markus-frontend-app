// Importovanje Swiper biblioteke
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import { singleGalleryObjects } from './generate.js'; 


window.onload=()=>{       
    // console.log('ucitavam single galleries');
     let cardFrame=document.getElementById('firstPageCardsFrame');
     let frameMainGrid= document.querySelector('.switch-to-single-gallery');
 
 
     
     for(let i=0;i<singleGalleryObjects.length;i++){   
     let singleGallery= document.createElement('div');
     let newCard = document.createElement('div');
      newCard.classList.add('col-12', 'ps-0', 'col-sm-6', 'col-md-6', 'col-lg-4');
      singleGallery.classList.add('single-gallery');
      
     
     
      newCard.innerHTML =`
     
                             <div class="card bg-light ">
                                 <p class="title-of-single-gallery ">${singleGalleryObjects[i].title}</p>
                                     <img class="img-fluid" src=${singleGalleryObjects[i].mainPicture} alt="">
                                
                             </div>
                         
      `;
     
     cardFrame.appendChild(newCard);
     
                          
      singleGalleryObjects[i].imgUrls.forEach(background=>{
           
           let frameBetween= document.createElement('div');
     let underGridDiv= document.createElement('div');
       if(background.animation=='Down')      frameBetween.classList.add(`${background.shape}`,'animate__animated',`animate__backIn${background.animation}`);
       if(background.animation=='Up')      frameBetween.classList.add(`${background.shape}`,'animate__animated',`animate__backIn${background.animation}`);
       if(background.animation=='Right')      frameBetween.classList.add(`${background.shape}`,'animate__animated',`animate__backIn${background.animation}`);
       if(background.animation=='Left')      frameBetween.classList.add(`${background.shape}`,'animate__animated',`animate__backIn${background.animation}`);
      underGridDiv.classList.add('under-grid-div');
      underGridDiv.style.backgroundImage = `url(${background.url})`;
      frameBetween.appendChild(underGridDiv);
      singleGallery.appendChild(frameBetween);
      });
      frameMainGrid.appendChild(singleGallery);
     }
     
     document.querySelector('.swiper-btn-contain-cover').addEventListener('click', () => {
         // Provera da li je kliknuto dugme
         
         if (window.innerWidth <= 900) {
             console.log('radi na prvu')
             let swiperSlides = document.querySelectorAll('.swiper-slide');
             
             // Iteracija kroz sve swiper-slide elemente
             swiperSlides.forEach(slide => {
                 // Promena veličine pozadine u zavisnosti od trenutnog stanja
                 if (getComputedStyle(slide).backgroundSize === 'cover') {
                     slide.style.backgroundSize = 'contain';
                     
                 } else {
                     slide.style.backgroundSize = 'cover';
                 }
             });
         } 
     });   
     
      setAllClickable();
     
     }  





















function adjustBtstrpCss() {
    if (window.innerWidth === 575) {
        let frame = document.querySelector('.col-12');
        let cards = document.querySelectorAll('.card');
        let frameWidth = frame.offsetWidth;
        let frameHeight = frame.offsetHeight;

        cards.forEach(card => {
            card.style.width = frameWidth + 'px';
            card.style.height = frameHeight + 'px';
        });
    } else {
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.width = ''; 
            card.style.height = ''; 
        });
    }
}
    const loadingAnimation =document.querySelector('.loadingAnimation');
    
    handleHeightOfPages();
    navBtn();
   
    setTimeout(()=>{
    loadingAnimation.style.display='none';
    document.querySelector('.main-frame').style.display='block';
    adjustBtstrpCss();
    },4000);

function navBtn(){  
    underscorePosition();
    let navItems = document.querySelectorAll('.nav-item');
    let navbarToggler = document.querySelector('.navbar-toggler');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            if (window.innerWidth<992){  
                setTimeout(()=>{
                    navbarToggler.click();
                },1000);
            
            }
        });
    });  
    
  setTimeout(()=>{
    const navbarItems = document.querySelectorAll('.nav-item');
   
    
    navbarItems.forEach(item => {
        item.style.transition = 'none'; 
        item.style.animation = 'none'; 
        item.style.opacity='1';
    });
    const navbarToggler = document.querySelector('.navbar-toggler');
    navbarToggler.style.animation = 'none';
    navbarToggler.style.opacity='1';
    const underscore = document.querySelector('.underscore');
   underscore.style.animationDuration='2s';
  /*  underscore.style.animation = 'none';
    underscore.style.opacity='1';*/
  },7000);

       
document.querySelectorAll('.nav-item').forEach(item=>{
    item.addEventListener('click',(e)=>{
        
    let underscore=document.querySelector('.underscore');
    let widthOfNavLink=document.querySelector('.nav-link').clientWidth;
    let navItemPaddingLeft = window.getComputedStyle(document.querySelector('.nav-item')).paddingLeft;
    let totalNavPadding =parseInt(navItemPaddingLeft);
        const href = e.target.getAttribute('data-');
         const mainSlidePages = document.querySelector('.moving-pages');
        if(href=='#about-me') document.querySelector('.adjust-size-mob').scrollTo(0, 0);
        if(href=='#contact') document.querySelector('.adjust-size-mob > div').scrollTo(0, 0);
        
         switch (href) {
            case '#galleries':
                mainSlidePages.style.left=0 + 'vw';
            if(window.innerWidth>990)  underscore.style.left=`${0 -  3 * widthOfNavLink -3 * totalNavPadding }px`; 
                break;
            case '#about-me':
                mainSlidePages.style.left='-100vw';
                if(window.innerWidth>990)   underscore.style.left=`${0 -  2 * widthOfNavLink - 3.5* totalNavPadding  }px`;
                break;
            case '#contact':
                mainSlidePages.style.left='-200vw';
                if(window.innerWidth>990)   underscore.style.left=`${0 -   widthOfNavLink +  totalNavPadding}px`;
                break;
          
        }
    });
});
}


function handleHeightOfPages(){
    
    let pages= document.querySelectorAll('.page');
    let navHeight= document.querySelector('.navbar').clientHeight;
   // console.log(pages,navHeight);
    pages.forEach(page=>{
        page.style.height=`calc(100vh - ${navHeight}px)`;
        page.style.marginTop=`${navHeight}px`;
    })
}
function underscorePosition(){
        
    let underscore=document.querySelector('.underscore');
    let widthOfNavLink=document.querySelector('.nav-link').clientWidth;
    let currentBottom = underscore.style.bottom;
    let currentLeft = underscore.style.left;
    let navItemPaddingLeft = window.getComputedStyle(document.querySelector('.nav-item')).paddingLeft;
    let totalNavPadding =parseInt(navItemPaddingLeft);
    underscore.style.width=`${widthOfNavLink -totalNavPadding*2}px`;
    underscore.style.bottom =`${currentBottom - 17}px`;
    underscore.style.left=`${currentLeft -  3 * widthOfNavLink -3* totalNavPadding }px`;
    
}
   //-------============########   SET THE ANIMATION ON SCROLL EVENT FOR CARDS ON THE MAIN PAGE  ######=========-------
   var x=1;
   
   let galleries= document.getElementById('galleries');
let galleryFrame= document.getElementById('gallery-frame');
galleries.addEventListener('wheel', function(event) {
    const deltaY = event.deltaY;
    const currentScrollTop = galleryFrame.scrollTop;
    const maxScrollTop = galleryFrame.scrollHeight - galleryFrame.clientHeight;
    
    let paramDirection;
    if (deltaY < 0 && currentScrollTop > 0) {
        galleryFrame.scrollTop -= Math.min(currentScrollTop, Math.abs(deltaY));
        event.preventDefault();
        paramDirection=true; 
        console.log('Scroll up',paramDirection);
        
    }
    
    else if (deltaY > 0 && currentScrollTop < maxScrollTop) {
        galleryFrame.scrollTop += Math.min(maxScrollTop - currentScrollTop, deltaY);
        event.preventDefault(); 
        paramDirection=false;
       console.log('Scroll down',paramDirection);
       
    }
   scrollAnimationCard(paramDirection);
});




function scrollAnimationCard(paramDirection) {
    if (window.innerWidth >= 992) {

        let cardsImgs = document.querySelectorAll('.card img');
        let imageGroups = [];
        let group = [];

        cardsImgs.forEach((cardImg, index) => {
            // Uzimanje dimenzija roditeljskog elementa (.card)
            const cardRect = cardImg.getBoundingClientRect();
            const parent = document.getElementById('gallery-frame');
            const parentRect = parent.getBoundingClientRect();
            const bottomDifference = cardRect.bottom - parentRect.bottom;
            const topDifference = cardRect.top - parentRect.top;

            // Razliku u visini prikažemo u procentima
            const heightDifferencePercentage = ((bottomDifference / parentRect.height) * 100).toFixed(2);
            const topDifferencePercentage = ((topDifference / parentRect.height) * 100).toFixed(2);

            // Dodamo trenutni element u grupu
            group.push({ index: index, heightDifference: heightDifferencePercentage, topDifference: topDifferencePercentage });

            // Ako je grupa napunjena ili smo došli do kraja niza, dodajemo grupu u imageGroups i resetujemo grupu
            if (group.length === 3 || index === cardsImgs.length - 1) {
                imageGroups.push(group);
                group = [];
            }
   });
   console.log(imageGroups.length);
  
   // Create a function for snap-scroll
   if(typeof paramDirection=='undefined'){
    x=imageGroups.length-1;
    document.getElementById('gallery-frame').scrollTo(0, 550*x);
   } else{
    if(!paramDirection) {
    
        document.getElementById('gallery-frame').scrollTo(0, 550*x);
        if(x<imageGroups.length-1  ) {
            x++;
        } else if(x==0){
           
            x=1;
        } else{
            x=0;
        }
        console.log(paramDirection);
        console.log(x)
         
       }else if (paramDirection) {
        if(x==0){
            x=imageGroups.length-2;
            document.getElementById('gallery-frame').scrollTo(0, 550*x);
            
           } else{
            x--;
            document.getElementById('gallery-frame').scrollTo(0, 550*x);
           }
           
         console.log(paramDirection);
         console.log(x)
       
       } 
   }


  
  
}
 
} 






setInterval(() => {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let text = `&nbsp;&nbsp;All rights reserved`;
    
    // Kreiranje novog span elementa za tekst "All rights reserved"
    let textSpan = document.createElement('span');
    textSpan.innerHTML = text;
    textSpan.style.fontSize = '.7rem';
    
    let footerText = `Copyright&copy; MarkArt ${year} ${textSpan.outerHTML}`;
    
    // Selektovanje elemenata sa klasom `.end` unutar elemenata sa klasom `.page`
    let footerTextElements = document.querySelectorAll('.page .end');
    
    // Postavljanje istog footer teksta za svaki od tih elemenata
    footerTextElements.forEach(element => {
        element.innerHTML = footerText;
    });
}, 1000);


function setUnderscore(){
  let active = document.querySelector('.nav-item.active a');
  let data= active.getAttribute('data-');
 let underscore = document.querySelector('.underscore')
  let widthOfNavLink =document.querySelector('.nav-link').clientWidth;
  let navItemPaddingLeft = window.getComputedStyle(document.querySelector('.nav-item')).paddingLeft;
    let totalNavPadding =parseInt(navItemPaddingLeft);
  if(data=='#galleries') {
  //  console.log('Galleries')
    underscore.style.left=`${0 -  3 * widthOfNavLink -3* totalNavPadding }px`;
}
  if(data=='#about-me') {
  // console.log('aboutMe')
    underscore.style.left=`${0 -  2 * widthOfNavLink -3.5 * totalNavPadding }px`;
}
  if(data=='#contact') {
   
  //  console.log('contact')
    underscore.style.left=`${0 -   widthOfNavLink + totalNavPadding }px`;
}
}
function backToContain(){
    let swiperSlides = document.querySelectorAll('.swiper-slide');
    if (window.innerWidth > 900) {
        
        swiperSlides.forEach(slide => {
           slide.style.backgroundSize='contain';
        });
    } else{
        swiperSlides.forEach(slide => {
            slide.style.backgroundSize='cover';
         });
    }
}

function setAllClickable(){  
document.querySelectorAll('.card.bg-light').forEach((card,index)=>{
    let backBtn = document.getElementById('back-from-single-to-galleries');
    card.addEventListener('click',(e)=>{
       console.log(index);
     let allGaleries =  document.querySelectorAll('.single-gallery');
     allGaleries.forEach(gallery=>gallery.style.display='grid');
     for(let i=0;i<allGaleries.length;i++){
       if(i!=index) allGaleries[i].style.display='none';
     }
       
       document.querySelector('.wrapper-main-galleries').style.display='none';
       document.querySelector('.switch-to-single-gallery').style.display='block';
       document.querySelector('#gallery-frame').style.width='100%';
       document.querySelector('#gallery-frame').style.marginTop='50px';
       document.querySelector('#gallery-frame').style.marginLeft='0px';
       document.querySelector('nav').style.display='none';
       handleHeightOfPages();
       backBtn.style.display='block';
       document.querySelector('#gallery-frame').scrollTo(0,0);
    });
 
   
    backBtn.addEventListener('click',()=>{
       document.querySelector('.wrapper-main-galleries').style.display='block';
       document.querySelector('.switch-to-single-gallery').style.display='none';
       document.querySelector('#gallery-frame').style.width='';
       document.querySelector('#gallery-frame').style.marginTop='';
       document.querySelector('#gallery-frame').style.marginLeft='';
       backBtn.style.display='none';
       document.querySelector('nav').style.display='block';
       document.getElementById('slider-off-btn').style.display='none';
       document.getElementById('slider').style.display='none';
       document.getElementById('galleries').style.backgroundColor='';
       document.getElementById('galleries').style.color='';
       document.querySelector('#galleries span').style.color='';
       document.querySelectorAll('.card img').forEach(img=>{
        img.classList.remove('.animate-out-left');
        img.classList.add('animate-in-left');
        img.parentNode.style.opacity='1';
    });
       handleHeightOfPages();
       setUnderscore();
      
    })
 });


 let allGaleries =  document.querySelectorAll('.single-gallery ');
     allGaleries.forEach((gallery,index)=>{
            gallery.addEventListener('click',(e)=>{
               // console.log(e.target.parentNode.parentNode)//pronadjena .sinle-gallery za swiper
                setImgIntoSlider(e.target)
                document.getElementById('slider-off-btn').style.display='block';
                document.getElementById('galleries').style.backgroundColor='white';
                document.getElementById('galleries').style.color='black';
                document.querySelector('#galleries span').style.color='black';
                document.querySelectorAll('.swiper-slide').forEach(single=>single.style.backgroundColor='transparent')
                document.getElementById('galleries').style.color='white';
                document.getElementById('slider').style.display='flex';
                document.querySelector('.switch-to-single-gallery').style.display='none';
                document.querySelector('#gallery-frame').style.width='103%';
                document.querySelector('#gallery-frame').style.marginLeft='-22px';
               
            });

            document.querySelector('.swiper-btn-contain-cover').addEventListener('click', () => {
                // Provera da li je kliknuto dugme
                
                if (window.innerWidth <= 900) {
                    console.log('radi na prvu')
                    let swiperSlides = document.querySelectorAll('.swiper-slide');
                    
                    // Iteracija kroz sve swiper-slide elemente
                    swiperSlides.forEach(slide => {
                        // Promena veličine pozadine u zavisnosti od trenutnog stanja
                        if (getComputedStyle(slide).backgroundSize === 'cover') {
                            slide.style.backgroundSize = 'contain';
                            
                        } else {
                            slide.style.backgroundSize = 'cover';
                        }
                    });
                } 
            });   
           


            if(document.getElementById('slider-off-btn')){   
            document.getElementById('slider-off-btn').addEventListener('click',()=>{
             document.getElementById('slider-off-btn').style.display='none';
             document.getElementById('slider').style.display='none';
             document.querySelector('.switch-to-single-gallery').style.display='block';
             document.querySelector('#gallery-frame').style.width='100%';
                document.querySelector('#gallery-frame').style.marginLeft='0px';
                document.getElementById('galleries').style.backgroundColor='';
                document.getElementById('galleries').style.color='';
                document.querySelector('#galleries span').style.color='';
                
            });
          }
          
     });

          

     document.addEventListener('keydown', function (event) {
        
        // Provjeravamo je li pritisnuta tipka lijevo
        if (event.key === 'ArrowLeft') {
            
                swiper.slidePrev(); // Pomičemo se na prethodni slajd samo ako animacija nije u tijeku
                
        }
        // Provjeravamo je li pritisnuta tipka desno
        else if (event.key === 'ArrowRight') {
            
                swiper.slideNext(); // Pomičemo se na sljedeći slajd samo ako animacija nije u tijeku
                
        }
    });

    }



    var swiper;
     function swiperInit() {
        // Uništite prethodni swiper ako postoji
        if (swiper )  swiper.destroy();
        
        
    
        // Ponovo inicijalizujte swiper
        swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: '.swiper-pagination',
            effect: 'coverflow',
            grabCursor: true,
            centeredSlide: true,
            slidesPerView: 'auto',
            coverflow: {
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
            },
            loop: true,
            slidesPerView: 3,
            slidesPerGroup: 1,
            speed: 500,
           
        });
    }
   

    
    function setImgIntoSlider(img) {
        
        let swiperWrapper = document.querySelector('.swiper-wrapper');
        swiperWrapper.innerHTML = '';
        console.log(img);
        let imgUrlCurrent = getComputedStyle(img).getPropertyValue('background-image');
        let current = imgUrlCurrent.slice(4, -1).replace(/"/g, "");
        console.log(current);
    
        let siblingUrls = [];
        img.parentNode.parentNode.querySelectorAll('.under-grid-div').forEach(backgroundImg => {
            if (backgroundImg !== img.parentNode) {
                let backgroundUrl = getComputedStyle(backgroundImg).getPropertyValue('background-image');
                let imageUrl = backgroundUrl.slice(4, -1).replace(/"/g, "");
                siblingUrls.push(imageUrl);
            }
        });
    
        // Pronađi indeks trenutne slike u nizu
        let currentIndex = siblingUrls.indexOf(current);
        if (currentIndex !== -1 && currentIndex !== 1) {
            // Premesti trenutnu sliku na drugo mesto u nizu
            siblingUrls.splice(1, 0, siblingUrls.splice(currentIndex, 1)[0]);
        }
    
        // Kreirajte niz objekata slika
        let images = siblingUrls.map(imageUrl => {
            let imgObj = new Image();
            imgObj.src = imageUrl;
            return imgObj;
        });
    
        // Čekajte da se sve slike učitaju
        Promise.all(images.map(image => {
            return new Promise(resolve => {
                image.onload = () => resolve();
            });
        })).then(() => {
            // Kada su sve slike učitane, dodajte ih u swiper-wrapper sa odgovarajućim dimenzijama
            siblingUrls.forEach((imageUrl, index) => {
                    let divSwiperSlider = `<div class="swiper-slide" style="background-image: url(${imageUrl}); "></div>`;
                    swiperWrapper.innerHTML += divSwiperSlider;

                   
            });
            
            swiperInit(); // Ponovo inicijalizujte swiper kada su svi slajdovi dodati
           
        });
        
    }
    
   
    
   
    
   
/*========######## GENERISANJE DOM CARD; SINGLE GALLERY #########========*/ 

    

    window.addEventListener('resize',()=>{
   
        
        handleHeightOfPages();
        underscorePosition();
        adjustBtstrpCss();
        navBtn();
        setUnderscore();
        backToContain();
       
        });





        