import { useEffect, useReducer } from 'react';
import { Box, Button, CloseIcon, Modal, Text, useTheme } from 'native-base';
import { useRecoilState } from 'recoil';

import styles from './GiveRewardModal.styles';
import InputWithLabel from '../InputWithLabel/InputWithLabel';

import messagesState from '../../recoil/atoms/messages';
import userState from '../../recoil/atoms/user';

import { ActionTypes, initialState, reducer } from './reducer';

type GiveRewardModalProps = {
  isOpen: boolean;
  setIsModalOpen: (state: boolean) => void;
};

const GiveRewardModal = ({ isOpen, setIsModalOpen }: GiveRewardModalProps) => {
  const [messages, setMessages] = useRecoilState(messagesState);
  const [user, setUser] = useRecoilState(userState);

  const { colors } = useTheme();

  const [{ to, amount, message }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!isOpen) {
      dispatch({ type: ActionTypes.reset });
    }
  }, [isOpen]);

  const onGivePress = () => {
    if (!to || !amount || !message) {
      // show error when any field is empty
      return;
    }

    const giveRewardMessage = {
      from: user,
      message: message,
      to: { id: '4', name: to }, // Get user from some list
      value: Number(amount),
      date: new Date(),
    };

    setMessages([...messages, giveRewardMessage]);
    setUser({
      ...user,
      moneyGiven: user.moneyGiven + Number(amount),
    });

    setIsModalOpen(false);
  };

  const onCrossPress = () => setIsModalOpen(false);

  return (
    <Modal isOpen={isOpen} size={'full'} justifyContent={'flex-end'}>
      <Modal.Content style={styles.container}>
        <Text style={styles.title}>Give reward</Text>

        <Box mb={5} w={'100%'}>
          <InputWithLabel
            label={'To'}
            inputProps={{
              onChangeText: text =>
                dispatch({ type: ActionTypes.setInputTo, payload: text }),
            }}
          />
        </Box>
        <Box mb={5} w={'100%'}>
          <InputWithLabel
            label={'Amount'}
            inputProps={{
              value: amount,
              onChangeText: text =>
                dispatch({
                  type: ActionTypes.setInputAmount,
                  payload: text.replace(/[^0-9]/g, ''),
                }),
            }}
          />
        </Box>
        <Box mb={10} w={'100%'}>
          <InputWithLabel
            label={'Message'}
            inputContainerProps={{
              minHeight: 120,
              borderWidth: 1,
              borderColor: '#fff',
              borderRadius: 5,
            }}
            inputProps={{
              onChangeText: text =>
                dispatch({ type: ActionTypes.setInputMessage, payload: text }),
              multiline: true,
              borderWidth: 0,
            }}
          />
        </Box>

        <Button onPress={onGivePress} style={styles.giveButton}>
          <Text>Give</Text>
        </Button>

        <Button onPress={onCrossPress} style={styles.crossButton}>
          <CloseIcon color={colors.white} />
        </Button>
      </Modal.Content>
    </Modal>
  );
};

export default GiveRewardModal;
