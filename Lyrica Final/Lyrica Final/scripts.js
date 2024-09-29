
/**********************************  SECTION 1 **********************************/

let map = [];

map[0] = "An ancient castle, guarded by a dragon.";
map[1] = "A dark cave.";
map[2] = "A misty forest.";
map[3] = "A tall mountain.";
map[4] = "The foothills of a volcano.";
map[5] = "Your home village.";
map[6] = "A park.";
map[7] = "A tundra.";
map[8] = "The desert.";
map[9] = "The lake.";
map[10] = "The plains.";
map[11] = "A serene beach.";
map[12] = "Under a massive tree.";
map[13] = "An enemy outpost.";
map[14] = "The mushroom forest";
map[15] = "The forbidden path."
map[16] = "Where... where am I?"

let mapLocation = 5;


/**********************************  SECTION 2 **********************************/


let images = [];

images[0] = "dragon.jpg";
images[1] = "cave.jpg";
images[2] = "forest.jpg";
images[3] = "mountain.jpg";
images[4] = "volcano.jpg";
images[5] = "village.jpg";
images[6] = "park.jpg";
images[7] = "tundra.jpg";
images[8] = "desert.jpg";
images[9] = "lake.jpg";
images[10] = "plains.jpg";
images[11] = "beach.jpg";
images[12] = "tree.jpg";
images[13] = "outpost.jpg";
images[14] = "mushroom.jpg";
images[15] = "path.jpg";
images[16] = "void.jpg";

let blockedPathMessages = [];

blockedPathMessages[0] = "The dragon blocks your path.";
blockedPathMessages[1] = "You could get lost.";
blockedPathMessages[2] = "That doesn't seem like a good idea.";
blockedPathMessages[3] = "You can't climb that.";
blockedPathMessages[4] = "You'd be melted.";
blockedPathMessages[5] = "";
blockedPathMessages[6] = "";
blockedPathMessages[7] = "You'd freeze to death.";
blockedPathMessages[8] = "The desert is far too vast to cross.";
blockedPathMessages[9] = "";
blockedPathMessages[10] = "";
blockedPathMessages[11] = "Not without a boat, you're not.";
blockedPathMessages[12] = "The tree is too big to climb, or even walk around.";
blockedPathMessages[13] = "You and what army?";
blockedPathMessages[14] = "Little gremlins prevent you from going that way.";
blockedPathMessages[15] = "It's called forbidden for a reason. I won't stop you, but that is a terrible idea.";

let helpMessages = [];

helpMessages[0] = "You're going to need one hell of a sword.";
helpMessages[1] = "It's way too dark. Maybe a torch?";
helpMessages[2] = "You need to build up some confidence.";
helpMessages[3] = "Climbing gear, maybe?";
helpMessages[4] = "You'd need something to keep cool.";
helpMessages[5] = "This is your home. you can sleep here.";
helpMessages[6] = "This is the park. There's a sword in a stone. maybe if you were strong enough to pull it, you could slay the dragon.";
helpMessages[7] = "You'd need something to keep warm.";
helpMessages[8] = "You'd need extra water.";
helpMessages[9] = "Nice place to go fishing.";
helpMessages[10] = "Not much to do here.";
helpMessages[11] = "You can't breathe underwater.";
helpMessages[12] = "The tree has a big door on it. You might want to see what's inside.";
helpMessages[13] = "If you were strong enough, you could take them all out.";
helpMessages[14] = "Maybe a really big axe could cut some of these mushrooms down?";
helpMessages[15] = "Nobody returns when they walk this path. Neither will you.";
helpMessages[16] = "There is no help for you now.";


/**********************************  SECTION 3 **********************************/


let boss = [];

boss[14] = {
  messages: [
    "You see a strange looking creature with mushrooms on it's back.",
    "Gaia, the god of nature, lies dead on the forest floor."
  ],
  defeated: false
}


let items = ["axe"];
let itemLocations = [10];

let backpack = [];

let playersInput = "";


/**********************************  SECTION 4 **********************************/


let gameMessage = "<br>Welcome to WorldName! "
gameMessage += "Try any of these words: " 
gameMessage += "north, east, south, west, take, drop, ";
gameMessage += "use, help.";


let actionsIKnow = ["north","east", "south", "west", 
                    "help", "take", "use", "drop", "fight" ];
