module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    //To DO: Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductPrice', getProductPrice);


    //To DO: add the pattern functions and describe the logic inside the function

    function getProductPrice(args, respond){

        if (args.productId){
            var product_id_num = parseInt(args.productId)

            for (var product in mockData){
                if ( mockData[product].product_id == product_id_num){
                    console.log(mockData[product].product_price)
                    respond(null, {result: mockData[product].product_price})
                }
            }
        }
        respond(null, { result: ''});
    }
}