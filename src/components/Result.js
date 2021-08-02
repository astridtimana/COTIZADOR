import styled from 'styled-components';
import { TransitionGroup , CSSTransition} from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127,224,237);
    padding:1rem;
    text-align:center;
    margin-top: 2rem;
` ;

const QuoteResult = styled.div`
    text-align:center;
    padding:.5rem;
    border: 1px solid #26C6DA;
    background-color:rgb(127,224,237);
    margin-top:1rem;
    position:relative;
` ;

const QuoteMessage = styled.p`
    color: #00838F ;
    padding: 1rem;
    text-transform: uppercase;
    font-weight:bold;
    margin:0;
` ;

const Result = ({quote}) => {
    return ( 
        
        (quote === 0) 
            ? <Message>Elige marca, año y tipo de seguro </Message> 
            : (
                <QuoteResult>
                    <TransitionGroup
                        component="p"
                        className = "result"
                    >
                        <CSSTransition
                            classNames="result"
                            key= {quote}
                            timeout = {{enter:500 , exit:500}}
                        >
                            <QuoteMessage>El total es ${quote} </QuoteMessage>
                        </CSSTransition>
                    </TransitionGroup>
                </QuoteResult>
            )

     );
}
 
export default Result;