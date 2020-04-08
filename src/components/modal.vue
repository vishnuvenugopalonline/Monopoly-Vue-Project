
<template>
    <div>
        <div class="popup" id="popup">
            <span>{{this.getFunctionTrigger}}</span>
            <span>{{isActivePlayerTypeIsProperty}}</span>
            <h2>{{this.title}}</h2><br/>
            <span>{{this.content}}</span>
            <div id="buttonPanel">
                <div  @click="this.popupClose" class="modalButton cancelButton">Cancel</div>
                <div  @click="buyPropertyFn()" class="modalButton">Purchase</div>
                <div  class="modalButton" @click="this.popupClose">Ok</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'modal',
    props: {
        title: String,
        content: String,
        cellID: Number
    },
// Replace Item array elements
// replace_property = For Land/Tower/Service Buy/Purchase notification
// replace_amount = Amount which sae is going on

    mounted: function(){
        this.modalFadeIn();
    },

    computed: {
        // get Actve Player
        getActivePlayer : function(){
            return this.$store.getters.activePlayer;
        },

        getBoardCell : function(){
          return this.$store.getters.getBoardCell;
        },

        getFunctionTrigger : function(){
          return this.$store.getters.getFunctionTrigger;
        },

        getActivePlayerCellID : function(){
            console.log("Previousplayer - modal.vuecomputed ===============>",this.$store.getters.activePlayerPreviousPlayer);
            let activePlayer = this.$store.getters.activePlayer;
            let activePlayerCellID = activePlayer[0].position;
            console.log("Active Player Cell ID modal.vuecomputed  ======> ",activePlayerCellID)
            return activePlayerCellID;
        },

        isActivePlayerTypeIsProperty: function(){
            let activePlayerCellIDType = this.activePlayerCellIDType();
            if ( activePlayerCellIDType == 'property') {
                return true;
            } else if ( activePlayerCellIDType == 'serviceBuy' ){
                return true;
            } else {
                return false;
            }
        },

        // buyProperty: function(){
        //     this.buyPropertyFn();
        //     return true;
        // },
    },

    methods: {

        // popup click function
        modalFadeIn: function(){
            let title = this.title;
            let content = this.content;
            let cellID = this.cellID;
            // let modal = document.getElementById("popup");
            // modal.style.display = "inline-block";
            this.$store.dispatch("setModalVisibilityON", {title, content, cellID});
        },
        // popup close function
        popupClose: function(){
            let modal = document.getElementById("popup");
            modal.style.display = "none";
            this.$store.dispatch("setModalVisibilityOFF");
        },

        // Get ActivePlayer owned Cell is property or not

        activePlayerCellIDType : function(){
            let activePlayerCellID = this.getActivePlayerCellID;
            let activePlayerCell = this.getBoardCell.filter( item => item.index == activePlayerCellID);
            let activePlayerCellType = activePlayerCell[0].type;
            return activePlayerCellType;
        },



        // Buy Property after dice Rolls

        buyPropertyFn: function(){
        
            console.log(",------------- Working Insdie Modal--> Buyproperty (computed) ---> BuypropertyFn method  ----------------->")
            let functionTrigger = this.getFunctionTrigger;
            let activePlayerCellID = this.getActivePlayerCellID;
            let activePlayer = this.getActivePlayer;
            let activePlayerCell = this.getBoardCell.filter( item => item.index == activePlayerCellID);
            let playerID = activePlayer[0].player;
            let cellID = this.getActivePlayerCellID;
            let price = activePlayerCell[0].price;
            alert("Look at console");
            console.log("Player ID, CellID, price" , playerID, cellID, price, "function Trigger", functionTrigger[0]);
            this.$store.dispatch("buyPropertyGlobalFn", {playerID, cellID, price});

            //[Notification code] to display Player  brought property for 33 rs
            this.popupClose();
                  
        },
        
    }
}
</script>

<style scoped>
/* popup window */

div.popup {
  border-radius: 1.6em;
  background: rgba(96, 183, 183, 0.66);
  display: inline-block;
  height: auto;
  left: 27.2%;
  margin-bottom: 3%;
  padding: 18px;
  position: absolute;
  top: 18%;
  width: 30%;
  z-index: 2;
}

/* popup image */

img.image {
  display: block;
  margin: 3% 0 0 18.6%;
  padding-bottom: 4%;
  width: 64%;
}

/* close button */

img.close_button {
  cursor: pointer;
  float: right;
  margin: 2%;
  width: 50px;
}

/* click button */

div.button {
    background: #255F85;
    border-radius: 0.6em;
    color: white;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    margin: 10% auto 0;
    padding: 1%;
    text-align: center;
    width: 18%;
}

.modalButton {
    background: #13a50a;
    border-radius: 0.3em;
    color:   white;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 1.2em;
    margin: 12px 40px;
    padding: 8px;
    text-align: center;
    width: 24%;
    display: inline-block;
}

.cancelButton {
    background: #0a41a5 !important;
}
/* click button hover */

div.button:hover {
  background: #255F85;
  color: #FFC857;
}
</style>