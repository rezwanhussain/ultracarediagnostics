export function getAppointmentStatus(status) {
	switch (status) {
		case 'CANCELLED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-orange-600 dark:text-neutral-100 bg-orange-100 dark:bg-orange-600">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'PENDING':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-yellow-600 dark:text-neutral-100 bg-yellow-100 dark:bg-yellow-600">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		case 'CONFIRMED':
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-green-600 dark:text-neutral-100 bg-green-100 dark:bg-green-600">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
		default:
			return (
				<span className="capitalize py-1 px-2 rounded-md text-xs text-gray-600 dark:text-neutral-100 bg-gray-100 dark:bg-gray-600">
					{status.replaceAll('_', ' ').toLowerCase()}
				</span>
			)
	}
}