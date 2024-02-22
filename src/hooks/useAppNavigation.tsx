import {NavigationProp, useNavigation} from '@react-navigation/native';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<RootStackParamList>>();
