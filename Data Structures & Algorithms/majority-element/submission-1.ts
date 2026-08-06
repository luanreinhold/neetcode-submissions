class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        // Determinar a quantia que vai ser usada para comparação. Metade da lista.
        const halfArray: number = nums.length / 2;

        // Criação de HashMap, que vai armazenar a quantia de aparições de cada número.
        const hashMapS: Record<number, number> = {};

        // Percorre a lista e conta a quantia de aparicão. Populando o HashMap
        for (const number of nums) {
            hashMapS[number] = (hashMapS[number] || 0) + 1
        }

        // Percorre a lista para encontrar o número que tem mais aparições
        for (const key in hashMapS) {
            if(hashMapS[key] > halfArray) {
                return Number(key)
            }
        }

    }
}
