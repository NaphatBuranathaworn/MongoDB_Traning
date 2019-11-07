use example
db.postcode.aggregate([
{
    $match: {
        pop: {
            $gt: 50000
        }
    }
}, {
    $project: {
        city: "$city",
        pop: "$pop",
        postcode: "$_id",
        _id: 0,
        state: "$state"
    }
}, {
    $sort: {
        city: 1
    }
}])