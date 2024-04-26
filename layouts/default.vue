<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const appConfig = useAppConfig();
console.log(appConfig)
</script>

<template>
    <div class="border border-blue-700 p-2">
        <slot></slot>
    </div>
</template>

<style scoped>

</style>