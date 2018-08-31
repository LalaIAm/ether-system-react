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

  // ---
  // Button States
  // ---
  // Primary
  buttonPrimaryBackground: colors.blue,
  buttonPrimaryBackgroundHover: colors.blueDark1,
  buttonPrimaryBorder: colors.blue,
  buttonPrimaryText: colors.white,

  // Secondary
  buttonSecondaryBackground: colors.white,
  buttonSecondaryBackgroundHover: colors.white,
  buttonSecondaryBorder: colors.light110,
  buttonSecondaryColor: colors.dark,

  // Danger
  buttonDangerBackground: semanticColors.colorDanger,
  buttonDangerBackgroundHover: colors.redDark,
  buttonDangerBorder: semanticColors.colorDanger,
  buttonDangerText: colors.white,

  // Success
  buttonSuccessBackground: semanticColors.colorSuccess,
  buttonSuccessBackgroundHover: colors.greenDark,
  buttonSuccessBorder: semanticColors.colorSuccess,
  buttonSuccessText: colors.white,
};

export default colorVariables;
