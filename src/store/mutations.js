export default {
  handleScroll(state, range) {
    if (range >= 120) {
      state.isScrollTop = true;
    } else {
      state.isScrollTop = false;
    }
  },
};
