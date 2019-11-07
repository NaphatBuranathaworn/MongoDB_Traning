use example
db.postcode.mapReduce(
    function() { 
        emit(this.state, this.pop); 
    },
    function(key, values) { 
        return Array.sum(values);
    },{
       out: "pop_totals"
    }
)