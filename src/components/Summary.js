import styled from 'styled-components';
import { firstUpperCase } from '../helper';

const SummaryContainer = styled.div`
    padding:1rem;
    text-align:center;
    background-color:#00838F;
    color:#FFF;
    margin:1rem auto;
`
const Summary = ({data}) => {

    // extraer de datos
    const {brand, year, plan} = data

    if(brand === "" || year === "" || plan === "") return null;

    return (
        <SummaryContainer>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {firstUpperCase(brand)}</li>
                <li>Año: {firstUpperCase(year)}</li>
                <li>Plan: {firstUpperCase(plan)}</li>
            </ul>
        </SummaryContainer>
    )
}
 
export default Summary;