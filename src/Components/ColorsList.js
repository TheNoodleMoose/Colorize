import React from "react";

const ColorsList = ({ colors, saveColor, savedCount, savedColors }) => {
  if (!colors) {
    return <div>Fetching colors...</div>;
  }
  return (
    <ul>
      {colors.map(color => (
        <li
          onClick={() => saveColor(color, color.value)}
          style={{ color: color.value }}
          key={color.value}
        >
          {color.value}
        </li>
      ))}
      {savedCount < 5
        ? savedColors.map(color => (
            <li style={{ color: color }} key={color}>
              {color}
            </li>
          ))
        : null}
    </ul>
  );
};

export default ColorsList;
