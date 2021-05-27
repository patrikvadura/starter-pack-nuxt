module.exports = {
  extends: [
    'stylelint-config-standard'
  ],
  plugins: [
    'stylelint-scss'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'number-leading-zero': 'never',
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ]
  }
}
