import moment from 'moment';
let defaultData =     [
        {
          id: 1,
          text: 'First Task',
          date: moment().format('DD MMM YYYY'),
          reminder: false,
          done: false,
        },
        {
          id: 2,
          text: 'Second Task',
          date: moment().subtract(2, 'days').format('DD MMM YYYY'),
          reminder: false,
          done: false,
        },
        {
          id: 3,
          text: 'Third Task',
          date: moment().add(1, 'weeks').format('DD MMM YYYY'),
          reminder: false,
          done: false,
        },
        {
          id: 4,
          text: 'Fourth Task',
          date: moment().add(5, 'days').format('DD MMM YYYY'),
          reminder: false,
          done: false,
        },
]

let defaultFormState = false

export {defaultData,defaultFormState} 
