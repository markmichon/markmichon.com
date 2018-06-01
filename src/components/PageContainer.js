import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
  @media (min-width: 800px) {
    ${'' /* display: grid; */}
    ${'' /* grid-template-columns: minmax(256px, 1fr) 4fr; */}
    ${'' /* height: 100vh; */}
  }
`
export default PageContainer
