import { Block } from "./Block";

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks: Array<Block>;
  loadingBlocks: boolean;
}
