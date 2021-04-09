<template>
    <div class="options">
        <hello-world />
        <p>this is a p element</p>
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
