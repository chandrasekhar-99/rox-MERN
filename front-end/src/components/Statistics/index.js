import React,{useState,useEffect} from 'react'
import './index.css'



const Statistics = (props)=> {
    const [statDataTransaction,setStatDataTransaction] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {setMonth} = props

  


    useEffect(() => {

        const apiUrl = `http://localhost:8000/rox-api?month=${setMonth}`
    
        const fetchData = async () => {
          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setStatDataTransaction(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
    }, [setMonth]);

   
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const statData = statDataTransaction.statisticsData;

    return(
        <div>
          <h2>Statistics - {setMonth}</h2>
          <p>Total Sale:{statData.uniqueSale}</p>
          <p>Total Sold Item:{statData.uniqueSoldData}</p>
          <p>Total Not Sold Item:{statData.uniqueNoSoldData}</p>
        </div>
    )
}

export default Statistics