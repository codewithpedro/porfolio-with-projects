import { useState } from "react";
import Footer from "../home/Footer";
import Nav from "../home/Nav";
import "./invoice-creator.css"

export default function InvoiceCreator(props){
  const [serviceslist, setServicesList] = useState([]);
  
  const invoiceData = [
    {
        id: 1,
        title: "Wash Car",
        price: 10
    },
    {
        id: 2,
        title: "Mow Lawn",
        price: 20
    },
    {   
        id: 3,
        title: "Pull Weeds",
        price: 30
    },
]

  const servicesListEl = serviceslist.map(service => {
    return (
      <div className="service-item" key={service.id}>
        <div className="title-remove">
          <h4>{service.title}</h4>
          <button className="btn-no-fill" onClick={() => removeService(service.id)}>remove</button>
        </div>

        <h4>$ {service.price}</h4>
      </div>
    );
  });

  const serviceBtnsEl = invoiceData.map(service => {
    return (
      <button className="btn" key={service.id} onClick={() => addService(service.id)} >{service.title}: {service.price}</button>
    );
  });

  let total = 0;

  serviceslist.forEach(service => {
    total += service.price;
  })

  function checkIsSericeInArray(id) {
    for (let i=0; i < serviceslist.length; i++) {
      if (serviceslist[i].id === id) return true;
    }
    return false;
  }

  function addService(id){
    if (checkIsSericeInArray(id)) return;

    setServicesList(prevList => [...prevList, invoiceData[id - 1]]);
  }

  function removeService(id) {
    setServicesList(prevList => prevList.filter(service => service.id !== id))
  }

  function resetInvoice() {
    setServicesList([]);
  }

  return (
    <div>
      <Nav handleClick={props.toggleMode} mode={props.mode}/>
      <div className="height">
        <div className="invoice-creator">
          <div className="container">
            <div className="hero">
              <h1 className="title">Invoice creator</h1>
              <h5 className="subtitle">Thanks for choosing GoodCorp, LLC!</h5>
            </div>
            <hr className="linebreak"/>
            <div className="services-btn">
              {serviceBtnsEl}
            </div>
            <div className="services">
              <div className="title">
                <p className="uppercase">Task</p>
                <p className="uppercase">Total</p>
              </div>
              <div className="services-list">
                {servicesListEl}
              </div>
            </div>
            <hr className="linebreak"/>
            <div className="invoice">
              <div className="notes-total">
                <p className="uppercase">Notes</p>
                <p className="uppercase">Total Amount</p>
              </div>
              <div className="print-amount">
                <small>We accept cash, credit card, or PayPal</small>
                <h4>$ {total}</h4>
              </div>
            </div>
            <button class="btn btn-invoice" onClick={resetInvoice}><i class="fa-solid fa-envelope" ></i> Send invoice</button>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  )
}