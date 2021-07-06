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


let  conatainer = document.getElementsByClassName('.container');

let navItemOne = document.querySelector('.container header nav >:nth-child(1)');
navItemOne.textContent = siteContent["nav"]["nav-item-1"];
let navItemTwo = document.querySelector('.container header nav >:nth-child(2)');
navItemTwo.textContent = siteContent["nav"]["nav-item-2"];
let navItemTree = document.querySelector('.container header nav >:nth-child(3)');
navItemTree.textContent = siteContent["nav"]["nav-item-3"];
let navItemFour = document.querySelector('.container header nav >:nth-child(4)');
navItemFour.textContent = siteContent["nav"]["nav-item-4"];
let navItemFive = document.querySelector('.container header nav >:nth-child(5)');
navItemFive.textContent = siteContent["nav"]["nav-item-5"];
let navItemSix = document.querySelector('.container header nav >:nth-child(6)');
navItemSix.textContent = siteContent["nav"]["nav-item-6"];


let anchor = document.querySelectorAll('a');


let ctaH1 = document.querySelector('.cta .cta-text h1');

ctaH1.innerHTML = siteContent["cta"]["h1"];

let ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent["cta"]["img-src"];




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
// mainContentFeatH4.style.color = "green";

let mainContentFeatCont = document.querySelector('.main-content .top-content >:first-child >:last-child');
mainContentFeatCont.innerHTML = siteContent["main-content"]["features-content"];
// mainContentFeatCont.style.color = "green";
let aboutH4 = document.querySelector('.main-content .top-content >:last-child >:first-child');
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutContent = document.querySelector('.main-content .top-content >:last-child >:last-child');
aboutContent.innerHTML = siteContent["main-content"]["about-content"];


let botConServicesH4 = document.querySelector('.container .bottom-content >:nth-child(1) >:first-child');
botConServicesH4.textContent = siteContent["main-content"]["services-h4"];

let botConServicesContent = document.querySelector('.container .bottom-content >:nth-child(1) >:last-child');
botConServicesContent.textContent = siteContent["main-content"]["services-content"];

let botConProductH4 = document.querySelector('.container .bottom-content >:nth-child(2) >:first-child');
botConProductH4.textContent = siteContent["main-content"]["product-h4"];


let botConProductContent = document.querySelector('.container .bottom-content >:nth-child(2) >:last-child');
botConProductContent.textContent = siteContent["main-content"]["product-content"];

let botConVisionH4 = document.querySelector('.container .bottom-content >:nth-child(3) >:first-child');
botConVisionH4.textContent = siteContent["main-content"]["vision-h4"];


let botConVisionContent = document.querySelector('.container .bottom-content >:nth-child(3) >:last-child');
botConVisionContent.textContent = siteContent["main-content"]["vision-content"];



let navigation = document.querySelectorAll('.container header nav a');

navigation.forEach(a => {
  a.style.color = "green";
});

let navig = document.querySelector(".container header nav");

let portfolio = document.createElement("a");
portfolio.innerHTML = "Portfolio";
document.navig.appendChild(portfolio);

let projects = document.createElement('a');
projects.textContent = "Projects";
document.navig.prependChild(projects);


// var para = document.createElement("P");               // Create a <p> element
// para.innerText = "This is a paragraph";               // Insert text
// document.body.appendChild(para);                      // Append <p> to <body>