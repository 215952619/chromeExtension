<template>
    <div class="popup">
        <hello-world />
        <p>this is a popup component</p>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "App",
    components: { HelloWorld },
};
</script>

<style>
html {
    width: 400px;
    height: 400px;
}
</style>
