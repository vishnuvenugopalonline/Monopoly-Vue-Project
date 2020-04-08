<template>
<div id="boardContainer">
  <hr/>
  <modal v-if="this.$store.state.modalManager[0].isModalVisible" :title="getModalTitle" :content="getModalContent" :cellID="getCellID"/>
  <hr/>
  
  <hr/>
 
  <allPlayerStatus id="scoreBoard"/>
  <hr/>
    <div class="table">
        <div class="board">
            <div class="center">
                <div class="community-chest-deck">
                    <h2 class="label">Community Chest</h2>
                    <div class="deck"></div>
                </div>
                 
                 <dicetest id="diceTest" class="center"/>
                <h1 class="title">MONOPOLY</h1>
                <div class="chance-deck">
                    <h2 class="label">Chance</h2>
                    <div class="deck"></div>
                </div>
            </div>

            <div id="cell0" class="space corner go">
                <div class="container">
                    <div class="instructions" style="font-size: 11px !important;">Collect ₹200.00 salary as you pass</div>
                    <img v-if="getAllPlayer[1].position == 0" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                    <img v-if="getAllPlayer[0].position == 0" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                    <img v-if="getAllPlayer[2].position == 0" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                    <img v-if="getAllPlayer[3].position == 0" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                    <img class="cellColoumns" src="../assets/boardicons/goarrow.png" style="padding-top: 14px;" alt="go" width="52px"/>
                    <div class="go-word">go</div>
                </div>
                <!-- <div class="arrow fa fa-long-arrow-left"></div> -->
            </div>

            <div class="row horizontal-row bottom-row">
                <div id="cell9" class="space property">
                    <div class="container">
                        <div class="color-bar light-blue"></div>
                        <div class="name">Hilltop View</div>
                        <img v-if="getAllPlayer[0].position == 9" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 9" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 9" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 9" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹130</div>
                    </div>
                </div>
                <div id="cell8" class="space property">
                    <div class="container">
                        <div class="color-bar light-blue"></div>
                        <img v-if="getAllPlayer[0].position == 8" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 8" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 8" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 8" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="name">Central Perk</div>
                        <div class="price">Price ₹200</div>
                    </div>
                </div>
                <div id="cell7" class="space chance">
                    <div class="container">
                      <div class="name">Chance</div>
                      <img class="cellColoumns chance-cell" src="../assets/boardicons/chance.png" alt="chance" width="42px"/>
                      <img v-if="getAllPlayer[0].position == 7" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                      <img v-if="getAllPlayer[1].position == 7" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                      <img v-if="getAllPlayer[2].position == 7" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                      <img v-if="getAllPlayer[3].position == 7" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                    </div>
                </div>
                <div id="cell6" class="space property">
                    <div class="container">
                      <div class="color-bar light-blue"></div>
                      <div class="name">Oriental Avenue</div>
                      <img v-if="getAllPlayer[0].position == 6" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                      <img v-if="getAllPlayer[1].position == 6" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                      <img v-if="getAllPlayer[2].position == 6" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                      <img v-if="getAllPlayer[3].position == 6" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                      <div class="price">Price ₹100</div>
                    </div>
                </div>
                <div id="cell5" class="space railroad">    
                    <div class="container">
                      <div class="name">Kanpur Railway Station</div>
                      <img v-if="getAllPlayer[0].position == 5" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                      <img v-if="getAllPlayer[1].position == 5" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                      <img v-if="getAllPlayer[2].position == 5" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                      <img v-if="getAllPlayer[3].position == 5" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                      <i class="drawing fa fa-subway"></i>
                      <div class="price">Price ₹120</div>
                    </div>
                </div>
                <div id="cell4" class="space fee income-tax">
                    <div class="container">
                        <div class="name">Income Tax</div>
                        <img class="cellColoumns" src="../assets/boardicons/incometax.jpg" alt="community_chest" width="52px"/>
                        <img v-if="getAllPlayer[1].position == 4" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[0].position == 4" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[2].position == 4" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 4" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="diamond"></div>
                        <div class="instructions">Pay ₹100</div>
                    </div>
                </div>
                <div id="cell3" class="space property">
                    <div class="container">
                        <div class="color-bar dark-purple"></div>
                        <div class="name">Lucknow</div>
                        <img v-if="getAllPlayer[1].position == 3" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[0].position == 3" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[2].position == 3" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 3" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹100</div>
                    </div>
                </div>
                <div id="cell2" class="space community-chest">
                    <div class="container">
                        <div class="name">Community Chest</div>
                        <img class="cellColoumns" src="../assets/boardicons/community_chest.gif" alt="community_chest" width="52px"/>
                        <img v-if="getAllPlayer[1].position == 2" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[0].position == 2" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[2].position == 2" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 2" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="instructions">Follow instructions on top card</div>
                    </div>
                </div>
                <div id="cell1" class="space property">
                    <div class="container">
                        <div class="color-bar dark-purple"></div>
                        <div class="name three-line-name">MG Road</div>
                        <img v-if="getAllPlayer[1].position == 1" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[0].position == 1" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[2].position == 1" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 1" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹80</div>
                    </div>
                </div>
            </div>

            <div id="cell10" class="space corner jail">
                <div class="just">Just</div>
                <div class="drawing">
                    <div class="container">
                        <div class="name">In</div>
                        <div class="window">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <i class="person fa fa-frown-o"></i>
                        </div>
                        <div class="name">Jail</div>
                    </div>
                    <img v-if="getAllPlayer[1].position == 10" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                    <img v-if="getAllPlayer[0].position ==10" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                    <img v-if="getAllPlayer[2].position == 10" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                    <img v-if="getAllPlayer[3].position == 10" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                </div>
                <div class="visiting">Visiting</div>
            </div>

            <div class="row vertical-row left-row">
                <div class="space property">
                    <div class="container">
                        <div class="color-bar orange"></div>
                        <div class="name">TownHall</div>
                        <img v-if="getAllPlayer[0].position == 19" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 19" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 19" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 19" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹150</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar orange"></div>
                        <div class="name">Sports Hub</div>
                        <img v-if="getAllPlayer[0].position == 18" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 18" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 18" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 18" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹200</div>
                    </div>
                </div>
                <div class="space community-chest">
                    <div class="container">
                        <div class="name">Community Chest</div>
                        <img class="cellColoumns" src="../assets/boardicons/community_chest.gif" alt="community_chest" width="52px"/>
                        <img v-if="getAllPlayer[0].position == 17" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 17" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 17" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 17" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <!-- <i class="drawing fa fa-cube"></i> -->
                        <div class="instructions">Follow instructions on top card</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar orange"></div>
                        <div class="name">St. Peter's Tower</div>
                        <img v-if="getAllPlayer[0].position == 16" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 16" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 16" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 16" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹100</div>
                    </div>
                </div>
                <div class="space railroad">
                    <div class="container">
                        <div class="name long-name">Old Delhi Railway Station</div>
                        <img v-if="getAllPlayer[0].position == 15" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 15" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 15" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 15" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-subway"></i>
                        <div class="price">Price ₹160</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar purple"></div>
                        <div class="name">Ladakh</div>
                        <img v-if="getAllPlayer[0].position == 14" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 14" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 14" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 14" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹200</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar purple"></div>
                        <div class="name">Taj Mahal</div>
                        <img v-if="getAllPlayer[0].position == 13" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 13" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 13" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 13" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹180</div>
                    </div>
                </div>
                <div class="space utility electric-company">
                    <div class="container">
                        <div class="name">Electric Company</div>
                        <img v-if="getAllPlayer[0].position == 12" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 12" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 12" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 12" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-lightbulb-o"></i>
                        <div class="price">Price ₹150</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar purple"></div>
                        <div class="name">Red Fort</div>
                        <img v-if="getAllPlayer[0].position == 11" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 11" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 11" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 11" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹140</div>
                    </div>
                </div>
            </div>

            <div class="space corner free-parking">
                <div class="container">
                    <div class="name">Free</div>
                    <img class="cellColoumns" src="../assets/boardicons/freeparking.png" alt="parking" width="52px"/>
                    <div class="name">Parking</div>
                    <img v-if="getAllPlayer[0].position == 20" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                    <img v-if="getAllPlayer[1].position == 20" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                    <img v-if="getAllPlayer[2].position == 20" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                    <img v-if="getAllPlayer[3].position == 20" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                </div>
            </div>

            <div class="row horizontal-row top-row">
                <div class="space property">
                    <div class="container">
                        <div class="color-bar red"></div>
                        <div class="name">Jaipur</div>
                        <img v-if="getAllPlayer[0].position == 21" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 21" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 21" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 21" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹220</div>
                    </div>
                </div>
                <div class="space chance">
                    <div class="container">
                        <div class="name">Chance</div>
                        <img class="cellColoumns chance-cell" src="../assets/boardicons/chance.png" alt="chance" width="42px"/>
                        <img v-if="getAllPlayer[0].position == 22" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 22" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 22" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 22" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-question blue"></i>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar red"></div>
                        <div class="name">Kochi</div>
                        <img v-if="getAllPlayer[0].position == 23" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 23" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 23" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 23" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹250</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar red"></div>
                        <div class="name">Clock Tower</div>
                        <img v-if="getAllPlayer[0].position == 24" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 24" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 24" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 24" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹140</div>
                    </div>
                </div>
                <div class="space railroad">
                    <div class="container">
                        <div class="name">Cuttack Railway Station</div>
                        <img v-if="getAllPlayer[0].position == 25" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 25" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 25" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 25" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-subway"></i>
                        <div class="price">Price ₹150</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar yellow"></div>
                        <div class="name">Surat</div>
                        <img v-if="getAllPlayer[0].position == 26" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 26" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 26" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 26" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹190</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar yellow"></div>
                        <div class="name">Ambakar Road</div>
                        <img v-if="getAllPlayer[0].position == 27" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 27" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 27" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 27" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹130</div>
                    </div>
                </div>
                <div class="space utility waterworks">
                    <div class="container">
                        <div class="name">Waterworks</div>
                        <img v-if="getAllPlayer[0].position == 28" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 28" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 28" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 28" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-tint"></i>
                        <div class="price">Price ₹120</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar yellow"></div>
                        <div class="name">Silent Valley</div>
                        <img v-if="getAllPlayer[0].position == 29" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 29" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 29" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 29" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹200</div>
                    </div>
                </div>
            </div>

            <div class="space corner go-to-jail">
                <div class="container">
                    <div class="name">Go To</div>
                    <img class="cellColoumns" src="../assets/boardicons/gotojail.png" alt="gotojail" width="52px"/>
                    <div class="name">Jail</div>
                    <img v-if="getAllPlayer[0].position == 30" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                    <img v-if="getAllPlayer[1].position == 30" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                    <img v-if="getAllPlayer[2].position == 30" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                    <img v-if="getAllPlayer[3].position == 30" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                </div>
            </div>

            <div class="row vertical-row right-row">
                <div class="space property">
                    <div class="container">
                        <div class="color-bar green"></div>
                        <div class="name">Banglore</div>
                        <img v-if="getAllPlayer[0].position == 31" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 31" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 31" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 31" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹300</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar green"></div>
                        <div class="name three-line-name">Shillong</div>
                        <img v-if="getAllPlayer[0].position == 32" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 32" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 32" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 32" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹320</div>
                    </div>
                </div>
                <div class="space community-chest">
                    <div class="container">
                        <div class="name">Community Chest</div>
                        <img class="cellColoumns" src="../assets/boardicons/community_chest.gif" alt="community_chest" width="52px"/>
                        <img v-if="getAllPlayer[0].position == 33" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 33" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 33" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 33" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <!-- <i class="drawing fa fa-cube"></i> -->
                        <div class="instructions">Follow instructions on top card</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar green"></div>
                        <div class="name long-name">Chennai</div>
                        <img v-if="getAllPlayer[0].position == 34" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 34" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 34" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 34" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹320</div>
                    </div>
                </div>
                <div class="space railroad">
                    <div class="container">
                        <div class="name">Qutab Minar</div>
                        <img v-if="getAllPlayer[0].position == 35" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 35" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 35" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 35" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-subway"></i>
                        <div class="price">Price ₹200</div>
                    </div>
                </div>
                <div class="space chance">
                    <div class="container">
                        <div class="name">Chance</div>
                        <img class="cellColoumns chance-cell" src="../assets/boardicons/chance.png" alt="chance" width="42px"/>
                        <img v-if="getAllPlayer[0].position == 36" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 36" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 36" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 36" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <i class="drawing fa fa-question"></i>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar dark-blue"></div>
                        <div class="name">City Palace</div>
                        <img v-if="getAllPlayer[0].position == 37" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 37" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 37" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 37" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹350</div>
                    </div>
                </div>
                <div class="space fee luxury-tax">
                    <div class="container">
                        <div class="name">Luxury Tax</div>
                        <img v-if="getAllPlayer[0].position == 38" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 38" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 38" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 38" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <img class="cellColoumns" src="../assets/boardicons/diamond.png" alt="diamond" width="52px"/>
                        <div class="instructions">Pay ₹75</div>
                    </div>
                </div>
                <div class="space property">
                    <div class="container">
                        <div class="color-bar dark-blue"></div>
                        <div class="name">Marine Drive</div>
                        <img v-if="getAllPlayer[0].position == 39" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
                        <img v-if="getAllPlayer[1].position == 39" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
                        <img v-if="getAllPlayer[2].position == 39" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
                        <img v-if="getAllPlayer[3].position == 39" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
                        <div class="price">Price ₹400</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     <statusDashboard id="playerStatusBoard"/>
