use example
db.postcode.aggregate([
 {
    $group: {
        _id: {
            state: "$state",
            city: "$city"
        },
        total_pop : {
            $sum: "$pop"
        }
    }
}, {
    $project: {
        state: "$_id",
        pop: "$total_pop",
        _id: 0
    }
}, {
    $sort: {
        city: 1
    }
}])