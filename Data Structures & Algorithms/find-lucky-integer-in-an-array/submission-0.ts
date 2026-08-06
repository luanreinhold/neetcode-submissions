class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr: number[]): number {
        // Construir um hashMap, onde a chave é o número e o valor é a quantidade de vezes que se repete.
        let hashMap: Record<number, number> = {};

        // Percorrendo a lista de números e atribuindo a contagem.
        for (const number of arr) {
            hashMap[number] = (hashMap[number] | 0) + 1
        }

        // Determinar qual número é o 'Lucky Integer'.
        let luckyNumber = 0
        for (let [chave, contagem] of Object.entries(hashMap)) {
            // Duas condicionais;
            if (Number(chave) == contagem && Number(chave) > luckyNumber) {
                luckyNumber = contagem
            }

        }
        
        // Caso exista o luckyNumber, retorna ele, caso não, retorna o -1
        return luckyNumber ? luckyNumber : -1
    }
}
