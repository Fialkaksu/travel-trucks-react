import toast from 'react-hot-toast';

const options = {
  position: 'top-right',
  duration: 3000,
  ariaProps: { role: 'status', 'aria-live': 'polite' },
};

export const toastAlert = {
  success: message =>
    toast.success(message, {
      ...options,
      style: { background: '#ffc531', color: '#101828' },
      icon: '👍',
    }),
  error: message =>
    toast.error(message, {
      ...options,
      style: { background: '#e44848', color: '#fff' },
      icon: '👀',
    }),
  info: message =>
    toast(message, {
      ...options,
      style: { background: '#475467', color: '#fff' },
      icon: '🙄',
    }),
};
