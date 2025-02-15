const today = new Date();
document.getElementById("currentYear").innerHTML = `©️ ${today.getFullYear()} | Murilo Luiz Hernandes | Idaho`;
document.querySelector("#lastModified").textContent = `Last Modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const title = document.querySelector(".title");
const header = document.querySelector("header");

hamButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  hamButton.classList.toggle("open");
  title.classList.toggle("open");
  header.classList.toggle("open");
});

const templesList = document.querySelector(".temples-container");

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-5206-thumb.jpg",
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sao-paulo-brazil-temple/sao-paulo-brazil-temple-46816-thumb.jpg",
  },
  {
    templeName: "Teton River Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "Construction in progress",
    area: 100000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/teton-river-idaho-temple/teton-river-idaho-temple-45310-thumb.jpg",
  },
  {
    templeName: "Jordan River Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "1981, November, 16",
    area: 148236,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-thumb.jpg",
  },
  {
    templeName: "Oquirrh Mountain Utah",
    location: "South Jordan, Utah, United States",
    dedicated: "2009, August, 21",
    area: 60000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-39513-thumb.jpg",
  }
];

createTempleCard(temples);

function createTempleCard(filteredTemples) {
  document.querySelector(".temples-container").innerHTML = "";
  filteredTemples.forEach(temple => {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("h3");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

    let dedication = document.createElement("p");
    dedication.innerHTML = `<span class="label">Dedicated: </span> ${temple.dedicated}`;
    
    let area = document.createElement("p");
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    
    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    img.width = 500;
    img.height = 250;

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector(".temples-container").appendChild(card);
  });
}

const homeLink = document.querySelector("#home");
homeLink.addEventListener("click", () => {
  createTempleCard(temples);
});

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
  const oldTemples = temples.filter(temple => {
    const dedicatedDate = Date.parse(temple.dedicated);
    return dedicatedDate < new Date(1900, 0, 1);
  });
  createTempleCard(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
  const newTemples = temples.filter(temple => {
    const dedicatedDate = Date.parse(temple.dedicated);
    return dedicatedDate > new Date(2000, 0, 1);
  });
  createTempleCard(newTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
  const largeTemples = temples.filter(temple => {
    return temple.area > 90000;
  });
  createTempleCard(largeTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
  const smallTemples = temples.filter(temple => {
    return temple.area < 10000;
  });
  createTempleCard(smallTemples);
});