import { useState } from 'react';
import { TabView, SceneRendererProps, SceneMap } from 'react-native-tab-view';
import { NavigationState } from 'react-native-tab-view/lib/typescript/types';
import { useRecoilState } from 'recoil';

import styles from './TabSwitcher.styles';
import TabBar from './TabBar/TabBar';
import RewardList from './RewardList/RewardList';

import messagesState from '../../../recoil/atoms/messages';
import userState from '../../../recoil/atoms/user';

const routes = [
  { key: 'feed', title: 'Feed' },
  { key: 'rewards', title: 'My Rewards' },
];

const TabSwitcher = () => {
  const [index, setIndex] = useState(0);

  const [messages] = useRecoilState(messagesState);
  const [user] = useRecoilState(userState);

  const renderScene = SceneMap({
    feed: () => <RewardList messages={messages} />,
    rewards: () => (
      <RewardList
        messages={messages.filter(message => message.from.id === user.id)}
      />
    ),
  });

  const renderTabBar = (
    props: SceneRendererProps & { navigationState: NavigationState<any> },
  ) => <TabBar {...props} onTabPress={setIndex} activeTabIndex={index} />;

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      style={styles.container}
    />
  );
};

export default TabSwitcher;
