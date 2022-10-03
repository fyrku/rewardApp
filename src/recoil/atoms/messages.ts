import { atom } from 'recoil';

import messageList from '../../mocks/messages';

const messagesState = atom({ key: 'messagesState', default: messageList });

export default messagesState;
