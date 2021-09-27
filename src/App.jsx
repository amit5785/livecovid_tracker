import React,{useEffect,useState} from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css'


const App=() =>{
  const [sdata,setsdata]=useState([])

  useEffect( async () => {
    const res= await fetch("https://api.covid19india.org/data.json")  
    const data= await res.json();
    setsdata(data.statewise);
    console.log(data)
  },[])


  return (
    <>
    <div className="container-fluid mt-5">
      <div className="main-heading">
      <h1 className="mb-5 text-center"><span className="fw-bolder">India</span> Covid-19 Tracker State-Wise</h1>
      <marquee>These Datas Are Under The Observation Of Health Organisation Of india 👍</marquee>
      </div>
      <div className="table-responsive">
      <table className="table table-hover">
        <thead className="thead-dark">
        <tr>
          <td>State</td>
          <td>Covid-Confirmed</td>
          <td>Covid-Recovered</td>
          <td>Covid-Death</td>
          <td>Total-Active</td>
          <td>Delta-Confirmed</td>
          <td>Delta-Recovered</td>
          <td>Delta-Death</td>
          <td>Updated</td>
        </tr>
        </thead>
        <tbody>
        {sdata.map((data,id)=>{
          return (
            <>
            <tr key={id}>
            <td>{data.state}</td>
            <td>{data.confirmed}</td>
            <td>{data.recovered}</td>
            <td>{data.deaths}</td>
            <td>{data.active}</td>
            <td>{data.deltaconfirmed}</td>
            <td>{data.deltarecovered}</td>
            <td>{data.deltadeaths}</td>
            <td>{data.lastupdatedtime}</td>
            </tr>
            </>
          );
        })}
        </tbody>
      </table>
      </div>
      <marquee>Manage and Handale By : Amit Kumar Singh<br/>amitkumarsingh5785@gmail.com<br/>8585943026</marquee>
    </div>
    </>
  );
}

export default App