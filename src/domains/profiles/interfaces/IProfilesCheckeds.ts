import { IModule } from "./IModule";

export interface IProfilesCheckeds {
  features: { checked: boolean; id: string }[];
  modules: IModule[];
  selectAll: (feature: string, isCheked: boolean) => void;
  selectModule: (feature: string, isCheked: boolean) => void;
  selectOne: (
    feature: string,
    parentFeature: string,
    boxId: string,
    isCheked: boolean
  ) => void;
}