</div>
</template>

<script>
import statusDashboard from './statusDashboard'
import dicetest from './dicetest'
import modal from './modal'
import allPlayerStatus from './playerAllStatus'



export default {
    components: {
		'statusDashboard': statusDashboard,
    dicetest,
    modal,
    allPlayerStatus
	},

	computed: {
		getAllPlayer : function(){
      return this.$store.getters.allPlayers;
    },

    getModalStatus: function(){
      return this.$store.getters.getModalStatus;
    },

    getModalTitle: function(){
      return this.$store.state.modalManager[0].title;
    },

    getModalContent: function(){
      return this.$store.state.modalManager[0].content;
    },

    getAllCell: function(){
      return this.$store.getters.getBoardCell;
    },

    getActivePlayerCellID : function(){
      let activePlayer = this.$store.getters.activePlayer;
      let activePlayerCellID = activePlayer[0].position;
      return activePlayerCellID;
    }
  },
  
  methods: {
      // setModalVisibility: function(title, content){
      //   let cellID = this.getActivePlayerCellID;
      //   this.$store.dispatch("setModalVisibility", {title, content, cellID});
      //   return true;
      // }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  background-image: url("https://i.pinimg.com/originals/a4/73/cd/a473cda6c0a58d9b2e2bc2292d16c334.jpg");
  background-position: center;
  background-repeat: repeat;
  background-size: 100px;
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #080808;
  text-transform: uppercase;
  box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0;
  box-sizing: border-box;
}
.dark-purple {
  background: #5e3577;
}
.light-blue {
  background: #d2eaf5;
}
.purple {
  background: #b02f7c;
}
.orange {
  background: #fa811d;
}
.red {
  background: #f50c2b;
}
.yellow {
  background: #ffed20;
}
.green {
  background: #41994e;
}
.dark-blue {
  background: #5a6dba;
}
.table {
  padding-left: 50px;
  padding-right: 50px;
}
.board {
  display: grid;
  grid-template-columns: 125px repeat(9, 80px) 125px;
  grid-template-rows: 125px repeat(9, 80px) 125px;
  grid-gap: 2px;
  margin: 50px auto;
  width: 994px;
  height: 994px;
  background: #080808;
  border: 2px solid #080808;
  box-sizing: border-box;
}
.center {
  grid-column: 2 / 11;
  grid-row: 2 / 11;
  background: #fafaf8;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
  box-sizing: border-box;
}
.title {
  grid-column: 1 / 9;
  grid-row: 4;
  font-size: 90px;
  font-weight: 400;
  letter-spacing: 12px;
}
.community-chest-deck {
  grid-column: 2 / 4;
  grid-row: 2 / 4;
  transform: rotate(135deg);
  margin-bottom: 60px;
  margin-right: 60px;
}
.chance-deck {
  grid-column: 5 / 7;
  grid-row: 5 / 7;
  transform: rotate(315deg);
  margin-top: 60px;
  margin-left: 60px;
}
.label {
  text-align: center;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 10px;
}
.deck {
  border: 2px dashed #080808;
  width: 160px;
  height: 120px;
}
.row {
  display: grid;
  grid-gap: 2px;
}
.horizontal-row {
  grid-template-columns: repeat(9, 80px);
  grid-template-rows: 125px;
}
.vertical-row {
  grid-template-columns: 125px;
  grid-template-rows: repeat(9, 80px);
}
.vertical-row .container {
  top: 50%;
  left: 50%;
}
.bottom-row {
  grid-column: 2 / 11;
  grid-row: 11;
}
.left-row {
  grid-column: 1;
  grid-row: 2 / 11;
}
.left-row .container {
  transform: translate(-50%, -50%) rotate(90deg);
}
.top-row {
  grid-column: 2 / 11;
  grid-row: 1;
}
.top-row .container {
  transform: rotate(180deg);
}
.right-row {
  grid-column: 11;
  grid-row: 2 / 11;
}
.right-row .container {
  transform: translate(-50%, -50%) rotate(270deg);
}
.space {
  background: #fafaf8;
  text-align: center;
}
.space .container {
  justify-content: space-between;
  position: relative;
  transform-origin: center;
  height: 125px;
  width: 80px;
}
.space .name, .space .instructions {
  padding-left: 15px;
  padding-right: 15px;
}
.space .price {
  font-size: 7px;
  font-weight: 400;
  padding-bottom: 5px;
}
.corner .container {
  justify-content: space-around;
  height: 100%;
  width: 100%;
}
.corner .name {
  padding: 0;
}
.property .color-bar {
  height: 25px;
  border-bottom: 2px solid #080808;
}
.property .name {
  padding-bottom: 50px;
}
.railroad .name {
  padding-top: 10px;
}
.railroad .drawing {
  font-size: 60px;
  color: #080808;
}
.utility .name {
  padding-top: 10px;
}
.utility .drawing {
  font-size: 70px;
}
.fee .name {
  padding-top: 10px;
  font-size: 14px;
}
.fee .instructions {
  font-size: 10px;
}
.go {
  grid-column: 11;
  grid-row: 11 / 12;
  position: relative;
}
.go .container {
  justify-content: flex-start;
  transform: rotate(315deg);
}
.go .instructions {
  padding: 0 30px;
}
.go .go-word {
  font-size: 50px;
  color: #f50c2b;
}
.go .arrow {
  font-size: 45px;
  color: #f50c2b;
  position: absolute;
  bottom: -10px;
  left: 5px;
}
.jail {
  grid-column: 1;
  grid-row: 11 / 12;
  display: grid;
  grid-template-columns: repeat(10, 12.5px);
  grid-template-rows: repeat(10, 12.5px);
  justify-content: center;
  align-items: center;
}
.jail .drawing {
  grid-column: 4 / 11;
  grid-row: 1 / 8;
  width: 87.5px;
  height: 87.5px;
  background: #fa811d;
  border-bottom: 2px solid #080808;
  border-left: 2px solid #080808;
}
.jail .just {
  grid-column: 3;
  grid-row: 4;
  transform: rotate(90deg);
  padding-top: 5px;
}
.jail .visiting {
  grid-column: 6;
  grid-row: 8;
  padding-top: 5px;
}
.jail .container {
  align-items: center;
  transform: rotate(45deg);
}
.jail .name {
  font-size: 14px;
}
.jail .window {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  width: 55px;
  height: 55px;
  background: #fafaf8;
  border: 2px solid #080808;
}
.jail .person {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 40px;
}
.jail .bar {
  height: 55px;
  width: 2px;
  background: #080808;
}
.free-parking {
  grid-column: 1;
  grid-row: 1 / 2;
}
.free-parking .container {
  justify-content: center;
  transform: rotate(135deg);
}
.free-parking .name {
  font-size: 16px;
}
.free-parking .drawing {
  font-size: 60px;
  color: #f50c2b;
  padding-top: 5px;
  padding-bottom: 5px;
}
.go-to-jail {
  grid-column: 11;
  grid-row: 1 / 1;
}
.go-to-jail .container {
  justify-content: center;
  transform: rotate(225deg);
}
.go-to-jail .name {
  font-size: 16px;
}
.go-to-jail .drawing {
  font-size: 60px;
  color: #640303;
  padding-top: 5px;
  padding-bottom: 5px;
}
.chance .container {
  justify-content: center;
}
.chance .drawing {
  font-size: 90px;
  color: #f50c2b;
}
.chance .blue {
  color: #5a6dba;
}
.community-chest .container {
  justify-content: space-around;
}
.community-chest .drawing {
  font-size: 50px;
  color: #d2eaf5;
}
.community-chest .instructions {
  font-size: 8px;
}
.electric-company .drawing {
  color: #ffed20;
}
.waterworks .drawing {
  color: #5a6dba;
}
.income-tax .container {
  justify-content: center;
  align-items: center;
}
.income-tax .name {
  padding-bottom: 5px;
}
.income-tax .diamond {
  width: 5px;
  height: 5px;
  background: #080808;
  transform: rotate(45deg);
  display: inline-block;
}
.income-tax .instructions {
  padding-top: 5px;
  padding-bottom: 5px;
}
.luxury-tax .drawing {
  font-size: 50px;
}
.luxury-tax .instructions {
  padding-bottom: 5px;
}
.long-name {
  padding-left: 0 !important;
  padding-right: 0 !important;
}
.three-line-name {
  position: relative;
  top: 5px;
}

.player {
  width: 16px;
	height: 48px;
}
.positionWrapper { 
  position:relative;
}
.positionParent { 
  position:absolute; 
}
.positionChild {
  position:fixed;
}
.chance-cell {
  display: block;
  padding-left: 22px;
}

#playerStatusBoard {
  position: absolute;
}

#boardContainer {
  position: relative;
}

#diceTest {
  position: absolute;
  left: 956px;
}

#scoreBoard {
  position: absolute;
}

</style>