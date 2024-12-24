import 'react-i18next';
import * as translations from '../../translations';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: (typeof translations)['en'];
    defaultNS: 'common';
  }
}
