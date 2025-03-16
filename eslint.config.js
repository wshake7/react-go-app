import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: ['dist', 'locales', 'src/components/ui'],
  formatters: true,
  react: true,
  isInEditor: false,
  lessOpinionated: true,

  rules: {
    'prefer-template': 'off',
    'style/max-statements-per-line': 'off',
    'eslint-comments/no-unlimited-disable': 'off',
    'unused-imports/no-unused-vars':'warn'
  },
})
