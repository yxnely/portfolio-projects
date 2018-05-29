const geminiApp = new Vue({
	el: '#app',
	data: {
        packages: [],
        statuses: []
    },
    created() {
        fetch('https://yxnely.github.io/portfolio-projects/gemini/data/packages.json', {
            method: 'GET'
        }).then(res => res.json())
        .then(res => {
            geminiApp.statuses = res.status
        })
        .catch(err => {
            console.log(err)
        })
    },
    methods: {
        getAllPackages() {
            return fetch('https://yxnely.github.io/portfolio-projects/gemini/data/packages.json', {
                method: 'GET'
            })
        },
        unfilter() {
            this.getAllPackages()
            .then(res => res.json())
            .then(res => {
                geminiApp.packages = []
                
                geminiApp.packages = res.packages
            })
            .catch(err => {
                console.log(err)
            })
        },
        filter(status) {
            this.getAllPackages()
            .then(res => res.json())
            .then(res => {
                geminiApp.packages = []

                res.packages.forEach(pkg => {
                    if (pkg.status == status) {
                        geminiApp.packages.push(pkg);
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})