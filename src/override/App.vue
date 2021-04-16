<template>
    <div class="full" :style="{ backgroundImage: `url(${image})` }">
        <el-button>button</el-button>
    </div>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            image: require("@/assets/bgi.jpeg"),
        };
    },
    mounted() {
        console.log("image", this.image);
    },
};
</script>

<style lang="css" scoped>
.full {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
