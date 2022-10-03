import { atom } from 'recoil';

export const user = {
  id: '0',
  name: 'Jane Doe',
  avatar: require('../../assets/images/img_avatar.png'),
  moneyGiven: 100,
  moneyReceived: 250,
};

const userState = atom({ key: 'UserState', default: user });

export default userState;
