import React from "react";
import { Block as BlockType } from '../types/Block';
import { styled } from "@mui/material/styles";
import colors from "../constants/colors";
import Block from "../components/Block";

type Props = {
  blocks: Array<BlockType>,
  loadingBlocks: boolean
};

const ErrorContent = styled("span")({
  color: colors.danger,
});

export const Blocks: React.FC<Props> = ({blocks, loadingBlocks}) => {
  if(loadingBlocks) {
    return <span>Loading...</span>
  } else if (blocks.length === 0) {
    return <ErrorContent>There are no blocks available</ErrorContent>
  } else {
    return (
      <>
        {blocks.map((block) => (
          <Block key={block.index} index={block.index} data={block.data} />
        ))}
      </>
    );
  }  
};

export default Blocks;
