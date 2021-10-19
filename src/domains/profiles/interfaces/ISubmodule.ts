import { IBoxes } from "./IBoxes";

export interface ISubModule {
  id: string;
  name: string;
  boxes: IBoxes[];
}
