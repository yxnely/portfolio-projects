Vue.component('music-list', {
    template: '<div class="list">\
    <h2>{{ name }}</h2>\
    <slot>Week of 02/20/2018</slot>\
    <ul class="collection">\
        <music-list-item :spot="spot" v-for="(spot, i) in music" @remove="remove(i)" :key="music.id"></music-list-item>\
    </ul>\
    </div>',
    props: ['name', 'music'],
    methods: {
        remove(i) {
            this.music.splice(i, 1)
        }
    }
})

Vue.component('music-list-item', {
    template: '<li class="collection-item">\
        <p>\
            <span>{{ spot.id }}</span> - {{ spot.name }} by {{ spot.artist }}\
        </p>\
        <a @click="requestRemove">Hide this item</a>\
    </li>',
    props: ['spot'],
    methods: {
        // This way, the child component lets the parent know it wants to 'remove'
        requestRemove() {
            this.$emit('remove')
        }
    }
})

const musicApp = new Vue({
	el: '#app',
	data: {
        musicChart: []
,    },
    created() {
        fetch('https://yxnely.github.io/vue-playground/musicVue/data/music.json', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            musicApp.musicChart = res
        })
        .catch(err => {
            console.log(err)
        })
    },
})