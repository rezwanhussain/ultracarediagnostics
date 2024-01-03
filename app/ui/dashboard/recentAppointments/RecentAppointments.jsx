import React from 'react'
import { getAppointmentStatus } from '@/app/constants/AppointmentStatus'
import Link from 'next/link'


const recentOrderData = [
	{
		id: '1',
        patient_id: '23143',
        patient_name: 'Shirley A. Lape',
        gender: 'Female',
        disease: 'Allergy',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'CONFIRMED',
	},
	{
		id: '2',
		patient_id: '65345',
		patient_name: 'Mason Nash',
        gender: 'Male',
        disease: 'Kidney Infection',
		order_date: '2022-05-17T07:14:00',
		order_total: '$836.44',
		current_order_status: 'PENDING',
	},
	{
		id: '3',
		patient_id: '87832',
		patient_name: 'Luke Parkin',
        gender: 'Female',
        disease: 'Heart Disease',
		order_date: '2022-05-16T12:40:00',
		order_total: '$334.50',
		current_order_status: 'CONFIRMED',
	},
	{
		id: '4',
		patient_id: '09832',
		patient_name: 'Anthony Fry',
        gender: 'Male',
        disease: 'Cold Fever',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'PENDING',
	},
	{
		id: '5',
		patient_id: '97632',
		patient_name: 'Ryan Carroll',
        gender: 'Male',
        disease: 'Diabetes',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
	},
    {
		id: '6',
		patient_id: '96453',
		patient_name: 'Ryan Carroll',
        gender: 'Male',
        disease: 'Asthma',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CANCELLED',
	},
    {
		id: '7',
		patient_id: '96454',
		patient_name: 'Jack Ryan',
        gender: 'Male',
        disease: 'Asthma',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
	},
    {
		id: '8',
		patient_id: '09832',
		patient_name: 'Anthony Fry',
        gender: 'Male',
        disease: 'Cold Fever',
		order_date: '2022-05-14T03:24:00',
		order_total: '$876.00',
		current_order_status: 'CANCELLED',
	},
]

const RecentAppointments = () => {
  return (
    <div className="lg:col-span-2 sm:col-span-3 bg-neutral-100 dark:bg-light-black px-4 pt-3 pb-4 mt-5 rounded-md border-2 border-zinc-200 dark:border-neutral-800 flex-1">
        <div className="flex justify-between pt-2">
        <strong className="text-gray-500 font-medium">Recent Appointments</strong>
        <span className='text-sm text-white bg-indigo-600 px-3 py-1 rounded-sm'><Link href="/dashboard/appointments-list">View All</Link></span>
        </div>
			<div className="border-x rounded border-zinc-200 dark:border-neutral-800 mt-3 overflow-x-auto">
				<table className="w-full text-gray-500">
					<thead className='bg-neutral-200 dark:bg-zinc-500 p-3'>
						<tr className='text-left'>
							<th className='px-4 text-sm dark:text-neutral-800 text-neutral-500'>ID</th>
							<th className='text-sm py-2 dark:text-neutral-800 text-neutral-500 whitespace-nowrap'>Patient ID</th>
							<th className='text-sm px-4 dark:text-neutral-800 text-neutral-500 py-2 whitespace-nowrap'>Patients Name</th>
							<th className='text-sm py-2 pr-4 dark:text-neutral-800 text-neutral-500'>Gender</th>
							<th className='text-sm py-2 dark:text-neutral-800 text-neutral-500'>Disease</th>
							<th className='text-sm py-2 dark:text-neutral-800 text-neutral-500'>Date</th>
							<th className='text-sm py-2 dark:text-neutral-800 text-neutral-500'>Status</th>
						</tr>
					</thead>
					<tbody>
						{recentOrderData.map((appointment) => (
							<tr key={appointment.id} className='border-b border-zinc-200 dark:border-neutral-800'>
								<td className='px-4 py-2'>
									<Link href={`/appointments/${appointment.id}`}>{appointment.id}</Link>
								</td>
								<td >
									<Link href={`/appointment/${appointment.patient_id}`}>#{appointment.patient_id}</Link>
								</td>
								<td>
									<Link href={`/patients/${appointment.patient_id}`} className='text-sm px-4 whitespace-nowrap'>{appointment.patient_name}</Link>
								</td>
								<td className='text-sm pr-4'>{appointment.gender}</td>
								<td className='text-sm pr-2 whitespace-nowrap'>{appointment.disease}</td>
								<td className='text-sm pr-4'>{new Date(appointment.order_date).toLocaleDateString()}</td>
								<td className=' text-sm'>{getAppointmentStatus(appointment.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
    </div>
  )
}

export default RecentAppointments