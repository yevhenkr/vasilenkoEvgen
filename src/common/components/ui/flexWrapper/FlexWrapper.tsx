import styled from 'styled-components'

type FlexWrapperType = {
  align_i?: 'baseline' | 'center' | 'flex-end' | 'flex-start' | 'stretch'
  flexDirection?: 'column' | 'column-reverse' | 'row' | 'row-reverse'
  gap?: string
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  height: 100%;
  flex-direction: ${props => props.flexDirection || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align_i || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  gap: ${props => props.gap || '10px'};
`
