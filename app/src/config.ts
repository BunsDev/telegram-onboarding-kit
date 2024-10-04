import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // intro
        {
          media: {
            type: 'image',
            src: import('./assets/img/logo.png'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Welcome to hackabiel',
          description:
            "Where creatives, freelancers, and entrepreneurs unite to get things done together.<br><br> It's <b>collaborative</b>, <b>goal-driven</b>, and fully <b>supportive</b> This is your space to turn ideas into action and grow your network.</p>",
          button: 'Next',
        },
 // list
 {
  media: {
    type: 'sticker',
    src: import('./assets/stickers/duck_juggling.tgs'),
    size: 150,
  },
  shape: 'square',
  pagination: 'count',
  title: 'Features',
  description:
    'Für das stehen wir',
  list: [
    {
      media: {
        type: 'icon',
        src: import('./assets/icons/guide.svg'),
        size: 30,
      },
      text: 'Word Hard',
    },
    {
      media: {
        type: 'icon',
        src: import('./assets/icons/track.svg'),
        size: 30,
      },
      text: 'Party hard',
    },
    {
      media: {
        type: 'icon',
        src: import('./assets/icons/time.svg'),
        size: 30,
      },
      text: 'Drinks mit netten Leuten',
    },
  ],
  button: 'Weiter',
},
 // form
{
  extends: 'form',
  media: {
    type: 'sticker',
    src: import('./assets/stickers/duck_spy.tgs'),
    size: 150,
  },
  shape: 'square',
  pagination: 'count',
  title: 'Lass uns was über dich erfahren',
  description: 'Kurz und knackig, füll’ einfach das Mini-Formular aus.',
  form: [
    {
      id: 'text_from_form',
      placeholder: 'Wie heisst Du?',
      type: 'text',
    },
    {
      id: 'text_from_form',
      placeholder: 'An was arbeitest Du gerade?',
      type: 'text',
    },
    {
      id: 'checkbox_from_form',
      placeholder: 'Was erhoffst Du dir von der Gruppe?',
      type: 'title', // Typ könnte hier 'title' sein, wenn das ein Titel-Element sein soll, andernfalls auf Text ändern
    },
    {
      id: 'checkbox_from_form',
      placeholder: 'Get s#!t done',
      type: 'checkbox',
    },
    {
      id: 'checkbox_from_form3',
      placeholder: 'Wissen',
      type: 'checkbox',
    },
    {
      id: 'checkbox_from_form4',
      placeholder: 'Kollegen',
      type: 'checkbox',
    },
  ],
  button: 'Weiter',
},

  // go to paywall slide
  {
    media: {
      type: 'sticker',
      src: import('./assets/stickers/duck_knife.tgs'),
      size: 250,
    },
    shape: 'square',
    pagination: 'count',
    textAlign: 'center',
    title: 'Und da geht noch mehr...',
    description: "Lass uns loslegen",
    button: {
      content: 'Los gehts!',
      to: '/paywall',
    },
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
title: 'Join the Crew',
list: [
  'Bezahlmethoden',
  '<b> Karmapunkte</b> und <b>Supercard-Punkte</b> ',
],
products: [
  {
    id: '1_month_subscription',
    title: 'Monatsabo',
    description: '0 CHF / Monat',
    discount: '',
    price: 0,
  },
  {
    id: '1_year_subscription',
    title: 'Jahresabo',
    description: '0 CHF / Jahr',
    price: 0,
  },
  {
    id: 'lifetime_access',
    title: 'Ich spende Dir einen Kaffee',
    description: '5 CHF ',
    price: 5,
  },
],
mainButtonText: 'Jetzt anmelden für {price}',
popup: {
  type: 'web',
},
links: [
  {
    text: 'Datenschutzerklärung',
    href: 'https://google.com',
  },
  {
    text: 'Nutzungsbedingungen',
    href: 'https://google.com',
  },
],
},
],
});