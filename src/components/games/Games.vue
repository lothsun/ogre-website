<template>
    <section class="section">
        <div class="container">
            <div class="games columns is-desktop">
                <div v-for="game in games" :key="game.id" class="column is-6">
                    <div class="game card">
                        <div class="card-header">
                            <div class="card-header-title"><h2 class="title">{{ game.title }}</h2></div>
                            <!-- <div class="card-header-icon">
                                <div v-if="players[0] === currentUser.uid" class="leave-game button">Leave</div>
                                <div v-else class="join-game button">Join</div>
                            </div> -->
                        </div>
                        <div class="card-content">
                            <div class="columns">
                                <div class="dm column">DM:<span class="has-text-weight-bold">{{ game.dm }}</span></div>
                                <div class="players-count column">Players:<span class="has-text-weight-bold">{{ game.currentPlayers }}/{{ game.maxPlayers }}</span></div>
                            </div>
                            <div class="desc">{{ game.desc }}</div>
                        </div>
                        <div class="card-footer">
                            <div class="card-footer-item"></div>
                            <router-link class="card-footer-item" :to="{ name: 'ViewGame', params: { game_id: game.id }}">View Game</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import db from '@/firebase/init'

export default {
    name: 'Games',
    data() {
        return {
            games:[],
            players:[],
            currentUser: {
                uid: "GTv68wXXfHQ2BRecVhxNWBDDRTr1",
            }
        }
    },
    created(){
        //fetch data from firestore
        db.collection('games').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log(doc)
                //console.log(doc.id, " => ", doc.data())
                console.log(doc.data())
                let game = doc.data()
                game.id = doc.id
                let players = game.players
                console.log(players)
                this.games.push(game)
            })
        })
        
    }
}
</script>


<style scoped>
.game {
    /* margin: auto; */
    margin-top: 20px;
}
</style>