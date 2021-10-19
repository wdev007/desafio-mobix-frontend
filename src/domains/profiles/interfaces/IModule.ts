import { IBoxes } from "./IBoxes";
import { ISubModule } from "./ISubmodule";

export interface IModule {
  id: string;
  name: string;
  boxes: IBoxes[];
  submodules: ISubModule[];
}
