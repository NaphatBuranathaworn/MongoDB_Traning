db.sales.aggregate([{
	$group: {
		_id: {
			month: {
				$month: "$date"
			},
			day: {
				$dayOfMonth: "$date"
			},
			year: {
				$year: "$date"
			}
		},
		totalPrice: {
			$sum: {
				$multiply: ["$price", "$quantity"]
			}
		},
		averageQuantity: {
			$avg: "$quantity"
		},
		count: {
			$sum: 1
		}
	}
}])