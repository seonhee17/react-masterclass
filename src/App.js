import styled, { keyframes } from "styled-components";

//``back tick
// css를 써내려갈 부분
const Wrapper = styled.div`
  display : flex;
`;

const rotateAnimation = keyframes`
0% {
  transform:rotate(0deg);
  border-radius : 0px;
}
50%{
  transform:rotate(360deg);
  border-radius : 100px;
}
100%{
  transform:rotate(0deg);
  border-radius : 0px;
  
}` 
;
//${} 자바스크립트의 string interpolation 사용
const Box = styled.div`
  height:200px;
  width:200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${rotateAnimation} 1s linear infinite;
  //element target 처리 할 수 있다.
  span{
    font-size: 36px;
    &:hover{
    font-size: 40px;
    }
    &:active{
      opacity: 0;
    }
  }
  //span:hover과 동일 
  
 
`;




//as 라는 props
//링크로서 사용하고 싶다고 명시 할 수 있게 된다.
function App(){
  return (
        <Wrapper as="header">
          <Box>
            <span>🫠</span>
          </Box>
        </Wrapper>
  );
}

export default App;