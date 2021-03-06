const geminiApp = new Vue({
	el: '#app',
	data: {
        packages: [],
        statuses: [],
        item: [],
        activeList: 'All',
        showList: false,
        showOptions: true,
        showDetails: false
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
        showAll() {
            this.getAllPackages()
            .then(res => res.json())
            .then(res => {
                geminiApp.packages = []
                geminiApp.activeList = 'All'

                this.showList = true
                this.showOptions = false
                
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
                this.setState(status)

                this.showList = true
                this.showOptions = false

                res.packages.forEach(pkg => {
                    if (pkg.status == status) {
                        geminiApp.packages.push(pkg);
                    }
                })
            })
            .catch(err => {
                console.log(err)
            })
        },
        setState(currStatus) {
            geminiApp.statuses.forEach(x => {
                if (x.id === currStatus) {
                    geminiApp.activeList = x.text
                }
            })
        },
        getItem(id) {
            this.item = this.packages.find(pkg => pkg.id === id)

            this.showList = false
            this.showOptions = false
            this.showDetails = true
        },
        reset() {
            this.showList = false
            this.showOptions = true
            geminiApp.packages = []
        },
        resetItem() {
            this.showList = true
            this.showDetails = false

            this.item = []
        }
    }
})