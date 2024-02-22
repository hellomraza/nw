import React, {PropsWithChildren} from 'react';

import {DatadogProvider as Provider} from '@datadog/mobile-react-native';

import {config} from './config';

export const DatadogProvider = ({children}: PropsWithChildren) => (
  <Provider configuration={config}>{children}</Provider>
);
