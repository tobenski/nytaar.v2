<template>
    <div class="flex flex-col">
        <Navigation />
        <router-view></router-view>
    </div>
</template>

<script>
import Navigation from './Navigation';
export default {
    name: "App",
    components: {
        Navigation,
    }
}
</script>

<style>

</style>