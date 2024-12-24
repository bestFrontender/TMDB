import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as translations from '../../translations';

/**
 * i18n konfiguratsiyasini ishga tushiradi va tarjima resurslarini yuklaydi.
 * Ushbu funksiya asinxron tarzda ishlaydi, shunda barcha resurslar dastur boshlanishidan oldin yuklanadi.
 */
export const initializeI18n = async (): Promise<void> => {
  const resources: InitOptions['resources'] = {
    en: translations.en,
    ru: translations.ru
  };

  await i18n
    .use(initReactI18next) // i18n instance-ni React bilan bog'laydi.
    .init({
      resources, // Resurslarni initga uzatamiz
      lng: 'ru', // Standart til rus tili
      fallbackLng: 'en', // Agar tanlangan tilda tarjima bo'lmasa, fallback tili inglizcha
      ns: ['common', 'validation'], // Ikkta namespace borligini yozamiz. common.json va validation.json
      defaultNS: 'common', // t ni chaqirib ishlatkanimizda default commondan o'qiydi
      interpolation: {
        escapeValue: false // Xavfsizlikni ta'minlash uchun qiymatlarni React o'zi "escape" qiladi
      },
      keySeparator: false, // Kalitlar orasida nuqta ajratishni o'chiradi, bu nuqtalarni kalitlarda ishlatishga imkon beradi
      nsSeparator: ':' // Namespace ajratuvchisini ":" ga sozlaydi
    });
};
