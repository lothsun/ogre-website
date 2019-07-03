<template>
    <section class="section game">
        <div class="container">
            <div class="players columns">
                <h1 class="is-size-1">{{game.title}}</h1>
                <!-- <div class="player column " v-for="player in game.players" :key="player.uid">
                    <div class="card">
                        <div class="name">{{player.name}}</div>
                        <div class="char">Playing: {{player.char.name}} {{player.char.race}}/{{player.char.class}}</div>
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>


<script>
import db from '@/firebase/init'

export default {
    name: 'ViewGame',
    data() {
        return {
            game: null
        }
    },
    created() {
        let ref = db.collection('games')
        
        ref.doc(this.$route.params.game_id).get()
        .then(game => {
            this.game = game.data()
        })
    },
}
</script>


<style scoped>

</style>