function multiplyMatrices(first, second) {
    var secondColumns = transpose(second);
    return first.map(function(row){
        return secondColumns.map(function(column){
            return column.reduce(function(sum, value, index){
                return sum + value * row[index];
            }, 0);
        });
    });
}
