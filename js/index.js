const siteContent = {
    nav: {
        'nav-item-1': 'Services',
        'nav-item-2': 'Product',
        'nav-item-3': 'Vision',
        'nav-item-4': 'Features',
        'nav-item-5': 'About',
        'nav-item-6': 'Contact',
        'img-src': 'img/logo.png'
    },
    cta: {
        h1: 'DOM Is Awesome',
        button: 'Get Started',
        'img-src': 'img/header-img.png'
    },
    'main-content': {
        'features-h4': 'Features',
        'features-content': 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'about-h4': 'About',
        'about-content': 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'middle-img-src': 'img/mid-page-accent.jpg',
        'services-h4': 'Services',
        'services-content': 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'product-h4': 'Product',
        'product-content': 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
        'vision-h4': 'Vision',
        'vision-content': 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
    },
    contact: {
        'contact-h4': 'Contact',
        address: '123 Way 456 Street Somewhere, USA',
        phone: '1 (888) 888-8888',
        email: 'sales@greatidea.io'
    },
    footer: {
        copyright: 'Copyright Great Idea! 2018'
    }
};

// HEADER SECTION
// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// WORK STARTS HERE

// Create elements
let prependChild = document.createElement('a');
let appendChild = document.createElement('a');

// select parent
let nav = document.querySelector('nav');

// attach children
nav.prepend(prependChild);
nav.appendChild(appendChild);

// select a tags
let aTags = document.querySelectorAll('a');

// use forEach to loop over aTag nodelist for textContent and Style
aTags.forEach((element, index) => {
    element.textContent = siteContent.nav['nav-item-' + index];
    element.style.color = 'green';
});

prependChild.textContent = 'Prepend';
appendChild.textContent = 'Append';

// Header Section
document.querySelector('.cta h1').textContent = siteContent.cta.h1;
document.querySelector('.cta button').textContent = siteContent.cta.button;
document.getElementById('cta-img').src = siteContent.cta['img-src'];

// BODY SECTION

// Destructure Object
let { 'features-h4': features, 'features-content': fContent, 'about-h4': about, 'about-content': aContent, 'middle-img-src': middleImgSRC, 'services-h4': services, 'services-content': sContent, 'product-h4': product, 'product-content': pContent, 'vision-h4': vision, 'vision-content': vContent } = siteContent['main-content'];
// console.log(features);

let bodyH4 = document.querySelectorAll('h4');
bodyH4[0].textContent = features;
bodyH4[1].textContent = about;
bodyH4[2].textContent = services;
bodyH4[3].textContent = product;
bodyH4[4].textContent = vision;

document.getElementById('middle-img').src = middleImgSRC;

let bodyP = document.querySelectorAll('p');
bodyP[0].textContent = fContent;
bodyP[1].textContent = aContent;
bodyP[2].textContent = sContent;
bodyP[3].textContent = pContent;
bodyP[4].textContent = vContent;

// Contact
// I could continue to just use the bodyH4 and bodyP nodeList, but I'm going to use more selectors
let contactH4 = (document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']);
let contactP = document.querySelectorAll('.contact p');

// split address into 2 strings
let address1 = siteContent.contact.address.substring(0, 18);
let address2 = siteContent.contact.address.substring(19, 33);

// 1. Use white-space css + /n to make line break
let newAddress = address1 + '\n' + address2;
contactP[0].textContent = newAddress;
contactP[0].style.whiteSpace = 'pre';

// 2. Using innerHTML to add a <br/>
// contactP[0].innerHTML = address1 + "<br/>" + address2;

// 3. Creating a new element and appending it
// let address2Element = document.createElement('div');
// address2Element.textContent = address2;
// contactP[0].appendChild(address2Element);

contactP[1].textContent = siteContent.contact.phone;
contactP[2].textContent = siteContent.contact.email;

// FOOTER SECTION

document.querySelector('footer p').textContent = siteContent.footer.copyright;
