/* eslint-disable no-confusing-arrow */
import React, { Fragment } from 'react';
import styled from 'styled-components';

import colors from '../base/color/colors';
import colorVariables from '../base/color/colorVariables';

const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${colors.dark};
  font-family: monospace;
  font-size: 13px;
  width: 100%;

  &:not(last-child) {
    margin-bottom: 40px;
  }
`;

const StyledRow = styled.tr`
  &:nth-of-type(odd) {
    background-color: ${colors.light90};
  }
`;

const StyledCell = styled.td`
  border-top: 1px solid ${colors.light};
  padding: 10px;

  &:nth-of-type(even) {
    letter-spacing: 1px;
  }
`;

const StyledHeading = styled.h2`
  font-weight: 400;
  font-size: 2.1rem;
  margin-bottom: 10px;
`;

const StyledCellColor = styled(StyledCell)`
  background-color: ${p => p.color};
  color: ${p => p.color === colors.dark ? colors.white : colors.dark};
`;

export const ColorVariableTable = () => {
  const renderVariableTables = Object.entries(colorVariables).map((category) => {
    const [title, values] = category;

    const renderCategoryValues = Object.entries(values).map((value) => {
      const [name, colorValue] = value;

      return (
        <StyledRow key={name}>
          <StyledCell>{name}</StyledCell>
          <StyledCellColor color={colorValue} width="30%">{colorValue}</StyledCellColor>
        </StyledRow>
      );
    });

    return (
      <Fragment>
        <StyledHeading>{title}</StyledHeading>
        <StyledTable>
          {renderCategoryValues}
        </StyledTable>
      </Fragment>
    );
  });

  return (
    <Fragment>
      {renderVariableTables}
    </Fragment>
  );
};
