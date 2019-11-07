use example
db.postcode.mapReduce(
    function() { 
        emit({
            state: this.state,
            city: this.city
        }, this.pop); 
    },
    function(key, values) { 
        return Array.sum(values);
    },{
       out: "pop_totals3"
    }
)