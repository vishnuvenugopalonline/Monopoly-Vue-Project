<template>
<div id="wrapper">
    <h1>Dice</h1>
    <button v-on:click="finalDiceValue">Roll Dice</button>
    <div>{{getDice[0].value}}</div>
    <div>{{getActivePlayer[0].player}}</div>
    <div>{{getEachDice}}</div>
</div>
</template>
<script>
  export default {
    name: 'dice',
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
      }
    },

    methods: {
      finalDiceValue : function (state){
        var dice1 = Math.floor(1 + Math.random() * (5 + 1 - 1));
        var dice2 = Math.floor(1 + Math.random() * (5 + 1 - 1));
        var finalDiceValue = dice1 + dice2;
        this.updateDiceValue(dice1, dice2, finalDiceValue);
        return finalDiceValue;
      },

      // All Dice/Move Position/After DiceRoll action happens here
      updateDiceValue : function(dice1, dice2, finalDiceValue) {
        let playerID =  this.getActivePlayer[0].player;
        var getCurrentActivePlayer = this.getActivePlayer;
        var getBoardCells = this.getBoardCell;
        this.$store.dispatch("updateDiceValues", {dice1, dice2});
        console.log('playerID',playerID);
        console.log('diesfinalValue',finalDiceValue);
        this.$store.dispatch("movePosition", {finalDiceValue, playerID});
        this.$store.dispatch("afterDiceRoll", {getCurrentActivePlayer, getBoardCells});
      }
    }
  }
</script>
<style scoped>
/* .dice-1 {
  background-image: url("./assets/dice-1.svg");
}
.dice-2 {
  background-image: url("./assets/dice-2.svg");
}
.dice-3 {
  background-image: url("./assets/dice-3.svg");
}
.dice-4 {
  background-image: url("./assets/dice-4.svg");
}
.dice-5 {
  background-image: url("./assets/dice-5.svg");
}
.dice-6 {
  background-image: url("./assets/dice-6.svg");
}

#wrapper {
  border: 1px solid #000000;
} */
</style>
