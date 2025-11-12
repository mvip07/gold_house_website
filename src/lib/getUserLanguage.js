import { languageService } from '../services/languageService'

/**
 * Til ma'lumotini asinxron tarzda yuklab oladi va xato yuz berganda xavfsiz qaytma qiymatni ta'minlaydi.
 * @param {string} lang - Til kodi (masalan, 'UZ').
 * @param {string} code - Xabar kodi (masalan, '1').
 * @returns {Promise<string>} Yuklab olingan xabar yoki xavfsiz qaytma qiymat.
 */
export const getUserLanguage = async (lang, code) => {
    // Xatoliklar yuz berganda dastur to'xtab qolmasligi uchun try...catch ishlatiladi
    try {
        const res = await languageService.getUserLanguage(lang, code)

        // Agar javob obyekti mavjud bo'lsa va 'message' xususiyatiga ega bo'lsa, uni qaytaramiz
        if (res && res.message) {
            return res.message
        }

        // Agar javob kelgan, lekin u g'ayritabiiy bo'lsa, xavfsiz qaytma qiymat
        return `Menu Item ${code}`
    } catch (error) {
        // Xato yuz berganda (masalan, tarmoq xatosi yoki API javob bermasa)
        console.error(`Til kodi ${code} yuklanmadi:`, error)

        // Dastur ishdan chiqmasligi uchun xavfsiz qaytma qiymatni qaytaramiz
        return `Xato Item ${code}`
    }
}
