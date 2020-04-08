<template>
    <div>
        <div id="wrapper">
            <div id="trade">
                <table style="border-spacing: 4px;">
                    <tr>
                        <td class="trade-cell container" >
                            <div id="trade-leftp-name" class="dropdown dropdown-dark">
                                <select class="dropdown-select">
                                    <option>
                                        {{getActivePlayer[0].name}} (Player {{getActivePlayer[0].player}})
                                    </option>
                                </select>
                            </div>
                            <!-- <div id="trade-leftp-name">{{getActivePlayer[0].name}} (Player {{getActivePlayer[0].player}})</div> -->
                        </td>
                        <td class="trade-cell container">
                            <div id="trade-rightp-name" class="dropdown dropdown-dark">
                                <select v-model="selected" class="dropdown-select">
                                    <option v-for="eachPlayer in getNonActivePlayers" :key="eachPlayer.player" :value="{ playerID: eachPlayer.player, name: eachPlayer.name}" :selected="index === 0">
                                        {{eachPlayer.name}} (Player {{eachPlayer.player}})
                                    </option>
                                </select>
                            </div>
                            <div id="test2">{{selected}}</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="trade-cell">
                            &#8377;<input id="trade-leftp-money" value="0" title="Enter amount to exchange with the other player." />
                        </td>
                        <td class="trade-cell">
                            &#8377;<input id="trade-rightp-money" value="0" title="Enter amount to exchange with the other player." />
                        </td>
                    </tr>
                    <tr>
                        <td id="trade-leftp-property" class="trade-cell">
                            <listOwnedProperties v-bind:playerID="getActivePlayer[0].player" handleChange="handleChange" />
                        </td>
                        <td id="trade-rightp-property" class="trade-cell">
                            <listOwnedProperties v-bind:playerID="selected.playerID"  handleChange="handleChange"/>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" class="trade-cell">
                            <input type="button" id="proposetradebutton" value="Propose Trade" onclick="game.proposeTrade();" title="Exchange the money and properties that are checked above." />
                            <input type="button" id="canceltradebutton" value="Cancel Trade" onclick='game.cancelTrade();' title="Cancel the trade." />
                            <input type="button" id="accepttradebutton" value="Accept Trade" onclick="game.acceptTrade();" title="Accept the proposed trade." style="display: none;"/>
                            <input type="button" id="rejecttradebutton" value="Reject Trade" onclick='game.cancelTrade();' title="Reject the proposed trade." style="display: none;"/>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

  
</template>
<script>
import listOwnedProperties from '../listOwnedProperties'

export default {
    data: function(){
      return {
      selected: ''}},

    components: {
        listOwnedProperties
    },

    mounted () {
        let nonActivePlayer = this.getNonActivePlayers;
        this.selected = nonActivePlayer[0].player;
    },
      
    computed: {
        getActivePlayer : function(){
            return this.$store.getters.activePlayer;
        },

        getNonActivePlayers : function(){
            return this.$store.getters.nonActivePlayers;
        },

        getEachCellValue : function() {
            return this.$store.getters.getBoardCell;
        },

        getActivePlayerOwnedItems : function() {
            var EachboardCell = this.$store.getters.getBoardCell;
            var activePlayerOwnedItems =  this.$store.getters.activePlayer[0].properties_owned;
            return EachboardCell.filter(value => activePlayerOwnedItems.includes(value.index));
        },

        //Trigger Select event when opponent player changes

        
    },

    methods: {
        getPlayerOwnedItems : function(playerID) {
            console.log("nworking :>>>>");
            var EachboardCell = this.$store.getters.getBoardCell;
            return EachboardCell.filter(item => item.player_owned == playerID);          
        },

        handleChange : function(e){
            console.log("this is the workking node >>> ", e);
        }
    }
}
</script>
<style scoped>
#wrapper {
    border: 1px solid #000000;
    border-radius: 26px 26px 26px 26px;
    vertical-align: middle;
    align-content: center;
}

.trade-cell {
	border: none;
	border-radius: 3px;
	width: 308px;
	height: 26px;
	vertical-align: middle;
}

input [type="text"] {
    margin: 1px 8px;
}

.playerHeading {
    font-size: 13px;
    font-weight: bold;
    display: block;
}

/* Drop down styles */
.dropdown {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 28px;
  width: 150px;
  background: #f2f2f2;
  border: 1px solid;
  border-color: white #f7f7f7 whitesmoke;
  border-radius: 3px;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.06));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.06));
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
}

.dropdown:before, .dropdown:after {
  content: '';
  position: absolute;
  z-index: 2;
  top: 9px;
  right: 10px;
  width: 0;
  height: 0;
  border: 4px dashed;
  border-color: #888888 transparent;
  pointer-events: none;
}

.dropdown:before {
  border-bottom-style: solid;
  border-top: none;
}

.dropdown:after {
  margin-top: 7px;
  border-top-style: solid;
  border-bottom: none;
}

.dropdown-select {
  position: relative;
  width: 130%;
  margin: 0;
  padding: 6px 8px 6px 10px;
  height: 28px;
  line-height: 14px;
  font-size: 12px;
  color: #62717a;
  text-shadow: 0 1px white;
  border: 0;
  border-radius: 0;
  outline: none;
 
}

.dropdown-select:focus {
  z-index: 3;
  width: 100%;
  color: #394349;
  outline: 2px solid #49aff2;
  outline: 2px solid -webkit-focus-ring-color;
  outline-offset: -2px;
}

.dropdown-select > option {
  margin: 3px;
  padding: 6px 8px;
  text-shadow: none;
  background: #f2f2f2;
  border-radius: 3px;
  cursor: pointer;
}

/* dark drop down */

.dropdown-dark {
  background: #444;
  border-color: #111111 #0a0a0a black;
  background-image: -webkit-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
  background-image: -moz-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
  background-image: -o-linear-gradient(top, transparent, rgba(0, 0, 0, 0.4));
  background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.4));
  -webkit-box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.1), 0 1px 1px rgba(0, 0, 0, 0.2);
}

.dropdown-dark:before {
  border-bottom-color: #aaa;
}

.dropdown-dark:after {
  border-top-color: #aaa;
}

.dropdown-dark .dropdown-select {
  color: #aaa;
  text-shadow: 0 1px black;
  background: #444;  /* Fallback for IE 8 */
}

.dropdown-dark .dropdown-select:focus {
  color: #ccc;
}

.dropdown-dark .dropdown-select > option {
  background: #444;
  text-shadow: 0 1px rgba(0, 0, 0, 0.4);
}

.container {
  margin: 80px auto;
  width: 400px;
  text-align: center;
}

.container > .dropdown {
  margin: 0 20px;
  vertical-align: top;
}


</style>