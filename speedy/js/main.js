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
        ]
    },
    created() {
        console.log(this.options)
    }
})