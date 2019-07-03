<template>
    <div class="view-profile">
        <h1>Profile</h1>
        <div class="is-size-6">{{ userId }}</div>
    </div>
</template>


<script>
export default {
    name: 'ViewProfile',
    data() {
        return {
            userId: this.$route.params.user_id
        }
    },
    methods: {
        updateId(){
            this.userId = this.$route.params.user_id
        }
    },
    watch: {
        $route: 'updateId'
    }
}
</script>


<style scoped>

</style>