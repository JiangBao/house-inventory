/**
 * homapage
 */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './index.css'

const Home: React.FC = () => {
  const [data, setData] = useState([])

  // get house inventory data
  const fetchData = async () => {
    const res = await axios.get('/api/house/inventory')
    setData(res?.data?.data || [])
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='page-home'>
      <h2>杭州二手房库存</h2>
      <ResponsiveContainer width="80%" height={500}>
        <LineChart data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="day" stroke="#8884d8" />
          <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} />
          <Tooltip />
          <Legend />
          <Line type="monotone" name="贝壳" dataKey="beike" stroke="#3072f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Home
