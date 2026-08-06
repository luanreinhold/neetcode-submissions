class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) {
            return false
        }

        let hashMapS = new Map<string, number>();
        let hashMapT = new Map<string, number>();

        for (let i = 0; i < s.length; i++) {
            hashMapS.set(s[i], (hashMapS.get(s[i]) || 0) + 1);
            hashMapT.set(t[i], (hashMapT.get(t[i]) || 0) + 1);
        }

        for (const [chave,valor] of hashMapS) {
               if (hashMapS.get(chave) != hashMapT.get(chave)) {
                return false
            }
        }
    
        return true
    }
}
