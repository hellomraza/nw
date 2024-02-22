import {RouteProp, useRoute} from '@react-navigation/native';

export function useAppRoute<T extends keyof RootStackParamList>() {
  return useRoute<RouteProp<RootStackParamList, T>>();
}
