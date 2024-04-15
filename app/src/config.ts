import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to Telegram Onboarding Kit',
          description:
            '<b>УРАААА С ПРАЗДНИКОООМ!! НАМ ИСПОЛНИЛСЯ ОДИН ГОДИК ЮХУУУУ!</b> Удивительно, вообще не верится, да? <br><br>Я уверен, что ты ждёшь от меня какой нибудь <b>подарок</b>. Но я подумал, что <b>дарить подарок на такую дату просто так — это скучно.</b> Поэтому, для начала, тебе придётся <b>кое что сделать...</b>',
          button: 'Интересненько...',
        },

        // what
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/what.tgs'),
            size: 250,
          },
          shape: 'rounded',
          pagination: 'count',
          title: 'Onboarding supports many types of content',
          description:
            'По началу я хотел сделать здесь <b>прикольный квиз</b> на тематику наших воспоминаний, чтобы мы оба вспомнили много мелочей, посмеялись и пообсуждали всё это. <br><br>Но в ходе создания вот этого бота, я понял, что квиз <b>может испортить впечатления от предстоящего подарка,</b> да и в целом <b>я не знаю как это правильно подать.</b> <br><br>Но это совершенно не важно! Ведь я придумал <b>кое что покруче!</b>',
          button: 'И что же это?',
        },

        // what2
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/bro.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'RitMax - Бот, отслеживающий наши изменения',
          description:
            'Я подумал, что было бы интересно каждый год заходить сюда и отвечать на <b>одни и те же вопросы,</b> чтобы посмотреть на то, как мы <b>растём и меняемся вместе с нашми отношениями.</b> <br><br>Я максимально <b>упростил ввод</b> всех ответов и сделал его <b>настолько интересным, насколько смог,</b> так что много времени это не займёт, так ещё и должно быть весело! <br><br><b>Надеюсь тебе понравится <3</b>',
          button: 'Звучит миленько, поехали :3',
        },

        // love_start
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/love.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '1 часть - Любовь',
          description: 'Постарайся отвечать честно и развёрнуто, без отговорок',
          button: 'Агась',
        },

        // what is love
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/love2.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Начнём сразу с козырей',
          description: 'Что такое любовь для тебя?',
          form: [
            {
              id: 'love',
              placeholder: 'Ватсап собака',
              type: 'text',
            },
          ],
          button: 'Едем дальше',
        },

        // wonders
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/love3.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Опа! Ещё один вопрос!',
          description:
            'Ты счастлив(а), что ты в отношениях? Оправдались ли мечты и желания, когда ты только воображал(а), что у тебя будет партнёр?',
          form: [
            {
              id: 'love',
              placeholder: 'Пук',
              type: 'text',
            },
          ],
          button: 'Оп',
        },

        // wonders
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hmm.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Опа! Я тебя поймал!',
          description:
            'Что ты получаешь из отношений такого, чего не можешь получить в одиночку или с друзьями?',
          form: [
            {
              id: 'love',
              placeholder: 'Чпок',
              type: 'text',
            },
          ],
          button: 'Трататататата',
        },

        // teach
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/love4.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Рааарр',
          description:
            'Что в наших отношениях доставляет тебе больше всего радости?',
          form: [
            {
              id: 'love',
              placeholder: 'Да я люблю сосать члееен. Это пенис!',
              type: 'text',
            },
          ],
          button: 'Трах бабах',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/bro.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Ух, ну тут надо подумать...',
          description:
            'Опиши своего партнёра сейчас. Что тебе в нём нравится? Что тебе в нём не нравится? В чём он хорош? В чём он плох? Чего бы тебе хотелось от него ещё?',
          form: [
            {
              id: 'love',
              placeholder: 'Хмхмхм...',
              type: 'text',
            },
          ],
          button: 'Чикипяу',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/haha.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Хихи хаха',
          description:
            'Какой самый ахуенный рофл появился между нами за последний год?',
          form: [
            {
              id: 'love',
              placeholder: 'Ах! Ах! Ах! Да!',
              type: 'text',
            },
          ],
          button: 'Чикипяу',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/sorry.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Фух, вроде последний',
          description: 'Мы часто ссоримся?',
          form: [
            {
              id: 'love1',
              placeholder: 'Довольно часто, странный период',
              type: 'checkbox',
            },
            {
              id: 'love2',
              placeholder: 'В пределах нормы, но ссоры проходят сложно',
              type: 'checkbox',
            },
            {
              id: 'love3',
              placeholder: 'Почти не ссоримся, живём в радости',
              type: 'checkbox',
            },
          ],
          button: 'Понятненько',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/cool.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Вот теперь точно последний',
          description: 'Мы часто смеёмся?',
          form: [
            {
              id: 'love1',
              placeholder:
                'Довольно часто, мне безумно весело со своим партнёром',
              type: 'checkbox',
            },
            {
              id: 'love2',
              placeholder:
                'Ну, ничего необычного. Смехуёчки есть, но их не так много',
              type: 'checkbox',
            },
            {
              id: 'love3',
              placeholder: 'Чето както всё скудновато(',
              type: 'checkbox',
            },
          ],
          button: 'Закончили упражнение!',
        },

        // personal_start
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/summer.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '2 часть - Личное',
          description: 'Не бойся, это последняя часть',
          button: 'Юхуу, поехали',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/best.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Йо, я крутой как игорь крутой',
          description: 'Каким было твоё лучшее решение за год?',
          form: [
            {
              id: 'personal',
              placeholder: 'Просто ахуительным!',
              type: 'text',
            },
          ],
          button: 'Иду по тропинке в голове ляляля',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/wow.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'АХАХАХАХ КЛЁВО СМЕШНОЕ СЛОВО',
          description: 'Какая у тебя цель?',
          form: [
            {
              id: 'personal',
              placeholder: 'Жрать срать спать',
              type: 'text',
            },
          ],
          button: 'Давай дальше',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/hi.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Щаща ещё немного',
          description: 'Кого считаешь лучшим другом? Почему?',
          form: [
            {
              id: 'personal',
              placeholder: 'Себя потому что я крутой',
              type: 'text',
            },
          ],
          button: 'Лесго',
        },

        // funny
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/eat.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Последний',
          description: 'Ты счастлив(а)?',
          form: [
            {
              id: 'personal1',
              placeholder: 'Да',
              type: 'checkbox',
            },
            {
              id: 'personal2',
              placeholder: 'Нет',
              type: 'checkbox',
            },
          ],
          button: 'Едем!',
        },

        // love_start
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/rar.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Спасибо!',
          description:
            '<b>Я люблю тебя</b>, спасибо огромное за прохождение этого опросника. Думаю, что в будущем мы когда нибудь это перечитаем и нам будет очень весело. <br><br><b>Поздравляю тебя с праздничком, зай.</b> Я счастлив, что однажды познакомился с тобой. <br><b>До встречи в RitMax в следующем году!</b>',
          button: 'И я тебя люблю!',
        },

        // go to paywall slidex
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_knife.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          title: '<3',
          description: ' ',
          button: ' ',
        },
      ],
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
      title: 'Your beautiful Paywall',
      list: [
        'Adjustable product cards',
        '<b>👛 Wallet Pay</b> and <b>Telegram Payments</b> ready. Add custom methods easily',
        'Subscriptions or One-time payments',
      ],
      products: [
        {
          id: '1_month_subscription',
          title: '1 month subscription',
          description: '2$/month',
          discount: '',
          price: 2,
        },
        {
          id: '1_year_subscription',
          title: '1 year subscription',
          description: '1$/month',
          discount: 'Discount 50%',
          price: 12,
        },
        {
          id: 'lifetime_access',
          title: 'Lifetime access',
          description: '20$ once',
          discount: 'Best offer',
          price: 20,
        },
      ],
      mainButtonText: 'Buy for {price}',
      popup: {
        // popup for payment methods choice
        type: 'web',
      },
      links: [
        {
          text: 'Privacy policy',
          href: 'https://google.com',
        },
        {
          text: 'Terms of use',
          href: 'https://google.com',
        },
      ],
    },
  ],
});
