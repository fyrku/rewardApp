import { ImageSourcePropType } from 'react-native';

export type User = {
  id: string;
  avatar?: ImageSourcePropType;
  name: string;
};
