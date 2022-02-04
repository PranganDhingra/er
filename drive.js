AFRAME.registerComponent('drive',{
    init:function(){
        var gameStateValue= this.el.getAttribute("game")
        if(gameStateValue == "play"){
            this.driveCar()
            
        }
    },

//function spawnobstacles(){}

isVelocityActive: function (){
    console.log("Prangan")
    return Math.random()<0.25
},


driveCar: function(){
var multiply=10
var wheelRotation=0




},




})