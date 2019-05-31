<template>
    <section class="section">
        <div class="container">
            <div class="games">
                <div v-for="game in games" :key="game.id" class="card game">
                    <div class="card-header">
                        <div class="card-header-title">{{ game.title }}</div>
                        <div class="card-header-icon">{{ game.dm }}</div>
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
import db from '@/firebase/init'

export default {
    name: 'Games',
    data() {
        return {
            games:[]
        }
    },
    created(){
        //fetch data from firestore
        db.collection('games').get()
        .then(snapshot => {
            snapshot.forEach(doc => {
                //console.log(doc)
                //console.log(doc.id, " => ", doc.data())
                //console.log(doc.data())
                let game = doc.data()
                game.id = doc.id
                this.games.push(game)
            })
        })
    }
}

</script>


<style scoped>
.game{
    /* margin: auto; */
    margin-top: 20px;
}
</style>