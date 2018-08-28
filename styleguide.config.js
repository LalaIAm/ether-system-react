module.exports = {
  components: 'src/components/**/[A-Z]*.{js,jsx,ts,tsx}', // skips index.js
  ignore: ['**/**/Styles.{js,jsx,ts,tsx}', '**/*.spec.{js,jsx,ts,tsx}'],
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Colors',
      content: 'docs/colors.md',
      description: 'The Ether Color System',
    },
    {
      name: 'Color Variables',
      content: 'docs/colorVariables.md',
      description: 'Available Color Variables from the Ether Color System',
    },
    {
      name: 'Spacers',
      content: 'docs/spacers.md',
      description: 'The Ether Spacing System',
    },
    {
      name: 'Input Components',
      components: 'src/components/input/**/[A-Z]*.{js,jsx}',
    },
    {
      name: 'Layout Components',
      components: 'src/components/layout/**/[A-Z]*.{js,jsx}',
    },
  ],
};
