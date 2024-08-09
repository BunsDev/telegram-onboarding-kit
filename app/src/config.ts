import { defineConfig } from '@tok/generation';

export default defineConfig({
  locale: {
    fallback: 'ru',
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
    // form
    {
      extends: 'form', // note, it's important to extend from 'form' here
      path: '/email',
      textAlign: 'center',
      media: {
        type: 'emodji' as const,
        src: '💌',
        size: 50,
      },
      shape: 'square',
      pagination: 'count',
      title: 'Введите почту',
      description: 'Для российских карт необходимо указать почту, чтобы отправить чек',
      form: [
        {
          id: 'email',
          placeholder: 'Email',
          type: 'text',
        }
      ],
      button: 'Next',
    },
  ],
});
