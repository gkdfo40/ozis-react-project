import styled from "styled-components";

interface CommonLayOutProps {
  children: React.ReactElement | React.ReactElement[];
}
const CommonLayOut = ({ children }: CommonLayOutProps) => {
  return <Container>{children}</Container>;
};
export default CommonLayOut;

const Container = styled.div`
  min-width: 350px;
  min-height: 200px;
  padding: 10px;
  border: 1px solid rgba(50, 50, 93, 0.1);
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
