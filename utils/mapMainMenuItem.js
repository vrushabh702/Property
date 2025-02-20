export const mapMainMenuItems = (menuItems) => {
  return menuItems.map((menuItem) => ({
    id: menuItem.menuItem.destination.id,
    destination: menuItem.menuItem.destination?.uri,
    label: menuItem.menuItem.destination?.label || null,
    subMenuItems: (menuItems.items || []).map((subMenuItem) => {
      id: subMenuItem.destination.id;
      destination: subMenuItem.destination?.uri;
      label: subMenuItem?.label;
    }),
  }));
};
