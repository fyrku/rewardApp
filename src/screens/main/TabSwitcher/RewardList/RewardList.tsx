import { FlatList } from 'react-native';
import { Box, Image, Text, useTheme } from 'native-base';
import { formatDistanceToNow } from 'date-fns';

import styles from './RewardList.styles';

import { Message } from '../../../../types/Message';

type RewardListProps = {
  messages: Message[];
};

const RewardList = ({ messages }: RewardListProps) => {
  const { colors } = useTheme();

  const renderItem = ({ item }: { item: Message }) => {
    return (
      <Box style={styles.itemContainer}>
        <Image source={item.from.avatar} style={styles.avatar} alt="Avatar" />

        <Box flexShrink={1}>
          <Text style={styles.message} numberOfLines={4}>
            {item.message}
          </Text>
          <Text color={colors.light['400']} style={styles.rewardDescription}>
            {`${item.to.name} Rewarded by ${item.from.name}`}
          </Text>
          <Text color={colors.light['400']} style={styles.date}>
            {formatDistanceToNow(item.date)}
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <FlatList
      data={messages}
      renderItem={renderItem}
      style={styles.listContainer}
    />
  );
};

export default RewardList;
