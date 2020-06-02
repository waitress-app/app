const timestamp = {
  toDate: () => {
    return new Date()
  },
  seconds: 1586919600,
  nanoseconds: 0
}

const table = {
  calling: '',
  customers: [],
  pays: [],
  orders: [],
  code: '666666',
  number: '05'
}

const arrivedAt = timestamp

const customers = [
  {
    arrivalAt: timestamp,
    name: 'Teste',
    avatar: 'https://ui-avatars.com/api/?size=128&name=Teste&color=fff&background=8d68f1',
    id: 'LGhsjYkCQWPSSX8Jgj20'
  },
  {
    arrivalAt: timestamp,
    name: 'UE',
    avatar: 'https://ui-avatars.com/api/?size=128&name=UE&color=fff&background=8d68f1',
    id: 'M6h9Wq750vCBpwa6xP85'
  }
]
const orders = [
  {
    notes: '',
    share: ['LGhsjYkCQWPSSX8Jgj20', 'M6h9Wq750vCBpwa6xP85'],
    quantity: 5,
    item: {
      value: 16.5,
      src: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/6/enhanced/buzzfeed-prod-web-02/enhanced-buzz-26421-1529921451-1.jpg?downsize=300:*&output-format=auto&output-quality=auto',
      type: 'meal',
      text: 'Aspargos'
    },
    table: {
      id: 'SbU7v4SVEBnhRKCwBudn',
      number: '05'
    },
    customers: [
      {
        arrivalAt: timestamp,
        name: 'Teste',
        avatar: 'https://ui-avatars.com/api/?size=128&name=Teste&color=fff&background=8d68f1',
        id: 'LGhsjYkCQWPSSX8Jgj20'
      },
      {
        avatar: 'https://ui-avatars.com/api/?size=128&name=UE&color=fff&background=8d68f1',
        id: 'M6h9Wq750vCBpwa6xP85',
        arrivalAt: timestamp,
        name: 'UE'
      }
    ],
    orderAt: timestamp,
    ready: false,
    total: 82.5,
    delivered: false
  }
]

const ordersReady = [
  {
    notes: '',
    share: ['LGhsjYkCQWPSSX8Jgj20', 'M6h9Wq750vCBpwa6xP85'],
    quantity: 5,
    item: {
      value: 16.5,
      src: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/6/enhanced/buzzfeed-prod-web-02/enhanced-buzz-26421-1529921451-1.jpg?downsize=300:*&output-format=auto&output-quality=auto',
      type: 'meal',
      text: 'Aspargos'
    },
    table: {
      id: 'SbU7v4SVEBnhRKCwBudn',
      number: '05'
    },
    customers: [
      {
        arrivalAt: timestamp,
        name: 'Teste',
        avatar: 'https://ui-avatars.com/api/?size=128&name=Teste&color=fff&background=8d68f1',
        id: 'LGhsjYkCQWPSSX8Jgj20'
      },
      {
        avatar: 'https://ui-avatars.com/api/?size=128&name=UE&color=fff&background=8d68f1',
        id: 'M6h9Wq750vCBpwa6xP85',
        arrivalAt: timestamp,
        name: 'UE'
      }],
    orderAt: timestamp,
    ready: true,
    total: 82.5,
    delivered: false
  }
]

const ordersReadyAndDelivered = [
  {
    notes: '',
    share: ['LGhsjYkCQWPSSX8Jgj20', 'M6h9Wq750vCBpwa6xP85'],
    quantity: 5,
    item: {
      value: 16.5,
      src: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-06/25/6/enhanced/buzzfeed-prod-web-02/enhanced-buzz-26421-1529921451-1.jpg?downsize=300:*&output-format=auto&output-quality=auto',
      type: 'meal',
      text: 'Aspargos'
    },
    table: {
      id: 'SbU7v4SVEBnhRKCwBudn',
      number: '05'
    },
    customers: [
      {
        arrivalAt: timestamp,
        name: 'Teste',
        avatar: 'https://ui-avatars.com/api/?size=128&name=Teste&color=fff&background=8d68f1',
        id: 'LGhsjYkCQWPSSX8Jgj20'
      },
      {
        avatar: 'https://ui-avatars.com/api/?size=128&name=UE&color=fff&background=8d68f1',
        id: 'M6h9Wq750vCBpwa6xP85',
        arrivalAt: timestamp,
        name: 'UE'
      }],
    orderAt: timestamp,
    ready: true,
    total: 82.5,
    delivered: true
  }
]

export {
  table,
  arrivedAt,
  customers,
  orders,
  ordersReady,
  ordersReadyAndDelivered
}
