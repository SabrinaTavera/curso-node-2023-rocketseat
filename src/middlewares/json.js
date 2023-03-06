export async function json(req, res){

    const buffers = [];

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try{

        const body = JSON.parse(Buffer.concat(buffers).toString());
    }catch{
        req.body = null;
    }

    res.setHeader("Content-Type", "application/json")

}