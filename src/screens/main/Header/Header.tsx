import { Image } from 'react-native';
import { Box, Text } from 'native-base';
import { useRecoilState } from 'recoil';

import styles from './Header.styles';

import userState from '../../../recoil/atoms/user';

const Header = () => {
  const [user] = useRecoilState(userState);

  return (
    <Box style={styles.container}>
      <Image source={user.avatar} style={styles.avatar} />

      <Box>
        <Text fontWeight="bold">{user.name}</Text>
        <Text>
          Given <Text fontWeight="bold">${user.moneyGiven}</Text> / Received{' '}
          <Text fontWeight="bold">${user.moneyReceived}</Text>
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
