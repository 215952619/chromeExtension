<template>
    <div class="standalone">
        <hello-world />
        <p>this is a standalone</p>
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "App",
    components: { HelloWorld },
};
</script>
