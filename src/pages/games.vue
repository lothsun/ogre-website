<template>
    <section class="section">
        <div class="container">
            <div v-for="(game, index) in games" :key="index" class="game">
                <div class="card">
                    <div class="card-header">
                        <div class="card-header-title"></div>
                        <div class="card-header-icon"></div>
                    </div>
                    <div class="card-image"></div>
                    <div class="card-content"></div>
                    <div class="card-footer">
                        <div class="card-footer-item"></div>
                        <div class="card-footer-item"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'Games',
    props: ['games'],
    data() {
        return {
            
        }
    },
}

</script>


<style scoped>

</style>