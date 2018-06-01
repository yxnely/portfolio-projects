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
                id: 2,
                method: 'chooseRestaurant',
                text: 'Restaurant',
                icon: 'fa fa-building',
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
        currSelection: null,
        deliveryTypes: [
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
            this.types = this.deliveryTypes
            this.currSelection = methodId

            this.showOptions = true
            this.showOverview = false
        },
        chooseRestaurant() {
            console.log('chooseRestaurant')
        },
        chooseOrder() {
            console.log('chooseOrder')
        },
        addPayment() {
            console.log('addPayment')
        },
        itemChosen(id) {
            console.log(currSelection)
            // const chosenItem = options.map(e => e.id).indexOf(currSelection)
            // console.log(chosenItem)
        }
    }
})