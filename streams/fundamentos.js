//Streans =>

// process.stdin.pipe(process.stdout)

import {Readable, Transform, Writable} from "node:stream"

class OneToHundredStream extends Readable {

    index  = 1;

    _read(){
        const i = this.index++;

        setTimeout(() =>{

            if(i >100){
                //metodo push é usado para fornecer informaçções pra quem esta usando ela 
                this.push(null)
            }else{
                const buf = Buffer.from(String(i))
    
                this.push(buf)
            }
        }, 1000)


    }

}

class MultiplyByTenStrean extends Writable {

    /**
     * 
     * @param {*} chunk = Pedaço que a gente leu na String de leitura 
     * @param {*} encoding = é como que essa informação esta codificada 
     * @param {*} callback = é uma função que a Sring de escrita precisa chamar quando ela termianr de fazer a operação
     */
    _write(chunk, encoding, callback){
        console.log(chunk.toString()*10)
        callback()
    }

}

class InverseNumberStrean  extends Transform {
    _transform(chunk, encoding, callback){
        const transformed = Number(chunk.toString()) * -1

        callback(null, Buffer.from(String(transformed)) )
    }

}

new OneToHundredStream ()
    .pipe(new InverseNumberStrean)
    .pipe(new MultiplyByTenStrean)