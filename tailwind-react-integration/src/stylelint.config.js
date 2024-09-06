module.exports = {
  extends: [
    'stylelint-config-standard', // Extends the standard rules
    'stylelint-config-recommended', // Some recommended rules
    'stylelint-config-prettier', // Ensures Prettier works with Stylelint
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};
