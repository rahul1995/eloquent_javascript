// Your code here
function SmartPlantEater() {
  this.energy = 20;
}

SmartPlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if(this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if(this.energy < 20 && plant)
    return {type: "eat", direction: plant};
  if(space && !plant)
    return {type: "move", direction: space};
  var randomAction = randomElement(["move", "eat"])
  if(randomAction == "move")
    return {type: "move", direction: space};
  return {type: "eat", direction: plant};
}

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***     O    ##**    *#",
   "#       O         ##***    #",
   "#                 ##**     #",
   "#   O       #*             #",
   "#*          #**       O    #",
   "#***        ##**    O    **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));