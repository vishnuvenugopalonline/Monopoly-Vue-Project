<template>
    <div>
        <div id="wrapper">
            <div id="house">
                <img src="../../assets/img/house.png" alt="house" width="10px">
                <span name="noofhouseleft">: {{getActivePlayer[0].house_owned}}</span>
            </div>
            <div id="restuarnt">
                <img src="../../assets/img/lighthouse.png" alt="lighthouse" width="10px">
                <span name="noofrestleft">: {{getActivePlayer[0].restaurant_owned}}</span>
            </div>
            <hr/>
            <div name="playerpropertyown">
                <h4>Properties Owned by you</h4>
                <listOwnedProperties v-bind:playerID="getActivePlayer[0].player" handleChange="handleChange" />
            </div>
        </div>
    </div>
</template>
<script>
import listOwnedProperties from '../listOwnedProperties'
export default {
    components: {
        listOwnedProperties
    },

    computed: {
        getPlayerCurrentStatus : function(){
            return this.$store.getters.playerCurrentStatus;
        },

        getActivePlayer : function(){
            return this.$store.getters.activePlayer;
        }
    }
}
</script>
<style scoped>
#house {
    display: inline-block;
    margin: 2px;
}

#restuarnt {
    display: inline-block;
    margin: 2px;
}
</style>