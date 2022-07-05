/**
 * homapage
 */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
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
    <div className="page-home">
      <div className="info-wrapper">
        <h2>杭州二手房库存</h2>
        <span>©<a href="https://github.com/JiangBao">酱鲍</a></span>
      </div>
      <ResponsiveContainer width="80%" height={520}>
        <LineChart data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="day" stroke="rgb(0, 127, 255)" />
          <YAxis domain={['dataMin - 1000', 'dataMax + 1000']} stroke="rgb(0, 127, 255)" />
          <Tooltip />
          <Legend />
          <Line type="monotone" name="贝壳" dataKey="beike" stroke="#3072f6" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Home
