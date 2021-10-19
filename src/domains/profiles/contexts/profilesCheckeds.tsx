import React, { createContext, useState, useEffect } from "react";
import { IModule } from "../interfaces/IModule";
import { IProfilesCheckeds } from "../interfaces/IProfilesCheckeds";

import responseProfiles from "../../../mock/profiles.json";

const FEATURES = [
  {
    id: "1",
    checked: false,
  },
  {
    id: "2",
    checked: false,
  },
  {
    id: "3",
    checked: false,
  },
  {
    id: "4",
    checked: false,
  },
  {
    id: "5",
    checked: false,
  },
];

const ProfilesCheckedsContext = createContext<IProfilesCheckeds>(
  {} as IProfilesCheckeds
);

export const ProfilesCheckedsProvider: React.FC = ({ children }) => {
  const [modules, setModules] = useState<IModule[]>([]);
  const [features, setFeatures] = useState(FEATURES);

  useEffect(() => {
    setModules(responseProfiles.modules);
  }, []);

  const selectAll = (feature: string, isChecked: boolean) => {
    console.log("SELECIONA TODOS");
    const newFeatures = features.map((item) => {
      if (item.id === feature) {
        return {
          ...item,
          checked: !isChecked,
        };
      }
      return item;
    });
    console.log("newFeatures: ", newFeatures);
    setFeatures(newFeatures);
    const newModules = modules.map((item) => {
      if (item.boxes.find((b) => b.id === feature)) {
        const newSubmodules = item.submodules.map((sub) => ({
          ...sub,
          boxes: sub.boxes.map((b) => {
            if (b.id === feature) {
              return {
                ...b,
                checked: !isChecked,
              };
            }
            return b;
          }),
        }));
        return {
          ...item,
          submodules: newSubmodules,
          boxes: item.boxes.map((b) => {
            if (b.id === feature) {
              return {
                ...b,
                checked: !isChecked,
              };
            }
            return b;
          }),
        };
      }
      return item;
    });
    console.log("newModules: ", newModules);
    setModules(newModules as IModule[]);
  };

  const selectModule = (feature: string, isCheked: boolean) => {
    console.log("SELECIONA MODULO");
    // setFeaturesCheckeds((prevState) => [...prevState, ...featuresModule]);
  };

  const selectOne = (
    feature: string,
    parentFeature: string,
    boxId: string,
    isChecked: boolean
  ) => {
    console.log("SELECIONA UM: ", feature, parentFeature, boxId, isChecked);
    const newModules = modules.map((item) => {
      if (item.id === parentFeature) {
        const newSubmodules = item.submodules.map((sub) => {
          if (sub.id === feature) {
            return {
              ...sub,
              boxes: sub.boxes.map((b) => {
                if (b.id === boxId) {
                  return {
                    ...b,
                    checked: !isChecked,
                  };
                }
                return b;
              }),
            };
          }
          return sub;
        });
        return {
          ...item,
          submodules: newSubmodules,
        };
      }
      return item;
    });
    console.log("newModules: ", newModules);
    setModules(newModules as IModule[]);
  };

  return (
    <ProfilesCheckedsContext.Provider
      value={{
        selectAll,
        selectModule,
        selectOne,
        modules,
        features,
      }}
    >
      {children}
    </ProfilesCheckedsContext.Provider>
  );
};

export default ProfilesCheckedsContext;
