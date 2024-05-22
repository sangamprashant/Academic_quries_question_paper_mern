import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sangamprasahnt.academicqueriescapacitor',
  appName: 'Academic Queries',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: '#ffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      androidSpinnerStyle: 'large',
      showSpinner: true,
      spinnerColor: '#ffffff',
      spinnerBackgroundColor: '#000000',
      iosSpinnerStyle: 'small',
      iosSpinnerColor: 'dark'
    }
  },
};

export default config;
