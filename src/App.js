import Header from './components/Headers';
import styled from 'styled-components'
import Form from './components/Form';
import { useState } from 'react';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width:600px;
  margin:0 auto;
`
const FormContainer = styled.div`
  background-color:#FFF;
  padding:3rem;
`
function App() {

  const [finalResult, setFinalResult] = useState({
    quote: 0,
    data:{
      brand:'',
      year:'',
      plan:''
    } 
  })

  const [loading , setLoading] = useState(false)
  
  // extraer datos
  const {quote, data} = finalResult;

  return (
    <Container>
      <Header
        titulo ="Cotizador de seguros"
      />
      <FormContainer>

        <Form
          setFinalResult={setFinalResult}
          setLoading = {setLoading}
        />
        {loading ? <Spinner/> : null}
        
        <Summary
          data={data}
        />
        {!loading ?
          <Result
            quote = {quote}
          /> : null
        }

      </FormContainer>
    </Container>

  );
}

export default App;
