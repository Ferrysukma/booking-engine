// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "off",
    "vue/attribute-hyphenation": "off",
    "vue/html-self-closing": "off",
  }
})
