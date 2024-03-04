import styled from "styled-components";

//``back tick
// css를 써내려갈 부분
const Father = styled.div`
  display : flex;
`;

const Btn = styled.button`
  color:white;
  background-color : tomato;
  border : 0;
  border-radius : 15px;
`
const Input  = styled.input.attrs({ required : true , minLength : 10 })`
      background-color : tomato;
`;

//as 라는 props
//링크로서 사용하고 싶다고 명시 할 수 있게 된다.
function App(){
  return (
        <Father as="header">
          <Btn>Log in</Btn>
          {/* a 태그로 변한다. 
          html 태크 속성 사용가능 */}
          <Input />
          <Input />
          <Input />
          <Input />
          <Input />
          <Btn as="a" href="/" >Log in</Btn>
        </Father>
  );
}

export default App;