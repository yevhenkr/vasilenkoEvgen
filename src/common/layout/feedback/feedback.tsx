import { Button } from '@/common/components/ui/button'
import styled from 'styled-components'

export const Feedback = () => {
  return (
    <StyledForm>
      <StyledInput />
      <StyledInput />
      <StyledInput as={'textarea'} />
      <StyledButton onSubmit={() => {}}>Send</StyledButton>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
`
const StyledInput = styled.input``
const StyledButton = styled(Button)`
  background-color: rgba(211, 209, 209, 0.83);
  color: var(--color-dark-700);
  padding: 10px 20px;
  text-align: center;
  max-width: 100px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(211, 209, 209, 1);
  }
`