let action = "";


let itemsIKnow = ["axe", "climbing gear", "water breathing potion", "water bottle", "winter gear",
  "excalibur", "fireproof helmet", "vodka", "torch", "potion of strength", "power", "treasure"
];
let item = "";


/**********************************  SECTION 5 **********************************/


let image = document.querySelector("img");


let output = document.querySelector("#output");
let input = document.querySelector("#input");


let button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", clickHandler, false);
button.addEventListener("mousedown", mousedownHandler, false);
button.addEventListener("mouseout", mouseoutHandler, false);


window.addEventListener("keydown", keydownHandler, false);

render();


/**********************************  SECTION 6 **********************************/


function mousedownHandler() 
{
 button.style.background = "linear-gradient(top, rgba(0,0,0,0.2), rgba(255,255,255,0.3))";
}

function mouseoutHandler() 
{
 button.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";
}

function clickHandler() 
{
  button.style.background = "linear-gradient(top, rgba(255,255,255,0.6), rgba(0,0,0,0.2))";

  playGame();
}

function keydownHandler(event) 
{

  if(event.keyCode === 13) 
  {
    playGame();
  }
}


/**********************************  SECTION 7 **********************************/


function playGame() 
{
  playersInput = input.value;
  playersInput = playersInput.toLowerCase();
  

  gameMessage = "";
  action = "";
  

  for(i = 0; i < actionsIKnow.length; i++)
  {
    if(playersInput.indexOf(actionsIKnow[i]) !== -1)
    {
      action = actionsIKnow[i];
      console.log("player's action: " + action);
      break;
    }
  }
  

  for(i = 0; i < itemsIKnow.length; i++)
  {
    if(playersInput.indexOf(itemsIKnow[i]) !== -1)
    {
      item = itemsIKnow[i];
      console.log("player's item: " + item);
    }
  }
  
  //Choose the correct action
  switch(action)
  {
    case "north":
      if(mapLocation >= 4)
      {
        mapLocation -= 4;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;
    
    case "east":
      //% - modulus operator
      //finds the remainder
      //if mapLocation / 3 != remainder of 2
	    if(mapLocation % 4 != 3)
      {
        mapLocation += 1;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;
      
    case "south":
      if(mapLocation < 12)
      {
        mapLocation += 4;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;
      
    case "west":
      if(mapLocation % 4 != 0)
      {
        mapLocation -= 1;
      }
      else
      {
        gameMessage = blockedPathMessages[mapLocation];
      }
      break;
      
    case "help":
      //Display a hint if there is one for this location
      if(helpMessages[mapLocation] !== "")
      {
        gameMessage = helpMessages[mapLocation] + " ";
      }
      gameMessage += "Try any of these words: " 
      gameMessage += "north, east, south, west, take, drop, ";
      gameMessage += "use, stone, flute, sword.";
      break;
      
    case "take":
      takeItem()
		  break;
		
		case "drop":
		  dropItem();
		  break;
		  
		case "use":
		  useItem();
		  break;

    case "talk":
      Talk();

    case "fight":
      fight();
    		  
		default:
		  gameMessage = "I don't understand that.";
  }
  
  //Render the game
  render();
}


/**********************************  SECTION 8 **********************************/


function takeItem()
{
  //Find the index number of the item in the items array
  let itemIndexNumber = items.indexOf(item);
  
  //Does the item exist in the game world
  //and is it at the player's current location?
  if(itemIndexNumber !== -1 
  && itemLocations[itemIndexNumber] === mapLocation)
  {
    gameMessage = "You take the " + item + ".";
    
    //Add the item to the player's backpack 
    backpack.push(item);
   
    //Remove the item from the game world
    items.splice(itemIndexNumber, 1);
    itemLocations.splice(itemIndexNumber, 1);
          
    //Display in the console for testing
    console.log("World items: " + items);
    console.log("backpack items: " + backpack);
  }
  else
  {
    //Message if you try and take an item
    //that isn't in the current location
    gameMessage = "You can't do that.";
  }
}


/**********************************  SECTION 9 **********************************/


function dropItem()
{
  //Try to drop the item only if the backpack isn't empty
  if(backpack.length !== 0)
  {
    //Find the item's array index number in the backpack
    let backpackIndexNumber = backpack.indexOf(item);
	  
	  //The item is in the backpack if backpackIndex number isn't -1
    if(backpackIndexNumber !== -1)
    {
    
     //Tell the player that the item has been dropped
   	 gameMessage = "You drop the " + item + ".";
     
     //Add the item from the backpack to the game world 
     items.push(backpack[backpackIndexNumber]);
     itemLocations.push(mapLocation); 
     
     //Remove the item from the player's backpack 
     backpack.splice(backpackIndexNumber, 1);
    }
    else
    {
      //Message if the player tries to drop
      //something that's not in the backpack
      gameMessage = "You can't do that.";
    }
  }
  else
  {
    //Message if the backpack is empty
    gameMessage = "You're not carrying anything.";
  }
}


/********************************** SECTION 10 **********************************/


function useItem()
{
  //1. Find out if the item is in the backpack
  
  //Find the item's array index number in the backpack
  let backpackIndexNumber = backpack.indexOf(item);
       
  //If the index number is -1, then it isn't in the backpack.
  //Tell the player that he or she isn't carrying it.
  if(backpackIndexNumber === -1)
  {
    gameMessage = "You're not carrying it.";
  }
  
  //If there are no items in the backpack, then
  //tell the player the backpack is empty
  if(backpack.length === 0)
  {
    gameMessage += " Your backpack is empty";
  }
   
  //2. If the item is found in the backpack
  //figure out what to do with it
  if(backpackIndexNumber !== -1)
  {
    switch(item)
    {
	    case "axe":
	      if(mapLocation === 14)
        {
          let defeated = boss[mapLocation].defeated ? 1:0
          gameMessage = boss[mapLocation].messages[defeated];
          
          //Add the sword to the world
          items.push("vodka");
          itemLocations.push(mapLocation);
          
          //Reset the location's help message
          helpMessages[mapLocation] = "You've slain Gaia. There is nothing else to do here.";
        }
        else
        {
          gameMessage = "What exactly do you intend to chop down?"
        }
	      break;
        
        case "vodka":
          if(mapLocation === 2)
          {
            gameMessage = "You take a swig of vodka, and muster the courage to step into the mist. before you stands a tall, slender sillhouette with glowing white eyes.";
            
            //Add the sword to the world
            items.push("torch");
            itemLocations.push(mapLocation);
            
            //Reset the location's help message
            helpMessages[mapLocation] = "You've slain the lord of the woods. The mist is gone, and the forest is silent.";
          }
          else
          {
            gameMessage = "You take a swig of vodka. Don't drive anywhere."
          }
          break;

          case "torch":
            if(mapLocation === 1)
            {
              gameMessage = "You step into the cave, torch lighting the way. There is a giant spider inside, blocking your way.";
              
              //Add the sword to the world
              items.push("climbing gear");
              itemLocations.push(mapLocation);
              
              //Reset the location's help message
              helpMessages[mapLocation] = "You've eradicated this ecosystem's apex predator, and life in the cave has ceased entirely.";
            }
            else
            {
              gameMessage = "You light your torch. You can see a little better, but nothing else happens."
            }
            break;

            case "climbing gear":
              if(mapLocation === 3)
              {
                gameMessage = "You hike your way up the mountains. At the peak is a the Yeti.";
                
                //Add the sword to the world
                items.push("fireproof helmet");
                itemLocations.push(mapLocation);
                
                //Reset the location's help message
                helpMessages[mapLocation] = "The Yeti, an elusive creature with good in it's heart and the missing link in human evolution. It's dead.";
              }
              else
              {
                gameMessage = "There's nothing to climb."
              }
              break;

              case "fireproof helmet":
                if(mapLocation === 4)
                {
                  gameMessage = "You approach the volcano, and find a beast of fire.";
                  
                  //Add the sword to the world
                  items.push("winter gear");
                  itemLocations.push(mapLocation);
                  
                  //Reset the location's help message
                  helpMessages[mapLocation] = "The volcano is now dormant. No more land will be formed, and eventually, worldName will sink underwater.";
                }
                else
                {
                  gameMessage = "Where's the fire?"
                }
                break;

                case "winter gear":
                  if(mapLocation === 7)
                  {
                    gameMessage = "You make your way through the snow, and find a giant snake made from ice.";
                    
                    //Add the sword to the world
                    items.push("water bottle");
                    itemLocations.push(mapLocation);
                    
                    //Reset the location's help message
                    helpMessages[mapLocation] = "The snake is dead, and the tundra is warm now.";
                  }
                  else
                  {
                    gameMessage = "The gear makes you sweat profusely due to the lack of any cold weather. You take it off."
                  }
                  break;

                  case "water bottle":
                    if(mapLocation === 8)
                    {
                      gameMessage = "You trudge through the desert, coming across a giant sandworm.";
                      
                      //Add the sword to the world
                      items.push("water breathing potion");
                      itemLocations.push(mapLocation);
                      
                      //Reset the location's help message
                      helpMessages[mapLocation] = "The sandworm is dead, and the desert is hotter and more unforgiving than ever before.";
                    }
                    else
                    {
                      gameMessage = "You drink some water. Refreshing."
                    }
                    break;

                    case "water breathing potion":
                      if(mapLocation === 11)
                      {
                        gameMessage = "You dive underwater, but your path is blocked by a massive shark.";
                        
                        //Add the sword to the world
                        items.push("potion of strength");
                        itemLocations.push(mapLocation);
                        
                        //Reset the location's help message
                        helpMessages[mapLocation] = "Another dead god. You killed it.";
                      }
                      else
                      {
                        gameMessage = "You're not drowning, calm down."
                      }
                      break;

                      case "potion of strength":
                        if(mapLocation === 13)
                        {
                          gameMessage = "You take down the enemy base effortlessly.";
                          
                          //Add the sword to the world
                          items.push("power");
                          itemLocations.push(mapLocation);
                          
                          //Reset the location's help message
                          helpMessages[mapLocation] = "Men, women, and children lie dead on the ground. you're a monster.";
                        }
                        else
                        {
                          gameMessage = "This could help you take out your enemies."
                        }
                        break;

                        case "power":
                          if(mapLocation === 6)
                          {
                            gameMessage = "Even though you are unworthy, you are strong enough to rip the sacred sword out of the ground anyway.";
                            
                            //Add the sword to the world
                            items.push("excalibur");
                            itemLocations.push(mapLocation);
                            
                            //Reset the location's help message
                            helpMessages[mapLocation] = "You hold the sword in your hands, and feel the eyes of god look upon you in dissapointment.";
                          }
                          else
                          {
                            gameMessage = "You feel hate and rage coursing through your veins."
                          }
                          break;

                          case "excalibur":
                            if(mapLocation === 0)
                            {
                              gameMessage = "You plunge the sword through the dragon's head, and steal it's treasure.";
                              
                              //Add the sword to the world
                              items.push("treasure");
                              itemLocations.push(mapLocation);
                              
                              //Reset the location's help message
                              helpMessages[mapLocation] = "The source of life in worldName is dead. What have you done?";
                            }
                            else
                            {
                              gameMessage = "As you stare at your reflection in the holy sword's blade, you can feel the eyes of god gaze down at you with dissapointment."
                            }
                            break;

                            case "treasure":
                              if(mapLocation === 15)
                              {
                                gameMessage = "You walk along the path, and see nothing. You feel nothing. This is your purgatory.";
                                
                                mapLocation === 16
                                
                                //Reset the location's help message
                                helpMessages[mapLocation] = "You stare into the void. You feel regret.";
                              }
                              else
                              {
                                gameMessage = "You stare at your stolen gold. All that death for this?"
                              }
                              break;

	   }
   }
}


/**********************************  SECTION 11 **********************************/


function render()
{
  //Render the location
  output.innerHTML = map[mapLocation];
  image.src = "images/" + images[mapLocation];
  
  //Display an item if there's one in this location
  //1. Loop through all the game items
  for(let i = 0; i < items.length; i++)
  {
   //Find out if there's an item at this location
   if(mapLocation === itemLocations[i])
   {
     //Display it
     output.innerHTML 
      += "<br>You see a <strong>" 
      + items[i]
      + "</strong> here.";
   }
  }
  
  //Display the player's backpack contents
  if(backpack.length !== 0)
  {
    output.innerHTML += "<br>You are carrying: " + backpack.join(", ");  
  }
  
  //Display the game message
  output.innerHTML += "<br><em>" + gameMessage + "</em>";
  
  //Clear the input field
  input.value = "";
}


function fight()
{
  switch(mapLocation)
}