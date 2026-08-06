class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // Construir uma nova string com apenas caracteres alfanúmericos
        let cleanString = '';
        // Criar expressão de regex, para validar caracteres alfanuméricos
        const regex = /^[A-Za-z0-9]$/;
        // Percorrer a lista de string, e verificar cada char contra a expressao regex.
        const string = s.split(' ').join();

        for (const letter of string) {
            if(regex.test(letter)) {
                cleanString += letter.toLowerCase()
            }
        }

        // Percorrer a nova string de trás para frente e verificar se os caracteres são validos.
        for (let i = 0; i < cleanString.length; i++) {

            if(cleanString[i] != cleanString[(cleanString.length - 1) - i]) {
                return false
            }
        }
    
        return true

    }
}