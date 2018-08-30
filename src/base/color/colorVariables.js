// ----------------------------------------
// Color Variables
//
// https://ether.thescenery.co/color/
//
//

import colors from './colors';

export const semanticColors = {
  colorSuccess: colors.greenDark,
  colorDanger: colors.redDark,
};

export const typographicColors = {
  typeLight: colors.light,
  typeMedium: colors.dark50,
  typeDark: colors.dark,
  typeAccent: colors.blue,
  typeDanger: colors.red,
  typeSuccess: colors.green,
};

const colorVariables = {
  // Semantic Colors
  ...semanticColors,

  // Typographic Colors
  ...typographicColors,

  // Button States
  buttonPrimaryBackground: colors.red,
  buttonPrimaryBackgroundHover: colors.redDark1,
  buttonPrimaryBorder: colors.red,
  buttonPrimaryText: colors.white,

  buttonSecondaryBackground: colors.white,
  buttonSecondaryBackgroundHover: colors.white,
  buttonSecondaryBorder: colors.light110,
  buttonSecondaryColor: colors.dark,
};

export default colorVariables;
