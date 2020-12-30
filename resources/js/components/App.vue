<template>
    <div>
        <h1>App.vue</h1>

        <p>
            <router-link :to="{ name: 'login' }">Login</router-link> |
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {}
</script>