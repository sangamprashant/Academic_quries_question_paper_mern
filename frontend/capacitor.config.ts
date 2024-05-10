import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sangamprasahnt.academicqueriescapacitor',
  appName: 'Academic queries',
  webDir: 'build',
  bundledWebRuntime: false ,
  server: {
    url: "http://192.168.137.1:3000",
    cleartext: true
  },
};

export default config;
