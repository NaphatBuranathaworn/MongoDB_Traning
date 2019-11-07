use example
db.getCollection('postcode').find(
    {
        state: 'NY',
        pop: {
            $gt: 20000, $lt : 50000
        }
    }
).sort(
    {
        pop: 1
    }
)