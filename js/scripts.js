// Business Logic
function Foodfinder(type, location, lat, long, truck, image) {
  this.type = type;
  this.location = location;
  this.lat = lat;
  this.long = long;
  this.truck = truck;
  this.img = image;
}
function randomNumberGenerator(length) {
    return Math.floor(Math.random() * (length));
}
var smallPharaoh = new Foodfinder("Middle Eastern","1900 SW 4th Ave",'45.520772', '-122.676335', "Small Pharaoh", "");
var dumpTruck = new Foodfinder("asian","1071 SW Alder St",'45.520949', '-122.682212', "The Dump Truck");
var laPinataTakos = new Foodfinder("Mexican", "SW 3rd & Ash",'45.5221111', '-122.6731111', "La Pinata Takos");
var koiFusion = new Foodfinder("Asian", "2010 W Burnside",'45.523034', '-122.692822', "Koi Fusion");
var altengartz = new Foodfinder("American", "SW 10th & Alder",'45.520697', '-122.681491',"Altengartz");
var esanthai = new Foodfinder("asian", "SW 10th & Alder", '45.520928',' -122.681479',"E-San Thai Cart");
var traditionalpolish = new Foodfinder("american", "SW 10th & Alder",'45.520853',' -122.681507',"Traditional Polish Cuisine");
var numberOneBento = new Foodfinder("asian", "SW 10th & Alder",'45.520813', '-122.681513', "Number 1 Bento");
var wolfandbear = new Foodfinder("american", "SW 10th & Washington",'45.521173',' -122.681429', "Wolf and Bear");
var zendako = new Foodfinder("asian","SW 10th & Washington",'45.521126', '-122.681202', "Zendako");
var bingMi = new Foodfinder("asian","SW 9th & Alder",'45.520533', '-122.680810', "Bing Mi");
var baghdadiraqi =  new Foodfinder("middleastern","SW 10th & Washington",'45.521192', '-122.681206', "Baghdad Iraqi Grill");
var sawasdeeThai = new Foodfinder("asian","SW 9th & Alder",'45.520593', '-122.680961', "Sawasdee Thai");
var theFryingScotsman = new Foodfinder("American","SW 9th & Alder", '45.520766', '-122.680722',"The Frying Scotsman");
var marcoPoloSandwiches = new Foodfinder("American","SW 9th & Washington",'45.520874', '-122.680625', "Marco Polo's Sandwiches");
var rollingGourmetFusion = new Foodfinder("asian","SW 9th & Washington",'45.521005', '-122.680851', "Rolling Gourmet Fusion");
var samsSaj = new Foodfinder("middleastern","SW 10th & Washington",'45.521127', '-122.681345', "Sam's Saj");
var titosBurritos = new Foodfinder("mexican", "SW 9th & Alder",'45.520662', '-122.681330', "Tito's Burritos");
var wholeBowl = new Foodfinder("american","SW 9th & Alder",'45.520560', '-122.681098', "The Whole Bowl");
var gyroPlace = new Foodfinder("middleastern","SW 10th & Washington",'45.520499', '-122.680814', "Gyro King");
var euroDish = new Foodfinder("american", "SW 10th & Alder", '45.520730', '-122.681646',"Eurodish");
var nongsKhao =  new Foodfinder("asian","SW 10th & Alder", '45.520809', '-122.682025',"Nong's Khao Man Gai");
var annaThaiBasil = new Foodfinder("asian", "SW 10th & Alder", '45.520807', '-122.681595',"Anna Thai Basil");
var alMawj = new Foodfinder("middleastern","SW 10th & Alder",'45.520898', '-122.681554', "Al Mawj");
var grilledCheeseGrill =  new Foodfinder("american","SW 10th & Alder",'45.521039','-122.681393', "The Grilled Cheese Grill");
var chezDodo = new Foodfinder("Asian","427 SW Stark St", '45.520716', '-122.675988', "Chez Dodo");
var caribbeanKitchen = new Foodfinder("American","429 SW Stark St", '45.520739', '-122.676055', "Caribbean Kitchen");
var kingslandKitchen = new Foodfinder("American","SW Oak & 5th",' 45.521267', '-122.675605', "Kingsland Kitchen");
var laJarochita = new Foodfinder("Mexican","SW 5th Ave & Stark St", '45.521295', '-122.676080', "La Jarochita");
var veliThai = new Foodfinder("Asian", "335 SW 5th Ave",'45.520946', '-122.676276', "Veli Thai");
var stumptownSliders = new Foodfinder("American", "410 SW Oak St",'45.521286', '-122.675670', "Stumptown Sliders");
var donPedro = new Foodfinder("Mexican","340 SW 5th", '45.521009', '-122.676201', "Don Pedro");
var broDogs = new Foodfinder("Americans","340 SW 5th Ave", '45.521142', '-122.676108', "Bro-Dogs");
var babylonIraqi = new Foodfinder("Middle Eastern","340 SW 5th Ave", '45.520739', '-122.676055', "Babylon Iraqi");
var koreanTwist = new Foodfinder("Asian","SW 5th Ave & Oak St", '45.521324', '-122.676041', "Korean Twist");
var realTasteOfIndia = new Foodfinder("Middle Eastern","111 SW 5th Ave", '45.520881', '-122.676298', "Real Taste of India");
var steaksFifthAvenue = new Foodfinder("American","SW 5th & Oak", '45.521192', '-122.676125', "Steaks Fifth Avenue");
var hawaiianGrill = new Foodfinder("American","SW 5th And Stark", '45.520950', '-122.676247', "Hawaiian Grill");
var schnitzelwich = new Foodfinder("American","433 SW Stark St", '45.520753', '-122.676164', "Schnitzelwich");
var keeMaoThai = new Foodfinder("Asian","", '45.521353', '-122.676048', "Kee Mao Thai Food Cart");
var thaiSky = new Foodfinder("Asian","340 SW 5th Ave", '45.521371', '-122.676030', "Thai Sky");
var wagsyHotBeef = new Foodfinder("American","SW 5th And Oak St", '45.521314', '-122.675734', "Wagsy's Hot Beef Sandwiches");
var khobKhun = new Foodfinder("Middle Eastern","SW 5th Ave & Stark St",'45.521048', '-122.676142', "Khob Khun");
var pretzelBakery = new Foodfinder("American","SW 5th Ave", '45.521153', '-122.676157', "Portland Pretzel Bakery");
var shawarmaStar = new Foodfinder("Middle Eastern","324 SW 5th Ave", '45.521242', '-122.676112', "Shawarma Star");
var banMi = new Foodfinder("Asian","324 SW 5th Ave", '45.520795', '-122.676225', "Condenz Banh Mi");
var moonlightMediterranean = new Foodfinder("Middle Eastern","232 SW Stark Ave", '45.520182','-122674344', "232 SW Stark Ave", "Moonlight Mediterranean Food");
var mamaChowsKitchen = new Foodfinder("Asian", "300 SW 2nd Ave", '45.520244','-122.673548', "Mama Chow's Kitchen");
var donJalapeno = new Foodfinder("Mexican", "421 SW 3rd Ave", '45.519927','-122.674522', "Don Jalapeno");
var theFrenchToastConnection = new Foodfinder("American", "321 SW 2nd Ave", '45.520053','-122.673494', "The French Toast Connection");
var dcVegetarian = new Foodfinder("American", "430 SW 3rd Ave", '45.519788','-122.674083', "DC Vegetarian");
var elmasry = new Foodfinder("Middle Eastern", "SW 3rd Ave & SW Washington St", '45.519926','-122.674461', "Elmasry");
var culturedCaveman = new Foodfinder("American", "SW 3rd Ave & Stark Ave", '45.520119','-122.674168', "Cultured Caveman");
var honeyThaiFood = new Foodfinder("Asian", "232 SW Washington Street",' 45.519583','-122.674507', "Honey Thai Food");
var elPilon = new Foodfinder("Mexican", "SW 2nd & Oak", '45.520442','-122.673216', "El Pilon");
var phatBlueBuddha = new Foodfinder("Middle Eastern", "498 SW 3rd Ave", '45.519598','-122.674680', "Phat Blue Buddha");
var casablancaCuisine = new Foodfinder("Middle Eastern", "426 SW 3rd Ave", '45.520042','-122.674501', "Casablanca Cuisine");
var welcomeToMediterraneanCuisine = new Foodfinder("Middle Eastern", "426 SW 3rd Ave", '45.520042','-122.674533', "Welcome to Mediterranean Cuisine");
var taqueriaVillanueva = new Foodfinder("Mexican", "SW 3rd Ave And Sw Oak St", '45.521057','-122.674080', "Taqueria Villanueva");
var rayaMiddleEastFood = new Foodfinder("Middle Eastern", "400-446 SW 3rd Ave", '45.520218','-122.674437', "Raya Middle East Food");
var friendlyFood = new Foodfinder("Middle Eastern", "421-429 SW 2nd Ave", '45.519672','-122.674699', "Friendly Food");
var asianStation = new Foodfinder("Asian", "SW Oak St", '45.520394','-122.673418', "Asian Station");
var justThai = new Foodfinder("Asian", "SW 3rd & Stark", '45.520435','-122.674455', "Just Thai");
var buddyBearTartHouse = new Foodfinder("American", "432 SW 3rd Ave", '45.520133','-122.674389', "Buddy Bear Tart House");

