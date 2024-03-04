import styled from "styled-components";

//``back tick
// css를 써내려갈 부분
const Father = styled.div`
  display : flex;
`;
const Box = styled.div`
background-color : ${(props) => props.bgColor};
width : 100px;
height: 100px;
`;

/* const Circle = styled.div`
background-color : ${(props) => props.bgColor};
width : 100px;
height: 100px;
border-radius: 50px;
`; */

//Box 속성 들고오기
const Circle = styled(Box)`
    border-radius: 50px;
`;


/* const BoxOne = styled.div`
background-color : teal;
width : 100px;
height: 100px
`;
const BoxTwo = styled.div`
background-color : tomato;
width : 100px;
height: 100px
`;
 */
 const Text = styled.span`
  color : black;
`;

 
function App(){
  return (
        //<div style={{display :"flex"}}>
        <Father>
          {/*  <div style={{ backgroundColor:"teal",width :100 ,height:100 }}></div> */}
          {/* <BoxOne>
            <Text>Hellow</Text>
          </BoxOne>
          <BoxTwo /> */}
          <Box bgColor="teal"/>
          <Circle bgColor="grey"/>
          <Text>black</Text>
           {/* <div style={{ backgroundColor:"tomato",width :100 ,height:100 }}></div> */}
        </Father>
        // </div>
  );
}

export default App;