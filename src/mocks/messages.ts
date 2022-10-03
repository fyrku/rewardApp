import { Message } from '../types/Message';

const messageList: Message[] = [
  {
    message: 'Big thanks for your help on the outage today!!',
    from: {
      id: '1',
      avatar: require('../assets/images/img_avatar.png'),
      name: 'David Greene',
    },
    to: {
      id: '2',
      avatar: require('../assets/images/img_avatar.png'),
      name: 'John Chen',
    },
    value: 100,
    date: new Date(2022, 8, 28),
  },
  {
    message:
      'Thanks for your help in creating the product overview deck. Your help to show cases in those scenarios really helped in closing the loop on the story',
    from: {
      id: '0',
      avatar: require('../assets/images/img_avatar.png'),
      name: 'Jane Doe',
    },
    to: {
      id: '3',
      avatar: require('../assets/images/img_avatar.png'),
      name: 'Alex Brown',
    },
    value: 100,
    date: new Date(2022, 8, 4),
  },
];

export default messageList;
