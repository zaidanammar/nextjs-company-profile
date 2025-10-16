type NavItem = {
  label: string;
  targetId: string;
};

export const NAV_ITEMS: Array<NavItem> = [
  { label: "About", targetId: "about" },
  { label: "Products", targetId: "products" },
  { label: "Contact", targetId: "contact" },
];
