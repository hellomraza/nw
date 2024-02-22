import {
  BatchSize,
  DatadogProviderConfiguration,
  SdkVerbosity,
  UploadFrequency,
} from '@datadog/mobile-react-native';

export const config = new DatadogProviderConfiguration(
  'pubfda77ad2cd723d5ae37624886ad8dc41',
  'dev',
  'b53186ad-8d63-4acb-b736-37baf23e3aa9',
  true, // track User interactions (e.g.: Tap on buttons. You can use 'accessibilityLabel' element property to give tap action the name, otherwise element type will be reported)
  true, // track XHR Resources
  true, // track Errors
);
// Optional: Select your Datadog website (one of "US1", "EU1", "US3", "US5", "AP1" or "GOV")
config.site = 'US5';
// Optional: Enable JavaScript long task collection
config.longTaskThresholdMs = 100;
// Optional: enable or disable native crash reports
config.nativeCrashReportEnabled = true;
// Optional: sample RUM sessions (here, 100% of session will be sent to Datadog. Default = 100%)
config.sampleRate = 100;

if (__DEV__) {
  // Optional: Send data more frequently
  config.uploadFrequency = UploadFrequency.FREQUENT;
  // Optional: Send smaller batches of data
  config.batchSize = BatchSize.SMALL;
  // Optional: Enable debug logging
  config.verbosity = SdkVerbosity.DEBUG;
}
