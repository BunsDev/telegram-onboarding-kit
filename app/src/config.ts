import { defineConfig } from '@tok/generation';

export default defineConfig({
  locale: {
    fallback: 'ru',
    ru: import('./locales/ru.json'),
    en: import('./locales/en.json'),
  },
  pages: [
    // start
    {
      extends: 'form', // note, it's important to extend from 'form' here
      media: {
        type: 'sticker',
        src: import('./assets/stickers/duck_hello.tgs'),
        size: 150,
      },
      shape: 'square',
      pagination: 'count',
      title: 'GPT4Telegrambot Inc.',
      description: 'Выберите сервис для покупки',
      form: [
        {
          id: 'premium_id',
          placeholder: 'Premium',
          type: 'checkbox',
        },
        {
          id: 'premium_x2_id',
          placeholder: 'Premium X2',
          type: 'checkbox',
        },
        {
          id: 'midjourney_id',
          placeholder: 'Midjourney',
          type: 'checkbox',
        },
        {
          id: 'claude_id',
          placeholder: 'Claude 3',
          type: 'checkbox',
        },
        {
          id: 'suno_id',
          placeholder: 'Suno AI',
          type: 'checkbox',
        },
        {
          id: 'eightify_id',
          placeholder: 'Eightify',
          type: 'checkbox',
        },
      ],
      button: 'Next',
    },

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
      title: '_first_page.title',
      products: [
        {
          id: '_first_page.list1.id',
          title: '_first_page.list1.title',
          description: '_first_page.list1.description',
          discount: '_first_page.list1.discount',
          price: '_first_page.list1.price',
        },
        {
          id: '_first_page.list2.id',
          title: '_first_page.list2.title',
          description: '_first_page.list2.description',
          discount: '_first_page.list2.discount',
          price: '_first_page.list2.price',
        },
        {
          id: '_first_page.list3.id',
          title: '_first_page.list3.title',
          description: '_first_page.list3.description',
          discount: '_first_page.list3.discount',
          price: '_first_page.list3.price',
        },
      ],
      mainButtonText: '_first_page.button',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: '_first_page.policy',
          href: '_first_page.policy_href',
        },
        {
          text: '_first_page.terms',
          href: '_first_page.terms_href',
        },
      ],
    },
  ],
});
