import styled from 'styled-components'

type FlexWrapperType = {
  alignI?: string
  flexDirection?: string
  flexWrap?: string
  justifyC?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justifyC || 'flex-start'};
  align-items: ${props => props.alignI || 'stretch'};
  flex-wrap: ${props => props.flexWrap || 'nowrap'};
`
