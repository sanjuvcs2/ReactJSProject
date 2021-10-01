const UserInfoMock = {
    firstName: 'Sanju',
    lastName: 'Balakrishnan',
    outlets: [
        {
            id: '1234',
            sellerId: '2700735993',
            sellerName: 'BRAUEREI ADLER AG',
            sellerAddress: 'HAUPTSTRASSE / 8762 SCHWANDEN',
            selected: true
        },
        {
            id: '12345',
            sellerId: '2700737890',
            sellerName: 'BRAUEREI ADLER AG',
            sellerAddress: 'HAUPTSTRASSE / 8762 SCHWANDEN',
            selected: true
        },
        {
            id: '123456',
            sellerId: '2700776567',
            sellerName: 'BRAUEREI ADLER AG',
            sellerAddress: 'HAUPTSTRASSE / 8762 SCHWANDEN',
            selected: true
        }
    ],
    orderType: {
        returnEmpties: true,
        orderDrinks: false
    },
    orderStatus: {
        pickupOrder: false,
        orderDrinks: true,
        currentOrderType: 'Order drinks'
    },
    wholesalerReportsLinks: [
        {
            id: 0,
            label: 'Sales Report',
            link: '/home'
        },
        {
            id: 1,
            label: 'Sell Out and Reference Report',
            link: '/home'
        },
        {
            id: 2,
            label: 'Sell Out Report',
            link: '/home'
        }
    ]
};

export default UserInfoMock;
