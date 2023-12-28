module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  globals: {
    env: true,
    useRoute: true,
    useRouter: true,
    useStore: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    // parser: 'babel-eslint',
    ecmaVersion: 'latest'
  },
  rules: {
    // 在这里添加或覆盖 ESLint 规则
    // 0='off' 关闭规则
    // 1='warn' 警告，不会导致ESlint失败退出
    // 2='error' 错误，将导致ESlint校验失败。
    // 例如，关闭控制台语句的警告
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-useless-concat': 1, // 禁止不必要的字符串字面量或模板字面量的连接
    'no-useless-escape': 0, // 禁止不必要的转义字符
    'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    camelcase: 0, // 强制使用骆驼拼写法命名约定
    'no-redeclare': 1, // 禁止多次声明同一变量
    'array-callback-return': 1, // 强制数组方法的回调函数中有 return 语句,Array有几种过滤，映射和折叠的方法。如果我们忘记return在这些回调中写入语句，那可能是一个错误。
    'default-case': 1, // 要求 switch 语句中有 default 分支
    'no-fallthrough': 1, // 禁止 case 语句落空
    'no-lonely-if': 1, // 禁止 if 作为唯一的语句出现在 else 语句中.如果一个if陈述是该else块中唯一的陈述，那么使用一个else if表格通常会更清晰。
    'no-irregular-whitespace': 1, // 禁止在字符串和注释之外不规则的空白
    'prefer-const': 0, // 要求使用 const 声明那些声明后不再被修改的变量.如果一个变量从不重新分配，使用const声明更好。const 声明告诉读者，“这个变量永远不会被重新分配，”减少认知负荷并提高可维护性。
    'no-use-before-define': 1, // 禁止在变量定义之前使用它们
    'no-undef': 2,
    'vue/attributes-order': 2, // vue api使用顺序
    'vue/no-multiple-template-root': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-empty-function': 0,
    'vue/multi-word-component-names': 0
  }
}
