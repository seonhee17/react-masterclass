import styled from "styled-components";

const Title = styled.h1`
    color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

//as 라는 props
//링크로서 사용하고 싶다고 명시 할 수 있게 된다.
function App(){
  return (
        <Wrapper>
            <Title>Hello</Title>
        </Wrapper>
  );
}

export default App;