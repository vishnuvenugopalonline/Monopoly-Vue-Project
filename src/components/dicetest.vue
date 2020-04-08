<template>   
<div id="diceWrapper">
    <div>
        <button id="myBtn"  class="animated"><img v-if="isDiceRolled" :src="this.dice1Link" alt="dice" height="130" width="130"></button>
        <button id="myBtn2" class="animated"><img v-if="isDiceRolled" :src="this.dice2Link" alt="dice" height="130" width="130"></button>
    </div>
    <button id="roll" v-on:click="updateDiceLink()" >Roll the dice</button>
    <div id="result" v-if="this.diceSum !== null">Your Rolled {{diceSum}}!</div>
</div>
</template>
<script>
export default {
    name: 'dicetest',
    data () {
        return {
            dice1Link: '',
            dice2Link: '',
            dice1randNum: '',
            dice2randNum: '',
            isDiceRolled: false,
            diceSum: null
        }
    },

    computed: {
      getDice: function() {
        return this.$store.getters.getTotalDiceValues;
      },

      getEachDice: function(){
        return this.$store.getters.getEachDice;
      },

      getActivePlayer : function(){
        return this.$store.getters.activePlayer;
      },

      getBoardCell : function(){
        return this.$store.getters.getBoardCell;
      },

      getFunctionTrigger : function(){
        return this.$store.getters.getFunctionTrigger;
      },
    },

    methods: {
        updateDiceLink: function(){
            var dice1 = document.getElementById("myBtn");
            var dice2 = document.getElementById("myBtn2");
            dice1.style.background = 'none';
            dice2.style.background = 'none';
            this.dice1Link = this.diceLinkGenerator('dice1');
            this.dice2Link = this.diceLinkGenerator('dice2');
            this.isDiceRolled = true;
            this.diceSum = this.dice1randNum + this.dice2randNum;
            this.updateDiceValueInState(this.dice1randNum, this.dice2randNum, this.diceSum);
        },

        diceLinkGenerator: function(dice){
            var randomNumber = parseInt(Math.random() * (7 - 1) + 1);
            if(dice == 'dice1'){
                this.dice1randNum = randomNumber;
            } else {
                this.dice2randNum = randomNumber;
            }
            var link = require('../assets/dice/' + randomNumber + '.png');
            return link;
        },

        updateDiceValueInState : function(dice1, dice2, finalDiceValue) {
          let playerID =  this.getActivePlayer[0].player;
          var getCurrentActivePlayer = this.getActivePlayer;
          var getBoardCells = this.getBoardCell;
          let functionTriggerStatus = this.getFunctionTrigger;
          this.$store.dispatch("updateDiceValues", {dice1, dice2});
          this.$store.dispatch("movePosition", {finalDiceValue, playerID});
          this.$store.dispatch("afterDiceRoll", {getCurrentActivePlayer, getBoardCells, functionTriggerStatus});
      }
    }
}
</script>

<style scoped>
#myBtn {
  background: none;
  border: none;
  outline: none;
  width: 130px;
  height: 130px;
  position: absolute;
  top: 86px;
  left: 4px;
  background: url(../assets/dice/2.png);
  background-size: contain;
  transition: background 0.3s;
  transition: opacity 1.5s;
}

#myBtn2 {
  background: none;
  border: none;
  outline: none;
  width: 130px;
  height: 130px;
  position: absolute;
  top: 176px;
  left: 106px;
  background: url(../assets/dice/6.png);
  background-size: contain;
  transition: background 0.3s;
  transition: opacity 1.5s;
}

#roll {
  background: #E04B45;
  border: none;
  border-radius: 10px;
  position: absolute;
  top: 50px;
  left: 24px;
  height: 30px;
  width: 100px;
  outline: none;
  color: white;
}

#result {
  color: #E04B45; 
  font-family: sans-serif;
  position: absolute;
  top: 54px;
  right: 1540px;
  width: 100px;
  text-align: center;
}

.animated {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.dice {
  -webkit-animation-name: dice;
  animation-name: dice;
}

#diceWrapper {
  position: relative
}
</style>



