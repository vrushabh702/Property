// export const mapMainMenuItems = (menuItems) => {
//   return menuItems.map((menuItem) => ({
//     id: menuItem.menuItem.destination.id,
//     destination: menuItem.menuItem.destination?.uri,
//     label: menuItem.menuItem.label,
//     subMenuItems: (menuItems.items || []).map((subMenuItem) => {
//       id: subMenuItem.destination.id;
//       destination: subMenuItem.destination?.uri;
//       label: subMenuItem?.label;
//     }),
//   }));
// };

import { v4 as uuid } from "uuid";
export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: uuid(),
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
      destination: subMenuItem.destination?.uri,
      label: subMenuItem?.label,
    })),
  }));
};
