const SET_WIDTH_FOR_MOBILE = 940 

export const DETECT_IS_MOBILE = 'DETECT_IS_MOBILE'

export const detectIsMobile = () => ({
  type: DETECT_IS_MOBILE,
  payload: {
    isMobile: window.innerWidth <= SET_WIDTH_FOR_MOBILE,
    windowWidth: window.innerWidth
  }
})