module.exports = {
  components: 'src/components/**/[A-Z]*.{js,jsx,ts,tsx}', // skips index.js
  pagePerSection: true,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Colors',
      content: 'docs/colors.md',
      description: 'These are colors from the Ether Color System',
    },
    {
      name: 'Input Components',
      components: 'src/components/input/**/[A-Z]*.{js,jsx,ts,tsx}',
    },
  ],
};
