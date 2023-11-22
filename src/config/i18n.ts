import { createI18n } from "vue-i18n";
import zh from '../languages/zh-TW.json';
import en from '../languages/en-US.json';
import ja from '../languages/ja-JP.json';

type MessageSchema = typeof zh

const i18n = createI18n<[MessageSchema], 'zh-TW' | 'en-US' | 'ja-JP'>({
    legacy: false,
    locale: 'zh-TW',
    fallbackLocale: 'zh-TW',
    globalInjection: true,
    messages:{
        'zh-TW':zh,
        'en-US':en,
        'ja-JP':ja
    }
})
export default i18n