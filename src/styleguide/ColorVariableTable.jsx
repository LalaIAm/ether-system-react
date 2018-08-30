/* eslint-disable no-confusing-arrow */
import React from 'react';
import styled from 'styled-components';

import colors from '../base/color/colors';
import colorVariables from '../base/color/colorVariables';

const StyledTable = styled.table`
  border-collapse: collapse;
  color: ${colors.dark};
  font-family: monospace;
  font-size: 13px;
  width: 100%;
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

const StyledCellColor = styled(StyledCell)`
  background-color: ${p => p.color};
  color: ${p => p.color === colors.dark ? colors.white : colors.dark};
`;

export const ColorVariableTable = () => {
  const renderVariableRows = Object.entries(colorVariables).map((variable) => {
    const [name, value] = variable;

    return (
      <StyledRow key={name}>
        <StyledCell>{name}</StyledCell>
        <StyledCellColor color={value}>{value}</StyledCellColor>
      </StyledRow>
    );
  });

  return (
    <StyledTable>
      <tbody>
        {renderVariableRows}
      </tbody>
    </StyledTable>
  );
};
