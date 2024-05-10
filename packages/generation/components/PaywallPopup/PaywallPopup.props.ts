import type { _GenerationPaywallPopup } from '@tok/generation/defineConfig';

export type PaywallPopupProps = _GenerationPaywallPopup & {
  opened: boolean;
};

export type PaywallPopupEmits = {
  (e: 'update:opened', value: boolean): void;
  (e: 'onSelect', value: string | undefined): void;
};

const defaultButtons = [
  {
    id: 'payments_ru',
    media: {
      type: 'emodji' as const,
      src: '🇷🇺',
    },
    type: 'default' as const,
    text: 'Российские карты',
  },
  {
    id: 'payments_en',
    media: {
      type: 'emodji' as const,
      src: '💳',
    },
    type: 'default' as const,
    text: 'Международные карты',
  },
  {
    id: 'crypto_pay',
    media: {
      type: 'emodji' as const,
      src: '💎',
    },
    type: 'default' as const,
    text: 'Crypto pay',
  },
  {
    id: 'wallet_pay',
    media: {
      type: 'emodji' as const,
      src: '👛',
    },
    type: 'default' as const,
    text: 'Wallet pay',
  },
  
];

export const PaywallPopupDefaultProps = {
  type: 'telegram',
  title: 'Выберите способ оплаты:',
  message: '',
  buttons: () => defaultButtons,
} as const;
