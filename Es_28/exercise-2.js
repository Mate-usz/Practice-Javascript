const order = {};

// oppure === undefined
if (!order?.customer?.address?.city){
  console.log('City is required');
}