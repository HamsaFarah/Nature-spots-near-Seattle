/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


const natureSpots = [ 
{name: "MOUNT RAINIER",
  image: "images/mount-rainier.jpg",
  location: "WASHINGTON",
  type: "MOUNTAIN",
  distance: 86
},
{name: "ALKI BEACH",
image: "images/alki-beach.jpg",
location: "SEATTLE",
type: "BEACH",
distance: 7
}, 
{name: "OLYMPIC NATIONAL PARK",
image: "images/olympic-national-park.jpg",
location: "PORT ANGELES",
type: "PARK",
distance: 199
},
{name: "RATTLESNAKE LEDGE",
image: "images/rattlesnake-ledge.jpg",
location: "NORTH BEND",
type: "LAKE",
distance: 10
},
{name: "LAKE WASHINGTON",
image: "images/lake-washington.jpg",
location: "MEDINA",
type: "LAKE",
distance: 10
},
{name: "SNOQUALMIE FALLS",
image: "images/snoqualmie-falls.jpg",
location: "SNOQUALMIE",
type: "WATERFALL",
distance: 30
},
{name: "MOUNT ST. HELENS",
image: "images/mount-st-helens.jpg",
location: "CASTLE ROCK",
type: "PARK",
distance: 189
},
{name: "HURRICANE RIDGE",
image: "images/hurricane-ridge.jpg",
location: "PORT ANGELES",
type: "MOUNTAIN",
distance: 212
},
{name: "WALLACE FALLS",
 image: "images/wallace-falls.jpg",
 location: "GOLD BAR",
 type: "WATERFALL",
 distance: 48
},
{name: "DECEPTION PASS",
 image: "images/deception-pass.jpg",
 location: "WHIDBEY ISLAND",
 type: "BEACH",
 distance: 83
},
{name: "CARKEEK PARK",
 image: "images/carkeek-park.jpg",
 location: "SEATTLE",
 type: "PARK",
 distance: 8
}, 
{name: "KUBOTA GARDEN",
 image: "images/kubota-garden.jpg",
 location: "SEATTLE",
 type: "GARDEN",
 distance: 10
},
{name: "LAKE UNION",
 image: "images/lake-union.jpg",
 location: "SEATTLE",
 type: "LAKE",
 distance: 3
}, 
{name: "MOUNT SI",
image: "images/mount-si.jpg",
location: "NORTH BEND",
type: "MOUNTAIN",
distance: 35,
},
{name: "KERRY PARK",
 image: "images/kerry-park.jpg",
 location: "SEATTLE",
 type: "PARK",
 distance: 3,
},
{name: "BRIDAL VEIL FALLS",
 image: "images/bridal-veil-falls.jpg",
 location: "INDEX",
 type: "WATERFALL",
 distance: 54,
}
];


let currentSpots = natureSpots.slice();
function showNatureSpots(natureSpots) {
  const cardContainer = document.getElementById("nature-spots-container");
  const templateCard = document.querySelector(".card");

  cardContainer.innerHTML = "";

  

  for (let i = 0; i < natureSpots.length; i++) {
    let spot = natureSpots[i];
    const nextCard = templateCard.cloneNode(true);
    editCardContent(nextCard, spot.name, spot.image, spot.location, spot.distance, spot.type)
    cardContainer.appendChild(nextCard); }
  }
    window.onload = function() {
      showNatureSpots(natureSpots);
    };
    
    function Filter(type, location, maxDistance){
      let filteredArray = [];
      for(let i = 0; i < natureSpots.length; i++){
        let spot = natureSpots[i];
        if(location.toUpperCase() != spot.location && location != "") continue;
        if(maxDistance != "" && spot.distance > maxDistance) continue;
        if(spot.type != type.toUpperCase() && type != "") continue;
        filteredArray.push(spot);
      }
      currentSpots = filteredArray;
      showNatureSpots(filteredArray);
    }
    
    function Search(name){
      let searchedArray = [];
      if (name != "") {
      for(let i = 0; i < natureSpots.length; i++){
        let spot = natureSpots[i];
        if(name.toUpperCase() != spot.name) continue;
        searchedArray.push(spot);
    }
  }
  currentSpots = searchedArray;
    showNatureSpots(searchedArray);
  }
  
  function Sort(){
    let sortedArray = currentSpots.sort((a,b) => a.distance - b.distance)
       showNatureSpots(sortedArray);
  }
function editCardContent(card, name, image, location, distance, type) {
card.style.display = "block";

const cardHeader = card.querySelector("h2");
cardHeader.textContent = name;

const cardImage = card.querySelector("img");
cardImage.src = image;
cardImage.alt = name + " Image";

const cardLocation = card.querySelector(".location");
cardLocation.textContent = location;

const cardDistance = card.querySelector(".distance");
cardDistance.textContent = distance;

const cardType = card.querySelector(".type");
cardType.textContent = type;

}
