<template>
<div id="wrapper">
    <div class="container">
        <div id="title" class="slide header">
            <h1>Score Board</h1>
        </div>
        <div class="calendar-container" v-for="player in getAllPlayer" :key="player.player">
            <div class="divEach">
                <div class="name">{{player.name}}</div>
                <div class="amount">{{player.amount}}</div>
            </div>
        </div>
    </div>
</div>

  
<!-- </div> 
    <div v-for="player in getAllPlayer" :key="player.player" class="container">
        <div id="name" style="display: block;">
            {{player.name}}
        </div>
        <div id="amount" style="display: block;">
             {{player.amount}}
        </div>
    </div>
</div>    -->
</template>

<script>
export default {
    name: 'allPlayerStatus',
    computed: {
        getAllPlayer : function(){
            return this.$store.getters.allPlayers;
        }
    }
}
</script>

<style scoped>

body {
  background: #ccc;
  font: 'Lato', sans-serif;
  margin: 0;
}

#wrapper {
    position: relative;
    margin-top: 20px;
}

.container {
  left: 50%;
  position: absolute;
  top: 50%;
}

.calendar-container {
  position: relative;
  width: 250px;
}

.calendar-container .divEach {
  border-radius: 12px 12px 12px 12px;
  background: #e66b6b;
  margin-bottom: 2px;
  color: #fff;
  padding: 3em 2em;
}

.name {
    font-size: 2em;
    font-weight: 800;
    line-height: 1em;
}

.amount {
  font-size: 2em;
  line-height: 1em;
  text-transform: lowercase;
}

.slide {
  position: relative;
  box-sizing: border-box;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, .7);
}

h1 {
   font-size: 150%
}

.header {
  text-align: center;
  font-size: 175%;
  color: #fff;
  text-shadow: 0 2px 2px #000;
}


</style>