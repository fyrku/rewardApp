import { Animated } from 'react-native';
import { Box, Pressable, useTheme } from 'native-base';
import { SceneRendererProps } from 'react-native-tab-view';
import { NavigationState } from 'react-native-tab-view/lib/typescript/types';

type TabBarProps = SceneRendererProps & {
  navigationState: NavigationState<any>;
} & {
  onTabPress: (index: number) => void;
  activeTabIndex: number;
};

const TabBar = ({
  onTabPress,
  activeTabIndex,
  navigationState,
}: TabBarProps) => {
  const { colors } = useTheme();

  return (
    <Box flexDirection="row" backgroundColor={colors.warning['50']}>
      {navigationState.routes.map((route, i) => {
        const isTabActive = activeTabIndex === i;
        const isFirstTab = i === 0;
        const isLastTab = i === navigationState.routes.length - 1;

        const color = isTabActive ? colors.warning['200'] : colors.black;
        const borderRadius = 20;

        return (
          <Box
            key={route.key}
            flex={1}
            alignItems="center"
            p="3"
            backgroundColor={isTabActive ? colors.white : colors.gray['200']}
            borderTopRightRadius={isLastTab ? borderRadius : 0}
            borderTopLeftRadius={isFirstTab ? borderRadius : 0}>
            <Pressable onPress={() => onTabPress(i)}>
              <Animated.Text
                style={{
                  color,
                  fontWeight: 'bold',
                }}>
                {route.title}
              </Animated.Text>
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );
};

export default TabBar;
