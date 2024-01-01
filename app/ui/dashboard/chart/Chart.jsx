"use client"
import { BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Bar } from "recharts"

let data = [
    {
        name: 'Jan',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Jul',
        Expense: 3490,
        Income: 3800
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800
    },
    {
        name: 'Sep',
        Expense: 2788,
        Income: 3908
    },
    {
        name: 'Oct',
        Expense: 1890,
        Income: 4800
    },
    {
        name: 'Nov',
        Expense: 2390,
        Income: 3800
    },
    {
        name: 'Dec',
        Expense: 3498,
        Income: 4300
    },
];

const Chart = () => {
  return (
  <div className="w-full lg:col-span-2 sm:col-span-3 lg:h-96 md:h-80 sm:h-72 mt-5 bg-neutral-100 dark:bg-light-black p-4 flex flex-col flex-1 rounded-md border-2 border-zinc-200 dark:border-neutral-800">
    <strong className="text-gray-500 font-medium">Transactions</strong>
      <div className="w-full mt-3 flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart width={770} 
                height={300} 
                data={data}
                margin={{
                    top: 20,
                    right: 10,
                    left: -10,
                    bottom: 0
                }}>    
                    <CartesianGrid strokeDasharray="3 3 0 0" vertical={false}/>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Income" fill="#0ea5e9" />
                    <Bar dataKey="Expense" fill="#ea580c" />
            </BarChart>
        </ResponsiveContainer>
    </div>
  </div>
  )
}

export default Chart






