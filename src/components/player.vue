<template>
    <div>
        <div class="container">
            <span id="imageContainer">
            </span>
        </div>
    </div>

</template>

<script>
export default {
    name: 'player'
}
</script>

<style scoped>

#imageContainer {
    content: url('../assets/icons/player_blue.png');
    width: 26px;
    height: 58px;
    margin: 6px;
}
</style>