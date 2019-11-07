use issuedb
db.sales.mapReduce(
    function() { emit(this.item, this.quantity * this.price); },
    function(key, values) { return Array.sum(values) },
    {
        query: { price : { $gt: 5 }},
        out: 'sale_output2'
    }
)