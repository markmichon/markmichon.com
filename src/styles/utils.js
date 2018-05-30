/* eslint-disable */
export const paddingSetup = (side, breakpoints = ["4rem", "14rem"]) => `
  @media (min-width:800px) {
    padding-${side}: ${breakpoints[0]};
  }
  @media (min-width:1000px) {
    padding-${side}: ${breakpoints[1]};
  }
`
