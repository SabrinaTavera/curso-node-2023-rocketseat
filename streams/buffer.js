/**
 * 
 *      Bufer é uma representação de um espaço na memória do computador usado 
 * especificamente para armazenar dados de uma maneira muito rápida, ou seja os dados 
 * armazenados no buffer eles são armazenados ali pra logo eles serem tratados/enviados 
 * para algum lugar e depois logo removidos. São maneiras de salvar e ler da memória de 
 * uma maneira muito performatica. 
 * 
 * Perfomático pq buffer guarda a informação de forma binária!
 * 
 * 
 * 
 * 
**/

const buf  = Buffer.from("ok")

console.log(buf.toJSON())