function multiplyMatrix(m1, m2) {
    var result,
        i, j, k,
        sum;

    for(i = 0; i < m1.length; i++) {
        result[i] = [];
        for(j = 0; j < m2[0].length; j++) {
            sum = 0;
            for(k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}
