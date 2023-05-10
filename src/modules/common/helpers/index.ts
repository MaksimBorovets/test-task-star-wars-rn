export const formatNumber = (num: number): string => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(1) + 'K';
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else {
    return num.toString();
  }
};

export const urlOnlyNumberFormatter = (
  url: string | undefined,
): string | null => {
  if (!url) {
    return null;
  }
  return url.replace(/\D/g, '');
};
