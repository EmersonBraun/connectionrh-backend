/* eslint-disable @typescript-eslint/explicit-member-accessibility */
interface MailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'emailvalido.com.br',
      name: 'Luis Costa',
    },
  },
} as MailConfig
