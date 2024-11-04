export const getQueryString = (search: string, name: string) => {
    if (!search) return '';
    const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
    const result = search.substring(1).match(reg);
    if (result != null) return result[2];
    return '';
};

export const isInWhiteList = (url = '', list: string[] = []) => {
    const baseUrl = url.split('?')[0];
    for (const whiteApi of list) {
        if (baseUrl.endsWith(whiteApi)) {
            return true;
        }
    }
    return false;
};

export const mergeReplaceToDiv = (str: string) => {
    // 优化后的正则表达式，使用非捕获组和正向断言来确保匹配的是连续的[[数字]]序列
    const regexOptimized = /\[\[(\d+)\]](?:\s*\[\[(\d+)\]])*/g;

    // 替换函数（优化版），直接处理整个匹配到的字符串
    function replaceWithDivSpanOptimized(match: any) {
        // 提取出所有数字，由于我们已经知道匹配的是连续的[[数字]]序列，所以可以直接分割字符串
        const numbers = match
            .slice(2, -2)
            .split(']][[')
            .map((num: any) => parseInt(num, 10));
        return `<span class="mergeQuo" data-ids="${numbers.toString()}">${numbers.map((num: number) => `<span>${num}</span>`).join('')}</span>`;
    }

    // 使用优化后的正则表达式和替换函数处理Markdown字符串
    const resultOptimized = str.replace(regexOptimized, replaceWithDivSpanOptimized);

    return resultOptimized;
};

export const replaceStr = (str: string) => {
    return str.replace(/\[\[(\d+)\]\]/g, (match: any, number: any) => {
        // 创建一个带有class为'f'的span元素，并将数字作为文本内容
        return `<i class='f custom'>${number}</i>`;
    });
};
