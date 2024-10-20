package `is`.labs.laba_1.utils

import java.nio.charset.StandardCharsets
import java.security.MessageDigest
import java.security.NoSuchAlgorithmException


class HashGenerate {
    companion object{
        @JvmStatic
        fun createSHA512(text: String): String? {
            try {
                val md: MessageDigest = MessageDigest.getInstance("SHA-512")
                val bytes: ByteArray = md.digest(text.toByteArray(StandardCharsets.UTF_8))
                val sb = StringBuilder()
                for (i in bytes.indices) {
                    sb.append(((bytes[i].toInt() and 0xff) + 0x100).toString(16).substring(1))
                }
                val generatedPassword = sb.toString()
                return generatedPassword
            } catch (e: NoSuchAlgorithmException) {
                e.printStackTrace()
            }
            return null
        }
    }
}