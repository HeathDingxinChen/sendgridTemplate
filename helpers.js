module.exports = function (Handlebars) {
    Handlebars.registerHelper('or', function () {
      return Array.prototype.some.call(arguments, function (arg) {
        return !!arg;
      });
    });
    Handlebars.registerHelper('equals', function (a, b, options) {
        if (a === b) {
          // 满足条件，渲染块内内容
          return options.fn(this);
        }
        // 不满足条件，渲染 else 块（{{else}} 部分），如果有的话
        return options.inverse(this);
      });

    // 新增 add、mod、eq helpers
    Handlebars.registerHelper('add', (a, b) => a + b);
    Handlebars.registerHelper('mod', (a, b) => a % b);
    Handlebars.registerHelper('eq', (a, b) => a === b);
    // 你可以在这里继续注册更多 helpers
  };
  