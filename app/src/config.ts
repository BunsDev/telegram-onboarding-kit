import { defineConfig } from '@tok/generation';

export default defineConfig({
  locale: {
    fallback: 'en',
    ru: import('./locales/ru.json'),
    en: import('./locales/en.json'),
  },
  pages: [
    // paywall
    {
      extends: 'paywall',
      path: '/paywall',
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_money.tgs'),
        size: 150,
      },
      shape: 'square',
      title: 'Выберите премиум тариф:',
      products: [
        {
          id: '1_month',
          title: '1 месяц подписки',
          description: '290 руб./месяц',
          discount: '',
          price: 290,
        },
        {
          id: '2_months',
          title: '2 месяца подписки',
          description: '490 руб./месяц',
          discount: 'Скидка 15%',
          price: 490,
        },
        {
          id: '3_months',
          title: '3 месяца подписки',
          description: '650 руб./месяц',
          discount: 'Скидка 25%',
          price: 650,
        },
      ],
      mainButtonText: 'Продолжить',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Политика конфиденциальности',
          href: 'https://telegram.org/privacy/ru',
        },
        {
          text: 'Пользовательское соглашение',
          href: 'https://telegram.org/tos/ru',
        },
      ],
    },
  ],
});
