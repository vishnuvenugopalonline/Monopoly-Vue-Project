<template>
<div id="wrapper">
    <table id="board">
		<tr>
			<td class="cell board-corner" id="cell20">
				<img v-if="getAllPlayer[0].position == 20" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 20" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 20" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 20" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell21">
				<img v-if="getAllPlayer[0].position == 21" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 21" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 21" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 21" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell22">
				<img v-if="getAllPlayer[0].position == 22" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 22" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 22" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 22" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell23">
				<img v-if="getAllPlayer[0].position == 23" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 23" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 23" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 23" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell24">
				<img v-if="getAllPlayer[0].position == 24" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 24" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 24" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 24" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell25">
				<img v-if="getAllPlayer[0].position == 25" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 25" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 25" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 25" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell26">
				<img v-if="getAllPlayer[0].position == 26" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 26" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 26" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 26" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell27">
				<img v-if="getAllPlayer[0].position == 27" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 27" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 27" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 27" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell28">
				<img v-if="getAllPlayer[0].position == 28" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 28" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 28" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 28" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-top" id="cell29">
				<img v-if="getAllPlayer[0].position == 29" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 29" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 29" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 29" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-corner" id="cell30">
				<img v-if="getAllPlayer[0].position == 10" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 30" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 30" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 30" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/></td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell19">
				<img v-if="getAllPlayer[0].position == 19" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 19" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 19" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 19" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell31">
				<img v-if="getAllPlayer[0].position == 31" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 31" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 31" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 31" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell18">
				<img v-if="getAllPlayer[0].position == 18" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 18" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 18" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 18" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell32">
				<img v-if="getAllPlayer[0].position == 32" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 32" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 32" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 32" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell17">
				<img v-if="getAllPlayer[0].position == 17" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 17" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 17" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 17" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell33">
				<img v-if="getAllPlayer[0].position == 33" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 33" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 33" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 33" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/></td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell16">
				<img v-if="getAllPlayer[0].position == 16" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 16" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 16" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 16" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell34">
				<img v-if="getAllPlayer[0].position == 34" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 34" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 34" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 34" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell15">
				<img v-if="getAllPlayer[0].position == 15" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 15" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 15" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 15" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell35">
				<img v-if="getAllPlayer[0].position == 35" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 35" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 35" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 35" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell14">
				<img v-if="getAllPlayer[0].position == 14" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 14" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 14" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 14" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell36">
				<img v-if="getAllPlayer[0].position == 36" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 36" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 36" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 36" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell13">
				<img v-if="getAllPlayer[0].position == 13" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 13" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 13" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 13" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell37">
				<img v-if="getAllPlayer[0].position == 37" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 37" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 37" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 37" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/></td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell12">
				<img v-if="getAllPlayer[0].position == 12" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 12" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 12" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 12" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center"></td>
			<td class="cell board-right" id="cell38">
				<img v-if="getAllPlayer[0].position == 38" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 38" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 38" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 38" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-left" id="cell11">
				<img v-if="getAllPlayer[0].position == 11" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 11" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 11" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 11" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td colspan="9" class="board-center">
				<div id="jail"></div>
			</td>
			<td class="cell board-right" id="cell39">
				<img v-if="getAllPlayer[0].position == 39" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 39" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 39" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 39" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
		<tr>
			<td class="cell board-corner" id="cell10">
				<img v-if="getAllPlayer[0].position == 10" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 10" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 10" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 10" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell9">
				<img v-if="getAllPlayer[0].position == 9" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 9" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 9" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 9" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell8">
				<img v-if="getAllPlayer[0].position == 8" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 8" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 8" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 8" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell7">
				<img v-if="getAllPlayer[0].position == 7" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 7" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 7" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 7" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell6">
				<img v-if="getAllPlayer[0].position == 6" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 6" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 6" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 6" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell5">
				<img v-if="getAllPlayer[0].position == 5" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 5" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 5" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 5" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell4">
				<img v-if="getAllPlayer[0].position == 4" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 4" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 4" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 4" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell3">
				<img v-if="getAllPlayer[0].position == 3" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 3" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 3" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 3" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell2">
				<img v-if="getAllPlayer[0].position == 2" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 2" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 2" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 2" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-bottom" id="cell1">
				<img v-if="getAllPlayer[0].position == 1" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 1" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 1" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 1" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
			<td class="cell board-corner" id="cell0">
				<img v-if="getAllPlayer[0].position == 0" class="player" src="../assets/icons/player_blue.png" alt="Player 1"/>
				<img v-if="getAllPlayer[1].position == 0" class="player" src="../assets/icons/player_green.png" alt="Player 2"/>
				<img v-if="getAllPlayer[2].position == 0" class="player" src="../assets/icons/player_red.png" alt="Player 3"/>
				<img v-if="getAllPlayer[3].position == 0" class="player" src="../assets/icons/player_yellow.png" alt="Player 4"/>
			</td>
		</tr>
	</table>
	<dice/>
	<statusDashboard/>
</div>
</template>

<script>
import statusDashboard from './statusDashboard'
import dice from './dice'

export default {
	components: {
		'statusDashboard': statusDashboard,
		dice
		},

	computed: {
		getAllPlayer : function(){
            return this.$store.getters.allPlayers;
        }
	},

//   computed: {
// 		gameEngine: function(playerPosition){
// 		  switch (playerPosition) {
// 			case 0:
// 				day = "Sunday";
// 				break;
// 			case 1:
// 				day = "Monday";
// 				break;
// 			}
// 	}
//   }
}
</script>

<style scoped>
	table, td, tr {
		border: 1px solid #000000;
	}
    .cell {
		position: relative;
        top: 0px;
        left: 0px;
        padding: 0px;
        vertical-align: bottom;
        background-repeat: no-repeat;
        background-size: auto 40px;
    }

    .board-center {
        width: 675px;
        border: none;
        vertical-align: bottom;
        background-repeat: no-repeat;
        background-size: auto 40px;
    }

    .board-corner {
        width: 102px;
        height: 102px;
    }

    .board-top {
        width: 72px;
        height: 102px;
    }

    .board-bottom {
        width: 72px;
        height: 102px;
    }

    .board-left {
        width: 102px;
        height: 72px;
    }

    .board-right {
        width: 102px;
        height: 72px;
    }

	.player {
		width: 16px;
		height: 48px;
	}

</style>
