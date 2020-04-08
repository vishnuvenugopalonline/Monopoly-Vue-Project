<template>
  <div id="wrapper">
    <div class="tab">
      <button class="tablinks" v-on:click="openTab(event, 'buyDashboard')">Buy</button>
      <button class="tablinks" v-on:click="openTab(event, 'manageDashboard')">Manage</button>
      <button class="tablinks" v-on:click="openTab(event, 'tradeDashboard')">Trade</button>
    </div>

    <div id="buyDashboard" class="tabcontent">
      <h3>buyDashboard</h3>
    </div>

    <div id="manageDashboard" class="tabcontent">
        <manage/>
    </div>

    <div id="tradeDashboard" class="tabcontent">
      <trade/>
    </div>
  </div>
</template>
<script>
import manage from './dashboard_components/manage.vue'
import trade from './dashboard_components/trade.vue'
export default {
  components: {
      'manage': manage,
      'trade': trade
    },
  methods: {
    // Tab JS codes
    openTab(evt, cityName) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(cityName).style.display = "block";
      evt.currentTarget.className += " active";
    }
  }
};
</script>

<style scoped>
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
}

/* Style the buttons that are used to open the tab content */
.tab button {
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  transition: 0.3s;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
}

/* Create an active/current tablink class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
}
</style>