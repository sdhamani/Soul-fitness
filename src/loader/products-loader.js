import React from "react";
import ContentLoader from "react-content-loader";

const CatalogMagic = ({
  width = 1050,
  heading = { width: 0, height: 0 },
  row = 2,
  column = 4,
  padding = 30,
  borderRadius = 4,
  ...props
}) => {
  const list = [];

  let height;

  for (let i = 1; i <= row; i++) {
    for (let j = 0; j < column; j++) {
      const itemWidth = (width - padding * (column + 1)) / column;

      const x = padding + j * (itemWidth + padding) + 20;

      const height1 = itemWidth;

      const height2 = 70;

      const height3 = 70;

      const space =
        padding + height1 + (padding / 2 + height2) + height3 + padding;

      const y1 = padding + heading.height + padding + space * (i - 1);

      const y2 = y1 + padding + height1 - 15;

      const y3 = y2 + padding / 2 + height2 - 5;

      list.push(
        <>
          <rect
            x={x}
            y={y1}
            rx={borderRadius}
            ry={borderRadius}
            width={itemWidth}
            height={height1}
          />
          <rect x={x} y={y2} rx={0} ry={0} width={itemWidth} height={height2} />
          <rect
            x={x}
            y={y3}
            rx={0}
            ry={0}
            width={itemWidth * 0.6}
            height={height3}
          />
        </>
      );

      if (i === row) {
        height = y3 + height3;
      }
    }
  }

  return (
    <ContentLoader
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      {...props}
    >
      {heading && (
        <rect
          x={padding}
          y={padding}
          rx={0}
          ry={0}
          width={heading.width}
          height={heading.height}
        />
      )}
      {list}
    </ContentLoader>
  );
};

CatalogMagic.metadata = {
  name: "I am Doong - I come from Việt Nam",
  github: "toiladoong",
  description: "CatalogMagic",
  filename: "CatalogMagic",
};

export default CatalogMagic;
