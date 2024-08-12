/* eslint-disable no-param-reassign */
export default {
  beforeMount(element, biding) {
    Object.keys(biding.value).forEach((position) => {
      element.style[position] = biding.value[position];
    });
    element.style.position = 'absolute';
  },
};
