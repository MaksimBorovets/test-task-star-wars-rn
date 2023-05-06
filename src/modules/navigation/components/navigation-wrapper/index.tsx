import { SafeAreaView } from 'react-native';
import type { PropsWithChildren } from 'react';

import { useCommonStyles } from '../../../common/hooks/useCommonStyles';

export const NavigationWrapper = ({ children }: PropsWithChildren) => {
  const { container } = useCommonStyles();

  return <SafeAreaView style={container}>{children}</SafeAreaView>;
};
