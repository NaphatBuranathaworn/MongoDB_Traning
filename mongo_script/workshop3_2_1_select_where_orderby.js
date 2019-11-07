use example
db.getCollection('postcode').find(
    {
        state: 'NY',
        pop: {
            $gt: 50000
        }
    }
).sort(
    {
        city: 1
    }
)