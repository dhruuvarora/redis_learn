const client = require ('./client');

async function init() {
    await client.set('msg:6', 'hey from nodejs');


    const result = await client.get('msg:6');
    console.log("result is ", result);
}

init();