const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
// Question 1
// let head = document.getElementsByTagName('head');

// let body = document.getElementsByTagName('body');

let  conatainer = document.getElementsByClassName('.container');


let navigation = document.querySelector('.container header nav');

let anchor = document.querySelectorAll('a');

// let logo = document.querySelector('#logo-img');  // ID selection 

// logo.src = siteContent[nav]["img-src"]; // updating  the src attribute of logo image

let ctaH1 = document.querySelector('.cta .cta-text h1');

ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent["cta"]["img-src"];


// let mainContent = document.querySelector('.main-content');

// let topContent = document.querySelector('.top-content');

// let textContent = document.querySelector('.text-content');

let middleImage = document.getElementById('middle-img');

// middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);
middleImage.src = siteContent["main-content"]["middle-img-src"];

let bottomContent = document.querySelector('.bottom-content');


let contactH4 = document.querySelector('.contact > :nth-child(1)'); 
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactAddress = document.querySelector('.contact > :nth-child(2)');
contactAddress.textContent = siteContent["contact"]["address"];

  
let contactPhone = document.querySelector('.contact > :nth-child(3)');
contactPhone.innerHTML = siteContent["contact"]["phone"];

let contactEmail = document.querySelector('.contact > :last-child');
contactEmail.innerHTML = siteContent["contact"]["email"];


let footer = document.querySelector('footer'); // tag name selection 
footer.textContent = siteContent["footer"]["copyright"];


let mainContentFeatH4 = document.querySelector('.main-content .top-content >:first-child >:first-child');
mainContentFeatH4.innerHTML = siteContent["main-content"]["features-h4"];

let mainContentFeatCont = document.querySelector('.main-content .top-content >:first-child >:last-child');
mainContentFeatCont.innerHTML = siteContent["main-content"]["features-content"];

let aboutH4 = document.querySelector('.main-content .top-content >:last-child >:first-child');
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector('.main-content .top-content >:last-child >:last-child');
aboutContent.innerHTML = siteContent["main-content"]["about-content"];

// main-content": {
//     "features-h4":"Features",
//     "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "about-h4":"About",
//     "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "middle-img-src": "img/mid-page-accent.jpg",
//     "services-h4":"Services",
//     "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "product-h4":"Product",
//     "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//     "vision-h4":"Vision",
//     "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
//   },