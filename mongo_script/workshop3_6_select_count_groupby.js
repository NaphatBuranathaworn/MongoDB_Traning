use example
db.postcode.aggregate([
 {
    $group: {
        _id: {
            state: "$state",
            city: "$city"
        }
    }
}, {
    $group: {
        
    }
}, {
    $project: {
        state: "$_id",
        city: "$count",
        _id: 0
    }
}, {
    $sort: {
        city: 1
    }
}])