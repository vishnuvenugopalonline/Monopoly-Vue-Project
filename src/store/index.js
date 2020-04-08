import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    playerStatus: [
                  {'player':1, 'name': 'Lallu', 'amount':2000, 'score':0, 'position':0,'house_owned':3,'restaurant_owned':10, 'active': true, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':2, 'name': 'Rahul', 'amount':2000, 'score':0, 'position':0,'house_owned':5,'restaurant_owned':2, 'active': false, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':3, 'name': 'Niyon', 'amount':2000, 'score':0, 'position':0,'house_owned':6,'restaurant_owned':3, 'active': false, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]},
                  {'player':4, 'name': 'Tony', 'amount':2000, 'score':0, 'position':0,'house_owned':7,'restaurant_owned':4, 'active': false, 'properties_owned': [], 'playing': true, 'notifications':[{'title': 'trade', 'tradeCount': 0, 'tradeItems':[]}]}
                ],
                // Player 1 = playerStatus[0], 
                // Player 2 = playerStatus[1], 
                // Player 3 = playerStatus[2],
                // Player 4 = playerStatus[3]
    diceValues: [
                {'name':'dice1', 'value':0},
                {'name':'dice2', 'value':0},
                {'name':'totalDiceValue', 'value': 0}
              ],

    boardCell: [
                {'index':0, 'title':'Go', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':1, 'title':'MG Road', 'price': 80, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':2, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null}, 
                {'index':3, 'title':'Lucknow', 'price': 100, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':4, 'title':'Income Tax', 'price': 100, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':5, 'title':'Kanpur Railway Station', 'price': 120, 'type':'serviceBuy', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':6, 'title':'Oriental Avenue', 'price': 100, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null}, 
                {'index':7, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':8, 'title':'Central Perk', 'price': 200, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':9, 'title':'Hilltop View', 'price': 130, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':10, 'title':'Jail', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':11, 'title':'Red Fort', 'price': 140, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':12, 'title':'Electric Company', 'price': 150, 'type':'serviceBuy', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':13, 'title':'Taj Mahal', 'price': 180, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':14, 'title':'Ladakh', 'price': 200, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':15, 'title':'Old Delhi Railway Station', 'price': 160, 'type':'serviceBuy', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':16, 'title':'St. Peters Tower', 'price': 100, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':17, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':18, 'title':'Sports Hub', 'price': 200, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':19, 'title':'TownHall', 'price': 150, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':20, 'title':'Free Parking', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':21, 'title':'Jaipur', 'price': 220, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':22, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':23, 'title':'Kochi', 'price': 250, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':24, 'title':'Clock Tower', 'price': 140, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':25, 'title':'Cuttack Railway Station', 'price': 150, 'type':'serviceBuy', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':26, 'title':'Surat', 'price': 190, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':27, 'title':'Ambakar Road', 'price': 130, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':28, 'title':'Waterworks', 'price': 120, 'type':'serviceBuy', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':29, 'title':'Silent Valley', 'price': 200, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':30, 'title':'Go to Jail', 'price': null, 'type':'defaultCell', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':31, 'title':'Banglore', 'price': 300, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':32, 'title':'Shillong', 'price': 320, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':33, 'title':'Community Chest', 'price': null, 'type':'Community Chest', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':34, 'title':'Chennai', 'price': 320, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':35, 'title':'Qutab Minar', 'price': 200, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':36, 'title':'Chance', 'price': null, 'type':'Chance', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':37, 'title':'City Palace', 'price': 350, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':38, 'title':'Luxury Tax', 'price': 75, 'type':'service', 'player_owned': null, 'players_stay':[],'house': null},
                {'index':39, 'title':'Marine Drive', 'price': 400, 'type':'property', 'player_owned': null, 'players_stay':[],'house': null},
              ],
    modalManager: [
                {'isModalVisible': false, 'title':'', 'content':'', 'type': null, 'cellID' : null}
              ],
    functionTrigger: [
                  {'name':'buyProperty', 'active': false}
              ]
  },


  // Player 1 = Yellow
  // Player 2 = Blue
  // Player 3 = Green
  // Player 4 = Red

  getters: {
      playerCurrentStatus: (state) => {
        return state.playerStatus[1].position;
      },
 
      activePlayer: (state) => {      
        var activePlayer = state.playerStatus.filter(item => item.active === true)
        return activePlayer;
      },

      activePlayerPreviousPlayer: (state) => {
        let activePlayer = state.playerStatus.filter(item => item.active === true);
        let previousActivePlayer = activePlayer[0].player-1;
        let previousActivePlayerStatus = state.playerStatus.filter(item => item.player == previousActivePlayer);
        console.log("Previou Player full ----------->>>>>>", previousActivePlayerStatus);
        return previousActivePlayerStatus;
      },

      nonActivePlayers: (state) => {
        var nonActivePlayers = state.playerStatus.filter(item => item.active === !true)
        return nonActivePlayers;
      },

      allPlayers: (state) => {
        var allPlayers = state.playerStatus;
        return allPlayers;
      },

      getTotalDiceValues: (state) => {
        return state.diceValues.filter(item => item.name === 'totalDiceValue')
      },

      getEachDiceValues: (state) => {
        return state.diceValues.filter(item => item.name !== 'totalDiceValue')
      },

      getBoardCell: (state) => {
        return state.boardCell.map(item => item)
      },

      getModalStatus: (state) => {
        return state.modalManager.map(item => item)
      },

      getFunctionTrigger: (state) => {
        return state.functionTrigger.map(item => item)
      },
    },

  mutations: {
    setModalVisibilityON(state, payload){
      state.modalManager[0].isModalVisible = true;
      state.modalManager[0].title = payload.title;
      state.modalManager[0].content = payload.content;
      state.modalManager[0].cellID = payload.cellID;
    },

    setModalVisibilityOFF(state){
      state.modalManager[0].isModalVisible = false;
      state.modalManager[0].title = '';
      state.modalManager[0].content = '';
      state.modalManager[0].cellID = null;
    },

    playerSwitching(state, payload){
      
      let playerIDindex = payload.playerID - 1;
      console.log('previous player', playerIDindex);
      console.log('player status before switching :', state.playerStatus);
      state.playerStatus[playerIDindex].active = false;
      playerIDindex += 1;
      if(playerIDindex == 4){
        playerIDindex = 0;
      }
      console.log("Next PlayerIndex = ",playerIDindex);
      state.playerStatus[playerIDindex].active = true;
      console.log("Final State after switch player", state.playerStatus);
    },

    movePosition(state, payload){
      // Active Player (Rolling Dice)
      let steps = payload.finalDiceValue;
      let playerIDindex = payload.playerID - 1;
      let position = state.playerStatus[playerIDindex].position;
      console.log("Checking Inside Moveposition ===> Steps: , PlayerIndex:, Position:" , steps, playerIDindex, position);
      if(playerIDindex > 3){
        playerIDindex = 0;
      }
      position += steps;
      if(position > 39){
        position = position - 40;
      }
      state.playerStatus[playerIDindex].position = position;
      // Player Swiching Section
      // state.playerStatus[playerIDindex].active = false;
      // playerIDindex += 1;
      // if(playerIDindex == 4){
      //   playerIDindex = 0;
      // }
      // console.log("Next PlayerIndex = ",playerIDindex);
      // state.playerStatus[playerIDindex].active = true;
      // console.log("Final State inside Moveposition", state.playerStatus);
    },

    updateDiceValues(state, payload){
      state.diceValues[0].value = payload.dice1;
      state.diceValues[1].value = payload.dice2;
      state.diceValues[2].value = payload.dice1 + payload.dice2;
    },

    afterDiceRoll(state, payload){
    console.log("afterDiceRoll() in index.js");
    console.log("Current Active Player : ",payload.getCurrentActivePlayer, "Board Cells : ", payload.getBoardCells);
    let cellID = payload.getCurrentActivePlayer[0].position;
    let playerID = payload.getCurrentActivePlayer[0].player;
    let playerName = payload.getCurrentActivePlayer[0].name;
    let boardCells = payload.getBoardCells;
    let functionTriggerDetails = payload.functionTriggerStatus;

      function buyProperty(playerID, cellID, price) {
        console.log("buyProperty function INside index.js ============>>>>>>>>>>> ", playerID, "Cell ID  =====>", cellID, "Price ============>", price);
        state.playerStatus[playerID-1].amount -= price;
        state.playerStatus[playerID-1].properties_owned.push(cellID);
        state.boardCell[cellID].player_owned = playerID;
      }

      function triggerModal(title, content, cellID){
        console.log("Inside TriggerFunction index.js  ======> ")
        state.modalManager[0].isModalVisible = true;
          state.modalManager[0].title = title;
          state.modalManager[0].content = content ;
          state.modalManager[0].cellID = cellID ;
      }

      function playerSwitching(playerID){
        alert(playerID);
        let playerIDindex = playerID - 1;
        console.log('previous player', playerIDindex);
        console.log('player status before switching :', state.playerStatus);
        state.playerStatus[playerIDindex].active = false;
        playerIDindex += 1;
        if(playerIDindex == 4){
          playerIDindex = 0;
        }
        console.log("Next PlayerIndex = ",playerIDindex);
        state.playerStatus[playerIDindex].active = true;
        console.log("Final State after switch player", state.playerStatus);
      }


      // function playerStayLeaveInCell() {
      //   state.boardCell[cellID].players_stay.push(playerID);
      //   return true;

      // }

      // function IsCellOwned(){
        
      // }

      console.log("Before Switch Statement : CellID, PlayerID, boardCells", cellID, playerID, boardCells);
      switch(cellID) {
        case 0:
          playerSwitching(playerID);
          break;
        case 1:
          // MG ROAD - 80 Rs. - Property
          // [Code] check it is property and Noboby own it. Then provide option for Buying it
          
        var cellStatus1 = boardCells.filter(item => item.index == cellID);
        if(cellStatus1[0].player_owned == null && cellStatus1[0].type == 'property'){
            // [code] add && if the player brought the property 

          let title = cellStatus1[0].title;
          let content = playerName + ", Do You want Buy " + cellStatus1[0].title + "for " + cellStatus1[0].price + " Rs. ?";
          let cellID = cellStatus1[0].index;
          triggerModal(title, content, cellID);
          if(functionTriggerDetails[0].active){
            buyProperty(playerID, cellID, 80);
          }
        }
        else {
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
        }
        playerSwitching(playerID);
        break;
        case 2:
          // Community 
          playerSwitching(playerID);
          break;

        case 3:
          // Lucknow - 100 Rs. - Property
          var cellStatus3 = boardCells.filter(item => item.index == cellID);
          if(cellStatus3[0].player_owned == null && cellStatus3[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus3[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus3[0].title + "for " + cellStatus3[0].price + " Rs. ?";
            let cellID = cellStatus3[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 100);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 4:
          // Income Tax - 120 Rs. 
          var cellStatus4 = boardCells.filter(item => item.index == cellID);
          if(cellID == 4){
            let title = cellStatus4[0].title;
            let content = "You have to Pay 120 Rs to Income Tax department";      
            state.playerStatus[playerID-1].amount -= 100;
            triggerModal(title, content, cellID);
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 5:
          // Kanpur Railway Station - 130 Rs.
          var cellStatus5 = boardCells.filter(item => item.index == cellID);
          if(cellStatus5[0].player_owned == null){
              // [code] add && if the player brought the property 
  
            let title = cellStatus5[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus5[0].title + "for " + cellStatus5[0].price + " Rs. ?";
            let cellID = cellStatus5[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 130);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 6:
          // Oriental Avenue - 100 Rs.
          var cellStatus6 = boardCells.filter(item => item.index == cellID);
          if(cellStatus6[0].player_owned == null && cellStatus6[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus6[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus6[0].title + "for " + cellStatus6[0].price + " Rs. ?";
            let cellID = cellStatus6[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 100);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 7:
          // Chance
          playerSwitching(playerID);
          break;

        case 8:
          // Central Perk - 200 Rs.
          var cellStatus8 = boardCells.filter(item => item.index == cellID);
          if(cellStatus8[0].player_owned == null && cellStatus8[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus8[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus8[0].title + "for " + cellStatus8[0].price + " Rs. ?";
            let cellID = cellStatus8[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 200);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 9:
          // HillTop View - 130 Rs.
          var cellStatus9 = boardCells.filter(item => item.index == cellID);
          if(cellStatus9[0].player_owned == null && cellStatus9[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus9[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus9[0].title + "for " + cellStatus9[0].price + " Rs. ?";
            let cellID = cellStatus9[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 80);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 10:
          playerSwitching(playerID);
          // Jail
          break;

        case 11:
          // Red Fort - 140 Rs.
          var cellStatus11 = boardCells.filter(item => item.index == cellID);
          if(cellStatus11[0].player_owned == null && cellStatus11[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus11[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus11[0].title + "for " + cellStatus11[0].price + " Rs. ?";
            let cellID = cellStatus11[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 140);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 12:
          // Electric Company - 150 Rs.
          console.log("12");
          var cellStatus12 = boardCells.filter(item => item.index == cellID);
          if(cellStatus12[0].player_owned == null){
              // [code] add && if the player brought the property 
  
            let title = cellStatus12[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus12[0].title + "for " + cellStatus12[0].price + " Rs. ?";
            let cellID = cellStatus12[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 150);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 13:
          // Taj Mahal - 180 Rs.
          var cellStatus13 = boardCells.filter(item => item.index == cellID);
          if(cellStatus13[0].player_owned == null && cellStatus13[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus13[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus13[0].title + "for " + cellStatus13[0].price + " Rs. ?";
            let cellID = cellStatus13[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 180);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 14:
          // Ladakh - 200 Rs.
          var cellStatus14 = boardCells.filter(item => item.index == cellID);
          if(cellStatus14[0].player_owned == null && cellStatus14[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus14[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus14[0].title + "for " + cellStatus14[0].price + " Rs. ?";
            let cellID = cellStatus14[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 200);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 15:
          // Old RalwayStation - 160 rs
          // Boolean isPlayerBroughtProperty = cellStatus16[0].players_stay.includes(cellID);
          var cellStatus15 = boardCells.filter(item => item.index == cellID);
          if(cellStatus15[0].player_owned == null){
              // [code] add && if the player brought the property 
  
            let title = cellStatus15[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus15[0].title + "for " + cellStatus15[0].price + " Rs. ?";
            let cellID = cellStatus15[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 160);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 16:
          // St. Peter's Tower - 100 Rs.
          // checks cell containing player
          // Boolean isPlayerBroughtProperty = cellStatus16[0].players_stay.includes(cellID);
          var cellStatus16 = boardCells.filter(item => item.index == cellID);
          if(cellStatus16[0].player_owned == null && cellStatus16[0].type == 'property'){
             // [code] add && if the player brought the property 

            let title = cellStatus16[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus16[0].title + "for " + cellStatus16[0].price + " Rs. ?";
            let cellID = cellStatus16[0].index;
            triggerModal(title, content, cellID);

            console.log("buyProperty Method Working or not",functionTriggerDetails[0].active)
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 100);
            }
            console.log("after entering the buyproperty");
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 17:
          // Community Chest
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          playerSwitching(playerID);
          break;

        case 18:
          //Sports Hub - 200 Rs.
          var cellStatus18 = boardCells.filter(item => item.index == cellID);
          if(cellStatus18[0].player_owned == null && cellStatus18[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus18[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus18[0].title + "for " + cellStatus18[0].price + " Rs. ?";
            let cellID = cellStatus18[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 200);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 19:
          // TownHall - 150 Rs.
          var cellStatus19 = boardCells.filter(item => item.index == cellID);
          if(cellStatus19[0].player_owned == null && cellStatus19[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus19[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus19[0].title + "for " + cellStatus19[0].price + " Rs. ?";
            let cellID = cellStatus19[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 150);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          playerSwitching(playerID);
          break;

        case 20:
          // Free Parking.
          if(cellID == 20){
            let title = cellStatus4[0].title;
            let content = "You have to Pay 220 Rs as Luxuary Tax";      
            state.playerStatus[playerID-1].amount -= 125;
            triggerModal(title, content, cellID);
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 21:
          // Jaipur - 220 Rs.
          var cellStatus21 = boardCells.filter(item => item.index == cellID);
          if(cellStatus21[0].player_owned == null && cellStatus21[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus21[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus21[0].title + "for " + cellStatus21[0].price + " Rs. ?";
            let cellID = cellStatus21[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 220);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 22:
          // Chance
          break;

        case 23:
          // Kochi - 250 Rs.
          var cellStatus23 = boardCells.filter(item => item.index == cellID);
          if(cellStatus23[0].player_owned == null && cellStatus23[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus23[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus23[0].title + "for " + cellStatus23[0].price + " Rs. ?";
            let cellID = cellStatus23[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 250);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 24:
          // Clock Tower - 140 Rs.
          var cellStatus24 = boardCells.filter(item => item.index == cellID);
          if(cellStatus24[0].player_owned == null && cellStatus24[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus24[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus24[0].title + "for " + cellStatus24[0].price + " Rs. ?";
            let cellID = cellStatus24[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 140);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 25:
          // Cuttack Railway Station - 150 Rs.
          var cellStatus25 = boardCells.filter(item => item.index == cellID);
          if(cellStatus25[0].player_owned == null && cellStatus25[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus25[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus25[0].title + "for " + cellStatus25[0].price + " Rs. ?";
            let cellID = cellStatus25[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 150);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 26:
          // Surat - 190 Rs.
          var cellStatus26 = boardCells.filter(item => item.index == cellID);
          if(cellStatus26[0].player_owned == null && cellStatus26[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus26[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus26[0].title + "for " + cellStatus26[0].price + " Rs. ?";
            let cellID = cellStatus26[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 190);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 27:
          // Ambakar Road - 130 Rs.
          var cellStatus27 = boardCells.filter(item => item.index == cellID);
          if(cellStatus27[0].player_owned == null && cellStatus27[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus27[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus27[0].title + "for " + cellStatus27[0].price + " Rs. ?";
            let cellID = cellStatus27[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 130);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 28:
          // Water Works - 120 Rs.
          var cellStatus28 = boardCells.filter(item => item.index == cellID);
          if(cellStatus28[0].player_owned == null && cellStatus28[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus28[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus28[0].title + "for " + cellStatus28[0].price + " Rs. ?";
            let cellID = cellStatus28[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 120);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 29:
          // Silent Valley - 200 Rs.
          var cellStatus29 = boardCells.filter(item => item.index == cellID);
          if(cellStatus29[0].player_owned == null && cellStatus29[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus29[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus29[0].title + "for " + cellStatus29[0].price + " Rs. ?";
            let cellID = cellStatus29[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 200);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 30:
          // GO TO JAIL
          state.playerStatus[playerID-1].position = 10;
          state.boardCell[10].players_stay.push(playerID);
          triggerModal('Go To Jail', 'You was sent directly to jail.', cellID);
          break;

        case 31:
          // Banglore - 300 Rs.
          var cellStatus31 = boardCells.filter(item => item.index == cellID);
          if(cellStatus31[0].player_owned == null && cellStatus31[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus31[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus31[0].title + "for " + cellStatus31[0].price + " Rs. ?";
            let cellID = cellStatus31[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 300);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 32:
          // Shillong - 320 Rs.
          var cellStatus32 = boardCells.filter(item => item.index == cellID);
          if(cellStatus32[0].player_owned == null && cellStatus32[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus32[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus32[0].title + "for " + cellStatus32[0].price + " Rs. ?";
            let cellID = cellStatus32[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 320);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 33:
          // Community Chest
          state.boardCell[cellID].players_stay.push(playerID+1); //[code] remove if player is out
          break;

        case 34:
          // Chennai - 320 Rs.
          var cellStatus34 = boardCells.filter(item => item.index == cellID);
          if(cellStatus34[0].player_owned == null && cellStatus34[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus34[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus34[0].title + "for " + cellStatus34[0].price + " Rs. ?";
            let cellID = cellStatus34[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 320);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 35:
          // Qutab Minar - 200 Rs.
          var cellStatus35 = boardCells.filter(item => item.index == cellID);
          if(cellStatus35[0].player_owned == null && cellStatus35[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus35[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus35[0].title + "for " + cellStatus35[0].price + " Rs. ?";
            let cellID = cellStatus35[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 80);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 36:
          // Chance
          state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          break;

        case 37:
          // City Palace - 350 Rs.
          var cellStatus37 = boardCells.filter(item => item.index == cellID);
          if(cellStatus37[0].player_owned == null && cellStatus37[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus37[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus37[0].title + "for " + cellStatus37[0].price + " Rs. ?";
            let cellID = cellStatus37[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 350);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 38:
          // Luxuary Tax - 220 Rs.
          var cellStatus38 = boardCells.filter(item => item.index == cellID);
          if(cellID == 38){
            let title = cellStatus38[0].title;
            let content = "You have to Pay 220 Rs as Luxuary Tax";      
            state.playerStatus[playerID-1].amount -= 125;
            triggerModal(title, content, cellID);
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;

        case 39:
          // Marine Drive - 400 Rs.
          var cellStatus39 = boardCells.filter(item => item.index == cellID);
          if(cellStatus39[0].player_owned == null && cellStatus39[0].type == 'property'){
              // [code] add && if the player brought the property 
  
            let title = cellStatus39[0].title;
            let content = playerName + ", Do You want Buy " + cellStatus39[0].title + "for " + cellStatus39[0].price + " Rs. ?";
            let cellID = cellStatus39[0].index;
            triggerModal(title, content, cellID);
            if(functionTriggerDetails[0].active){
              buyProperty(playerID, cellID, 400);
            }
          }
          else {
            state.boardCell[cellID].players_stay.push(playerID); //[code] remove if player is out
          }
          break;


        default:
          return true;
      }
    },

    buyPropertyManager(state, payload){
      //delete below
      let buyPropertyFunctionActivation = payload.functionTrigger.filter(item => item.name === 'buyProperty');
      console.log('Inside buy property', buyPropertyFunctionActivation);
      state.functionTrigger[0].active = true;
    },
    // Updating each player status [Amount, propertiesOwnd, player_owned in cell] according to each move
    buyPropertyGlobalFn(state, payload) {
      state.playerStatus[payload.playerID-1].amount -= payload.price;
      state.playerStatus[payload.playerID-1].properties_owned.push(payload.cellID);
      state.boardCell[payload.cellID].player_owned = payload.playerID;
    }

  },

  actions: {
    setModalVisibilityON(context, payload){
      context.commit('setModalVisibilityON', payload)
    },

    setModalVisibilityOFF(context, payload){
      context.commit('setModalVisibilityOFF')
    },

    movePosition(context, payload){
      context.commit('movePosition', payload);
    },

    updateDiceValues(context, payload){
      context.commit('updateDiceValues', payload);
    },

    afterDiceRoll(context, payload){
      context.commit('afterDiceRoll', payload);
    },

    buyPropertyManager(context, payload){
      context.commit('buyPropertyManager', payload);
    },

    buyPropertyGlobalFn(context, payload){
      context.commit('buyPropertyGlobalFn', payload);
    },

    playerSwitching(context, payload){
      context.commit('playerSwitching', payload);
    }
  }
})
