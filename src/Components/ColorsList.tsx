import React from "react";
import styled from "@emotion/styled";

interface Props {
  colors: any;
  saveColor: (color: string, colorValue: string) => void;
  savedCount: number;
  savedColors: any;
}

interface color {
  value: string;
}

const ColorsList = ({ colors, saveColor, savedCount, savedColors }: Props) => {
  if (!colors) {
    return <div>Fetching colors...</div>;
  }
  return (
    <>
      {colors.map((color: color) => (
        <ColorBlockContainer key={color.value}>
          <ColorBlock
            style={{ backgroundColor: color.value, color: color.value }}
          />
          <ColorText style={{ color: color.value }}>{color.value}</ColorText>
          <SaveButton onClick={() => saveColor(color, color.value)}>
            Save Color
          </SaveButton>
        </ColorBlockContainer>
      ))}
      {savedCount < 5
        ? savedColors.map(color => (
            <ColorBlockContainer key={color}>
              <ColorBlock style={{ backgroundColor: color, color: color }} />
              <ColorText style={{ color: color }}>{color}</ColorText>
              <SaveButton>Unsave Color</SaveButton>
            </ColorBlockContainer>
          ))
        : null}
    </>
  );
};

export default ColorsList;

const ColorBlockContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ColorBlock = styled.div`
  width: 100px;
  height: 100px;
`;

const ColorText = styled.p``;

const SaveButton = styled.button`
  width: 100px;
  height: 50px;
  background: #9df241;
  border: 1px solid transparent;
  border-color: #80e2a7;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  :hover {
    background-color: #84c69e;
  }
`;
