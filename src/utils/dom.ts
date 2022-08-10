export type ElementSize = {
  width: number;
  height: number;
};

export const getSize = (element?: HTMLElement | null): ElementSize => {
  if (element) {
    return {
      width: element.offsetWidth,
      height: element.offsetHeight,
    }
  }

  return {
    width: 0,
    height: 0,
  }
}

export const getPositionFromViewport = (viewport: any, element: any) => {
  const scrollTop = viewport.scrollTop || 0
  const scrollLeft = viewport.scrollLeft || 0
  const clientTop = viewport.clientTop || 0
  const clientLeft = viewport.clientLeft || 0
  const rect = element.getBoundingClientRect()

  return {
    top: Math.round(rect.top + rect.height / 2 + scrollTop - clientTop),
    left: Math.round(rect.left + rect.width / 2 + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  }
}
