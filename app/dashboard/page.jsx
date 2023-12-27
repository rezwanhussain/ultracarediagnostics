
const Dashboard = () => {
  return (
    <div className="my-6 g-neutral-100 trnsparent w-full">
      <h1>Dashboard</h1>
      <div className="flex gap-6">
        <div className="w-1/4 bg-neutral-100 dark:bg-[#1F1F1F] h-20 rounded border-[1px] dark:text-[#BFBFBF]">Total Patients</div>
        <div className="w-1/4 bg-neutral-100 dark:bg-[#1F1F1F] h-20 rounded border-[1px] dark:text-[#BFBFBF]">Total Appointments</div>
        <div className="w-1/4 bg-neutral-100 dark:bg-[#1F1F1F] h-20 rounded border-[1px] dark:text-[#BFBFBF]">Total Sales</div>
        <div className="w-1/4 bg-neutral-100 dark:bg-[#1F1F1F] h-20 rounded border-[1px] dark:text-[#BFBFBF]">Total Marketing</div>
      </div>
    </div>
  )
}

export default Dashboard