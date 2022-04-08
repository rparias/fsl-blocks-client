import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";

type Props = {
  index: number,
  data: string
};

const TypographyNumberHeading = styled(Typography)(({ theme }) => ({
  fontSize: 10,
  color: colors.primary,
  lineHeight: 2,
}));

const BoxSummaryContent = styled(Box)({
  display: "block",
  marginBottom: '0.3rem',
  backgroundColor: '#e5e5e5',
  padding: '1px 4px',
  color: colors.text,
  fontSize: '0.85rem',
  fontWeight: '400',
});

const Block: React.FC<Props> = ({ index, data }) => {
  return (
    <BoxSummaryContent key={index}>
      <TypographyNumberHeading variant="subtitle1">
        {String(index).padStart(3, '0')}
      </TypographyNumberHeading>
      {data}
    </BoxSummaryContent>
  );
};

export default Block;
