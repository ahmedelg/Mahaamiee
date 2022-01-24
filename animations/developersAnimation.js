const path = "./assets/imgs/developers/";
const developers = [
  { name: "ahmed algaied", imagePath: "algaied.JPG" },
  {
    name: "fabio nelli",
    imagePath: "Fabio.JPG"
  }
];

// DEFAULT DEVELOPERS0 COME FIRST
currentDisplayedDeveloper = 0;

const animateDeveloperImg = document.getElementById("animateDeveloperImg");
const animateDeveloperName = document.getElementById("animateDeveloperName");
const animateDevelopers = () => {
  setInterval((vnt) => {
    // console.log("Change developer's name & image");
    // CHECK IF EXCEEDS THE LAST INDEX
    if (currentDisplayedDeveloper > developers.length - 1) {
      // 3 > (2)
      // RESTART DISPLAYING DEVELOPERS
      currentDisplayedDeveloper = 0;
    }

    animateDeveloperImg.style.background = `url(${
      path + developers[currentDisplayedDeveloper].imagePath
    })`;

    // `url(${path + developers[currentDisplayedDeveloper].imagePath})`
    animateDeveloperName.innerText = developers[currentDisplayedDeveloper].name;

    currentDisplayedDeveloper++;
  }, 3000);
};
// START ANIMATE DEVELOPERS
animateDevelopers();
// ./assets/imgs / developers / algaied.JPG
// $0.style.background ='url(./assets/imgs/developers/algaied.JPG)'
