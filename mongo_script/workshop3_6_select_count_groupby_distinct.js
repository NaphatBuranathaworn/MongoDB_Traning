use example
db.postcode.aggregate([
 {
    $group: {
        _id: {
            state: "$state",
            city: "$city"
        },
    }
}, {
    $group: {
        _id: "$_id.state",
        count_city: {
            $sum : 1
        }
    }
}, {
    $sort: {
        city: 1
    }
}])