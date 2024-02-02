import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

function App() {
  const [s1, sets1] = useState("")
  const [s2, sets2] = useState("")
  const [s3, sets3] = useState("")
  const [s4, sets4] = useState("")
  const [s5, sets5] = useState("");
  const [res, setRes] = useState([]);


  const result = () => {
    let tot = Number(s1) + Number(s2) + Number(s3) + Number(s4) + Number(s5);
    let avg =tot/5;
    let min1=Math.min(Number(s1) , Number(s2) , Number(s3) , Number(s4) , Number(s5));
    let max1=Math.max(Number(s1) , Number(s2) , Number(s3) , Number(s4) , Number(s5));
    let gread;
    if(avg>90)
    {
      gread="A"
    }
    else if(avg>80)
    {
      gread="B"
    } 
    else if(avg>70)
    {
      gread="C"
    } 
    else if(avg>60)
    {
      gread="D"
    } 
    else if(avg>50)
    {
      gread="E"
    } 
    else if(avg>35)
    {
      gread="f"
    } 
    else if(avg<35)
    {
      gread="fail"
    } 


    let ress,temp=0;
    if(s1>35)
    {
      temp++;
    }
    if(s2>35)
    {
      temp++;
    }
    if(s3>35)
    {
      temp++;
    }
    if(s4>35)
    {
      temp++;
    }
    if(s5>35)
    {
      temp++;
    }
    else if(temp===5 )
    {
      ress="PASS";
    }
    else if(temp==4 || temp==3)
    {
      ress="ATKT";
    }
    else{
      ress="fail";
    }
    setRes([...res, { s1, s2, s3, s4, s5, total: tot,aveg:avg,min:min1,max:max1,gread1:gread}]);
    
  }
  return (
    <div>
      S1=<input type="text" onChange={(e) => { sets1(e.target.value) }} value={s1} /><br />
      S2=<input type="text" onChange={(e) => { sets2(e.target.value) }} value={s2} /><br />
      S3=<input type="text" onChange={(e) => { sets3(e.target.value) }} value={s3} /><br />
      S4=<input type="text" onChange={(e) => { sets4(e.target.value) }} value={s4} /><br />
      S5=<input type="text" onChange={(e) => { sets5(e.target.value) }} value={s5} /><br />
      <button onClick={result}>add</button>

      <table className='BOX' >
        <tr >
          <th>s1</th>
          <th>s2</th>
          <th>s3</th>
          <th>s4</th>
          <th>s5</th>
          <th>total</th>
          <th>avg</th>
          <th>min</th>
          <th>max</th>
          <th>gread</th>
          
        </tr>
        {
          res.map((ele, i) => {
            return (
              <tr>
                <td>{ele.s1}</td>
                <td>{ele.s2}</td>
                <td>{ele.s3}</td>
                <td>{ele.s4}</td>
                <td>{ele.s5}</td>
                <td>{ele.total}</td>
                <td>{ele.aveg}</td>
                <td>{ele.min}</td>
                <td>{ele.max}</td>
                <td>{ele.gread1}</td>

              </tr>
            )
          })
        }
      </table>
    </div>
  );
}
export default App;
