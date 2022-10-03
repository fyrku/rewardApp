import { useState } from 'react';
import { AddIcon, Box, Button, useTheme } from 'native-base';

import styles from './Main.styles';

import Header from './Header/Header';
import TabSwitcher from './TabSwitcher/TabSwitcher';

import GiveRewardModal from '../../components/GiveRewardModal/GiveRewardModal';

const MainScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { colors } = useTheme();

  const onAddPress = () => setIsModalOpen(true);

  return (
    <Box height="100%" backgroundColor={colors.warning['50']}>
      <Header />
      <TabSwitcher />
      <GiveRewardModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      <Button style={styles.button} onPress={onAddPress}>
        <AddIcon color={colors.white} />
      </Button>
    </Box>
  );
};

export default MainScreen;
