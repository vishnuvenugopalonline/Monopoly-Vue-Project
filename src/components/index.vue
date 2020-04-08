<template>
  <div class="hello" id="wrapper">
    <div class="start-menu">
      <div class="container">
        <img
          id="logo"
          src="../assets/img/monopoly_logo.png"
          width="200px"
        >
        <div class="player-button">1 Player Mode</div>
        <div class="player-button">2 Player Mode</div>
        <div class="player-button">3 Player Mode</div>
        <div class="player-button">4 Player Mode</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#logo {
  display: block;
}

html,
#wrapper {
  height: 100%;
  width: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

#wrapper {
  background-image: url("https://lukakva.github.io/NyanPong/resources/background.jpg");
}

.container {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  transform: translateY(-50%);
  text-align: center;
}

.player-button {
  width: 300px;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  color: white;
  background: darkred;
  border: 5px solid rgba(255, 255, 0, 0.5);
  display: inline-block;
  font-family: sans-serif;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  user-select: none;
}

.player-button:hover {
  transform: scale(1.05);
}

.player-button:active {
  transform: scale(0.95);
}
</style>
