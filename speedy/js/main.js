const speedyApp = new Vue({
    el: '#app',
    data: {
        showOptions: false,
        showOverview: true,
        options: [
            {
                id: 1,
                method: 'chooseDeliveryType',
                text: 'Delivery Type',
                icon: 'fa fa-th-large',
                chosen: ''
            },
            {
                id: 3,
                method: 'chooseOrder',
                text: 'Order',
                icon: 'fa fa-shopping-basket',
                chosen: ''
            },
            {
                id: 4,
                method: 'addPayment',
                text: 'Payment',
                icon: 'fa fa-money',
                chosen: ''
            }
        ],
        types: [],
        currSelection: '',
        deliveryOptions: [
            {
                id: 1,
                name: 'Restaurant'
            },
            {
                id: 2,
                name: 'Fast Food'
            },
            {
                id: 3,
                name: 'Grocery Store'
            }
        ],
        storeOptions: [
            {
                id: 1,
                name: 'Red Robin',
                type: 'Restaurant'
            },
            {
                id: 2,
                name: 'Olive Garden',
                type: 'Restaurant'
            },
            {
                id: 3,
                name: 'Red Robin',
                type: 'Restaurant'
            },
            {
                id: 4,
                name: 'Walmart',
                type: 'Grocery Store'
            },
            {
                id: 5,
                name: 'Winn-Dixie',
                type: 'Grocery Store'
            },
            {
                id: 6,
                name: 'Walgreens',
                type: 'Grocery Store'
            },
            {
                id: 7,
                name: 'McDonalds',
                type: 'Fast Food'
            },
            {
                id: 8,
                name: 'Sonic',
                type: 'Fast Food'
            },
            {
                id: 9,
                name: 'Wendys\'s',
                type: 'Fast Food'
            }
        ]
    },
    methods: {
        setMethod(type, id) {
            switch(type) {
                case 'chooseDeliveryType':
                    this.chooseDeliveryType(id)
                    break
                case 'chooseRestaurant':
                    this.chooseRestaurant()
                    break
                case 'chooseOrder':
                    this.chooseOrder()
                    break
                case 'addPayment':
                    this.addPayment()
                    break
            }
        },
        chooseDeliveryType(methodId) {
            this.types = this.deliveryOptions
            this.currSelection = methodId

            this.showOptions = true
            this.showOverview = false
        },
        chooseStore() {
            console.log('chooseStore')
        },
        chooseOrder() {
            console.log('chooseOrder')
        },
        addPayment() {
            console.log('addPayment')
        },
        itemChosen(id) {
            const chosenItem = this.options.map(e => e.id).indexOf(this.currSelection)
            const typeSelection = this.types.map(e => e.id).indexOf(id)
            
            this.options[chosenItem].chosen = this.types[typeSelection]

            const newOption = {
                id: 2,
                method: 'chooseStore',
                text: this.types[typeSelection].name,
                type: this.types[typeSelection].name,
                icon: 'fa fa-building',
                chosen: ''
            }

            /* 
                Insert to the original options
                to appear on the main order screen
            */
           this.options.length > 3 ? this.options.splice(1, 1, newOption) : this.options.splice(1, 0, newOption)
            

            // Return to original options screen
            this.showOptions = false
            this.showOverview = true
        }
    }
})