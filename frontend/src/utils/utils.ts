export const isMobile = () => {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
};

export const sleep = (timeout: number) => new Promise((resolve, reject) => setTimeout(resolve, timeout));
