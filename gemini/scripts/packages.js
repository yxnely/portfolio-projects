const geminiApp = new Vue({
	el: '#app',
	data: {
        items: []
,    },
    created() {
        fetch('https://yxnely.github.io/portfolio-projects/gemini/data/packages.json', {
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