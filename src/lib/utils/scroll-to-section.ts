export const scrollToSection = (id: string, onAfterScroll?: () => void) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    onAfterScroll?.();
  }
};
