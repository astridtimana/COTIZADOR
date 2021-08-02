import styled from 'styled-components'
import {useState} from 'react';
import {getYearsDifference, calculateBrand, calculatePlan} from '../helper'

const Field = styled.div`
    display:flex;
    margin-bottom:1rem;
    align-items:center;
`
const Label = styled.label`
    flex:0 0 100px;
`
const Select = styled.select`
    display:block;
    width:100%;
    padding:1rem;
    border:1px solid #E1E1E1;
    -webkit-appearance:none;
`
const InputRadio = styled.input`
    margin: 0 1rem;
`
const Button = styled.button`
    background-color:#00838F;
    font-size:16px;
    font-weight:bold;
    border:none;
    padding:1rem;
    width:100%;
    text-transform:uppercase;
    color:#FFF;
    transition: background-color .3s ease;
    margin-top:2rem;

    &:hover{
        cursor:pointer;
        background-color:#26C6DA;
    }
`

const Error = styled.div`
    background-color: #F04C56;
    color:white;
    padding:1rem;
    width:94%;
    text-align:center;
    margin-bottom: 2rem;
`
const Form = ({setFinalResult, setLoading}) => {

    const [data , setData] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const [error, setError] = useState(false)

    // extraer valores del state
    const {brand, year, plan} = data

    //leer datos del form 
    const getFormData = (e) =>{
        setData({
            ...data,
            [e.target.name] : e.target.value
        })

    }

    //usuario presiona Submit
    const quoteInsurance = (e) =>{
        e.preventDefault();

        if(brand.trim()==='' || year.trim()==='' || plan.trim()===''){
            setError(true);
            return;
        }
        setError(false);

        //usaremos una base de 2000
        let result = 2000

        //obtener la diferencia de años
        const difference = getYearsDifference(year)
        
        //por cada año restar el 3% 
        result -= ((difference * 3/100) *result);

        // Potenciador:  Americano 15% - Asiático 5% - Europeo 30%
        result = calculateBrand(brand) * result

        // Planes: Básico aumenta 20% - Completo 50%
        result = parseFloat(calculatePlan(plan)*result).toFixed(2);

        setLoading(true)

        setTimeout(() => {
            
            //Elimina el loading
            setLoading(false)

            // Pasa la información al componente
            // Total
            setFinalResult({
                quote : result,
                data
            })
        }, 3000);


    }
    return ( 
        <form
            onSubmit={quoteInsurance}
        >   
            {error? <Error>Todos los campos son obligatorios</Error> : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getFormData}
                >
                    <option value="">--seleccione--</option>
                    <option value="american">--Americano--</option>
                    <option value="european">--Europeo--</option>
                    <option value="asian">--Asiático--</option>
                </Select>
            </Field>

            <Field>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getFormData}
                >
                    <option value="">--seleccione--</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type="radio"
                    value="basico"
                    name="plan"
                    check={plan === "basico"}
                    onChange={getFormData}
                /> Básico
                <InputRadio
                    type="radio"
                    value="completo"
                    name="plan"
                    check={plan === "completo"}
                    onChange={getFormData}
                /> Completo
               
            </Field>

            <Button type="submit">COTIZAR</Button>
        </form>
     );
}
 
export default Form;