var directory = [chezDodo, dumpTruck, caribbeanKitchen, kingslandKitchen, laJarochita, veliThai, stumptownSliders, donJalapeno, broDogs, babylonIraqi, koreanTwist, realTasteOfIndia, steaksFifthAvenue, hawaiianGrill, schnitzelwich, keeMaoThai, thaiSky, wagsyHotBeef, khobKhun, pretzelBakery, shawarmaStar, banMi, smallPharaoh, laPinataTakos, koiFusion, altengartz, esanthai, traditionalpolish, numberOneBento, wolfandbear, zendako, bingMi, baghdadiraqi, sawasdeeThai, theFryingScotsman, marcoPoloSandwiches, rollingGourmetFusion, samsSaj, titosBurritos, wholeBowl, gyroPlace, euroDish, nongsKhao, annaThaiBasil, alMawj, grilledCheeseGrill, buddyBearTartHouse, justThai, asianStation, friendlyFood, rayaMiddleEastFood, taqueriaVillanueva, welcomeToMediterraneanCuisine, casablancaCuisine, phatBlueBuddha, elPilon, honeyThaiFood, culturedCaveman, elmasry, dcVegetarian, theFrenchToastConnection, donJalapeno, mamaChowsKitchen, moonlightMediterranean];

var numberRan = randomNumberGenerator(directory.length);
alert(numberRan);
console.log(directory[numberRan]);

var asian=[];
var userinput = "Asian";

for(i=0; i<directory.length; i++){
  if(directory[i].type === userinput)
  asian.push(directory[i]);
}


console.log(asian);
var numberRan = randomNumberGenerator(asian.length);
alert(numberRan);
console.log(asian[numberRan]);

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(asian[numberRan].lat,asian[numberRan].long);
  var mapOptions = {center: myCenter, zoom: 10};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "pinkball.png"
  });
  marker.setMap(map);
}


console.log(asian);
var numberRan = randomNumberGenerator(asian.length);
alert(numberRan);
console.log(asian[numberRan]);

function myMap() {
  var mapCanvas = document.getElementById("map");
  var myCenter = new google.maps.LatLng(asian[numberRan].lat,asian[numberRan].long);
  var mapOptions = {center: myCenter, zoom: 10};
  var map = new google.maps.Map(mapCanvas,mapOptions);
  var marker = new google.maps.Marker({
    position: myCenter,
    icon: "pinkball.png"
  });
  marker.setMap(map);
}












// UI Logic
$(document).ready(function(){
    $(".btn").click(function(){
        $("#myModal").modal('show');
    });
});
//
//
//
//
//
// });
