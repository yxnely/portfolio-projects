const geminiApp = new Vue({
	el: '#app',
	data: {
        items: []
,    },
    created() {
        fetch('https://yxnely.github.io/', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            geminiApp.items = res
        })
        .catch(err => {
            console.log(err)
        })
    },
})