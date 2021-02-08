// markdown plugin
module.exports = (md, ctx) => {
  function setLine({ tokens = [] }) {
    // TODO 这里的行数不准确
    console.log("tokens length=>", tokens.length);
    for (let i = 0; i < tokens.length; i++) {
      const item = tokens[i];
      console.log("item=>", i, item);
      if (item.nesting !== -1 && item.block === true) {
        item.attrs = [["data-editable-line", item.map ? item.map[1] : i + 1]];
        // 1. 锁定到第几行
        // 2. 再根据content 查找
      }
    }
  }

  /**
   * @TODO 将 Markdown file 的行数打印出来
   * 1. 根目录开始的完整路径
   * 2. 行数
   *
   */
  function getLineNumOfMarkdown(path) {}

  /**
   * @TODO generate attr
   *
   * @return [name,value]
   */
  function generateAttrs() {}

  /**
   * @TODO 环境检测
   *
   */
  function checkEnv() {}

  /**
   * @TODO git 检测
   *
   */
  function isGitOk() {}

  md.core.ruler.before("linkify", "editable", setLine);
};

/**
 *
 *
 *
 *
 * 1. fs 读取内容，再与token 对比相同，由于是路径完全一致，这保证了结构也是一致
 *
 *
 *
 *
 * */
