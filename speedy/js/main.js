const speedyApp = new Vue({
    el: '#app',
    data: {
        options: [
            {
                id: 1,
                method: 'chooseDeliveryType',
                text: 'Delivery Type',
                icon: 'fa fa-th-large'
            },
            {
                id: 2,
                method: 'chooseRestaurant',
                text: 'Restaurant',
                icon: 'fa fa-building'
            },
            {
                id: 3,
                method: 'chooseOrder',
                text: 'Order',
                icon: 'fa fa-shopping-basket'
            },
            {
                id: 4,
                method: 'addPayment',
                text: 'Payment',
                icon: 'fa fa-money'
            }
        ],
        types: [
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
        setMethod(type) {
            switch(type) {
                case 'chooseDeliveryType':
                    this.chooseDeliveryType()
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
        chooseDeliveryType() {
            
        },
        chooseRestaurant() {
            console.log('chooseRestaurant')
        },
        chooseOrder() {
            console.log('chooseOrder')
        },
        addPayment() {
            console.log('addPayment')
        }
    }
})