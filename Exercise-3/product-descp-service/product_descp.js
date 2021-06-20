module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', getProductURL);
    this.add('role:product,cmd:getProductName', getProductName);


    //To DO: add the pattern functions and describe the logic inside the function
    function getProductURL(args, respond){
    
        if (args.productId){
            var product_id_num = parseInt(args.productId)

            for (var product in mockData){
                if ( mockData[product].product_id == product_id_num){
                    console.log(mockData[product].product_url)
                    respond(null, {result: mockData[product].product_url})
                }
            }
        }
        respond(null, { result: ''});
    }

    function getProductName(args, respond){

        if (args.productId){
            var product_id_num = parseInt(args.productId)

            for (var product in mockData){
                if ( mockData[product].product_id == product_id_num){
                    console.log(mockData[product].product_name)
                    respond(null, {result: mockData[product].product_name})
                }
            }
        }
        respond(null, { result: ''});
    }

}