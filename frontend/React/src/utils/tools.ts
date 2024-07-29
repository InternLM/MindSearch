export const getQueryString = (search: string, name: string) => {
  if (!search) return "";
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  const result = search.substring(1).match(reg);
  if (result != null) return result[2];
  return "";
};

export const isInWhiteList = (url: string = "", list: string[] = []) => {
  const baseUrl = url.split("?")[0];
  for (let whiteApi of list) {
    if (baseUrl.endsWith(whiteApi)) {
      return true;
    }
  }
  return false;
};

export const replaceStr = (str: string) => {
  return str.replace(/\[\[(\d+)\]\]/g, (match: any, number: any) => {
    // 创建一个带有class为'fnn2'的span元素，并将数字作为文本内容
    return `<i class='f'>${number}</i>`;
  });
};
