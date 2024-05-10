import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    // {
    //   slides: [
    //     // // intro
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_hello.tgs'),
    //     //     size: 250,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Welcome to Telegram Onboarding Kit',
    //     //   description:
    //     //     "Create stunning onboarding and paywall for your Telegram Bot using the full power of Mini Apps<br><br>It's <b>simple</b>, <b>fast</b>, highly <b>customizable</b> and <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>open-source</a>!",
    //     //   button: 'Next',
    //     // },

    //     // // image
    //     // {
    //     //   media: {
    //     //     type: 'image',
    //     //     src: import('./assets/img/durov.webp'),
    //     //   },
    //     //   shape: 'rounded',
    //     //   pagination: 'count',
    //     //   title: 'Onboarding supports many types of content',
    //     //   description:
    //     //     "Here you can see <b>Image</b>. But it's just the beginning...",
    //     //   button: 'Next',
    //     // },

    //     // // sticker
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_love.tgs'),
    //     //     size: 250,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Telegram stickers',
    //     //   description:
    //     //     'Just download any <b>.tgs</b> sticker from Telegram and use it in your onboardings',
    //     //   button: 'Next',
    //     // },

    //     // form
    //     // {
    //     //   extends: 'form', // note, it's important to extend from 'form' here
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_spy.tgs'),
    //     //     size: 150,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Forms',
    //     //   description: 'User fills in the form – the bot receives the data',
    //     //   form: [
    //     //     {
    //     //       id: 'text_from_form',
    //     //       placeholder: 'Text input',
    //     //       type: 'text',
    //     //     },
    //     //     {
    //     //       id: 'number_from_form',
    //     //       placeholder: 'Number input',
    //     //       type: 'number',
    //     //     },
    //     //     {
    //     //       id: 'checkbox_from_form',
    //     //       placeholder: 'Checkbox',
    //     //       type: 'checkbox',
    //     //     },
    //     //   ],
    //     //   button: 'Next',
    //     // },

    //     // // video
    //     // {
    //     //   media: {
    //     //     type: 'video',
    //     //     src: import('./assets/videos/spongebob.mp4'),
    //     //     poster: import('./assets/img/spongebob_poster.webp'),
    //     //     style: 'aspect-ratio: 400/287', // here we manually set video aspect-ratio (default is 16:9)
    //     //   },
    //     //   shape: 'rounded',
    //     //   pagination: 'count',
    //     //   title: 'Videos',
    //     //   description:
    //     //     "Typically, video starts <b>automatically</b><br><br>However, on iOS, it will only autoplay upon any prior tap on the page ('Next' button doesn't count). If video doesn't autoplay, user will see preview and pretty animation, inviting them to tap to play the video",
    //     //   button: 'Next',
    //     // },

    //     // // list
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_juggling.tgs'),
    //     //     size: 150,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Lists',
    //     //   description:
    //     //     'Lists can be used to showcase <b>features</b> of your product. Items support customizable icons',
    //     //   list: [
    //     //     {
    //     //       media: {
    //     //         type: 'icon',
    //     //         src: import('./assets/icons/guide.svg'),
    //     //         size: 30,
    //     //       },
    //     //       text: 'Some cool feature',
    //     //     },
    //     //     {
    //     //       media: {
    //     //         type: 'icon',
    //     //         src: import('./assets/icons/track.svg'),
    //     //         size: 30,
    //     //       },
    //     //       text: 'Some very cool feature',
    //     //     },
    //     //     {
    //     //       media: {
    //     //         type: 'icon',
    //     //         src: import('./assets/icons/time.svg'),
    //     //         size: 30,
    //     //       },
    //     //       text: 'Some extremely cool feature',
    //     //     },
    //     //   ],
    //     //   button: 'Next',
    //     // },

    //     // // "everything is customizable" slide
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_xray.tgs'),
    //     //     size: 250,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Everything is customizable',
    //     //   description: '',
    //     //   textAlign: 'center',
    //     //   list: [
    //     //     '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
    //     //     'Button text and actions (look down)',
    //     //     'Use our carefully crafted <b>presets</b> or easily create your own',
    //     //   ],
    //     //   button: 'Super-Duper Next',
    //     // },

    //     // // slide with other features
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_cool.tgs'),
    //     //     size: 150,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   title: 'Some other features:',
    //     //   description: '',
    //     //   list: [
    //     //     'One-click 0$ <b>deploy</b> on GitHub Pages',
    //     //     'Language and currency localization',
    //     //     'Buttons with <b>haptic</b> feedback',
    //     //     'Content pre-loading for high speed',
    //     //     '<b>Low-code</b> approach to building onboardings',
    //     //     'Many examples/presets',
    //     //     "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
    //     //   ],
    //     //   button: 'Next',
    //     // },

    //     // // go to paywall slide
    //     // {
    //     //   media: {
    //     //     type: 'sticker',
    //     //     src: import('./assets/stickers/duck_knife.tgs'),
    //     //     size: 250,
    //     //   },
    //     //   shape: 'square',
    //     //   pagination: 'count',
    //     //   textAlign: 'center',
    //     //   title: 'But onboarding slides are not enough...',
    //     //   description: "Let's go to Paywall",
    //     //   button: {
    //     //     content: 'Go to Paywall',
    //     //     to: '/paywall',
    //     //   },
    //     // },
    //   ],
    // },

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
      // list: [
      //   '✅ 100 запросов к GPT-3.5 ежедневно;',
      //   '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
      //   'Subscriptions or One-time payments',
      // ],
      products: [
        {
          id: '1_month',
          title: '1 месяц подписки',
          description: '290 руб./месяц',
          discount: '',
          price: 1,
        },
        {
          id: '2_months',
          title: '2 месяца подписки',
          description: '490 руб./месяц',
          discount: 'Скидка 15%',
          price: 2,
        },
        {
          id: '3_months',
          title: '3 месяца подписки',
          description: '650 руб./месяц',
          discount: 'Лучшее предложение',
          price: 3,
        },
      ],
      mainButtonText: 'Купить за {price}',
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
