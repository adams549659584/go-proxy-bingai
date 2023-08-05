export const isMobile = () => {
  const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return mobileRegex.test(navigator.userAgent);
};

export const sleep = (timeout: number) => new Promise((resolve, reject) => setTimeout(resolve, timeout));

export const copy = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    // 使用Clipboard API复制文本到剪贴板
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (error) {
      console.error('error : ', error);
    }
  }
  // 使用备用方案
  try {
    const ele = document.createElement('textarea');
    ele.value = text;
    ele.setAttribute('readonly', '');
    ele.style.position = 'absolute';
    ele.style.left = '-9999px';
    document.body.appendChild(ele);
    ele.select();
    document.execCommand('copy');
    document.body.removeChild(ele);
    return true;
  } catch (error) {
    console.error(error);
  }
  return false;
};
