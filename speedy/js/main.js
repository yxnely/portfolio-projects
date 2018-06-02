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
                name: 'IHOP',
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
        ],
        storeOptionItems: [
            {
                id: 1,
                name: 'Quesalupa Combo',
                price: 6.50,
                storeId: 1
            },
            {
                id: 2,
                name: 'Crunch Combo',
                price: 5.50,
                storeId: 1
            },
            {
                id: 3,
                name: 'Pizza Combo',
                price: 5.00,
                storeId: 1
            },
            {
                id: 4,
                name: 'Nachos Combo',
                price: 6.00,
                storeId: 1
            },
            {
                id: 5,
                name: 'Breakfast Combo',
                price: 6.50,
                storeId: 2
            },
            {
                id: 6,
                name: 'Lunch Combo',
                price: 5.50,
                storeId: 2
            },
            {
                id: 7,
                name: 'Lunch Buffet Combo',
                price: 5.00,
                storeId: 2
            },
            {
                id: 8,
                name: 'Dinner Combo',
                price: 6.00,
                storeId: 2
            }
        ]
    },
    methods: {
        setMethod(type, id) {
            switch(type) {
                case 'chooseDeliveryType':
                    this.chooseDeliveryType(id)
                    break
                case 'chooseStore':
                    this.chooseStore(id)
                    break
                case 'chooseOrder':
                    this.chooseOrder(id)
                    break
                case 'addPayment':
                    this.addPayment(id)
                    break
            }
        },
        chooseDeliveryType(methodId) {
            this.types = this.deliveryOptions
            this.currSelection = methodId

            this.showOptions = true
            this.showOverview = false
        },
        chooseStore(methodId) {
            this.types = []
            this.storeOptions.forEach(element => {
                if (element.type == this.options[1].type) {
                    this.types.push(element)
                }
            });

            this.currSelection = methodId

            this.showOptions = true
            this.showOverview = false
        },
        chooseOrder(methodId) {
            this.types = []
            this.storeOptionItems.forEach(element => {
                if (element.storeId == this.options[1].storeId) {
                    this.types.push(element)
                }
            });

            this.currSelection = methodId

            this.showOptions = true
            this.showOverview = false
        },
        addPayment(methodId) {
            console.log('addPayment')
        },
        itemChosen(id) {
            const chosenItem = this.options.map(e => e.id).indexOf(this.currSelection)
            const typeSelection = this.types.map(e => e.id).indexOf(id)
            
            this.options[chosenItem].chosen = this.types[typeSelection]

            if (this.currSelection === 1) {
                const newOption = {
                    id: 2,
                    method: 'chooseStore',
                    text: this.types[typeSelection].name,
                    type: this.types[typeSelection].name,
                    storeId: this.types[typeSelection].id,
                    icon: 'fa fa-building',
                    chosen: ''
                }

                /* 
                    Insert to the original options
                    to appear on the main order screen
                */
                this.options.length > 3 ? this.options.splice(1, 1, newOption) : this.options.splice(1, 0, newOption)
            }

            // Return to original options screen
            this.showOptions = false
            this.showOverview = true
        }
    }
})