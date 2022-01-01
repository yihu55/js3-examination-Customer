import React,{useState,useEffect} from 'react'
//import { CustomerListContext } from '../App'
import { ButtonStyled } from '../styles/ButtonStyled'
import { CustomerListStyled } from '../styles/CustomerListStyled'
import { LinkStyled } from '../styles/LinkStyled'



export default function CustomerList(props) {
    //const {customerList}=useContext(CustomerListContext)
    //console.log(customerList)

    const [customerList, setCustomerList] = useState(null);

    useEffect(() => {
      fetchData();
    }, []);
  
    function fetchData() {
      const url = "https://frebi.willandskill.eu/api/v1/customers/";
      const token = localStorage.getItem("examination");
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCustomerList(data.results);
        });
    }
   
    function handleOnDelete(id) {
        console.log(id)
        const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
        const token = localStorage.getItem("examination");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
        fetch(url, {
          headers: headers,
          method: "DELETE"
        })
        .then((res) =>fetchData())
        //props.onSuccess())
        
      }

    return (
        
        <CustomerListStyled bg="#f96d00">
          <h2>CUSTOMERS</h2>
          <button onClick={fetchData}>refresh</button>
          {customerList&&customerList.map((customer,id)=>{
            return (
            <div key={customer.id}>
            <LinkStyled to={`/customers/${id}`} color="#222831" padding="true">NAME: {customer.name} id:{customer.id}</LinkStyled>
            <ButtonStyled bg="#222831" color="#f96d00" onClick={(e)=>handleOnDelete(customer.id)}>Delete</ButtonStyled>
            </div>)
          })}
        </CustomerListStyled>
       
    
    )

}

