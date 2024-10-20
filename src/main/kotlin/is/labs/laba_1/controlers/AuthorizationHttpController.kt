package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.AuthorizationService
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import java.util.*

@RestController
@RequestMapping("/authorization")
class AuthorizationHttpController @Autowired constructor(
        private val authorizationService: AuthorizationService,
        private val httpSession: HttpSession
) {

    companion object {
        const val AUTHENTICATE = "authorization"
    }

    @GetMapping("/login")
    fun login(
            @RequestHeader headers: Map<String, String>,
    ): ResponseEntity<HttpStatus> {
        val loginAndPass = getUserAndPass(headers) ?: return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)

        if (authorizationService.login(loginAndPass.first, loginAndPass.second)) {
            httpSession.setAttribute(loginAndPass.first, true)
            return ResponseEntity<HttpStatus>(HttpStatus.OK)
        } else {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
    }

    @GetMapping("/registration")
    fun registration(
            @RequestHeader headers: Map<String, String>,
            @RequestParam(value = "isAdmin") isAdmin: Boolean,
    ): ResponseEntity<HttpStatus> {
        val loginAndPass = getUserAndPass(headers) ?: return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)

        if (authorizationService.registration(loginAndPass.first, loginAndPass.second, isAdmin)) {
            httpSession.setAttribute(loginAndPass.first, true)
            return ResponseEntity<HttpStatus>(HttpStatus.OK)
        } else {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
    }

    private fun getUserAndPass(headers: Map<String, String>): Pair<String, String>? {
        val loginPassEncode =
                headers[AUTHENTICATE]?.split(" ")?.get(1) ?: return null
        val loginPassDecode = String(Base64.getDecoder().decode(loginPassEncode)).split(":")
        val login = loginPassDecode[0]
        if (login.isBlank()) {
            return null
        }

        val pass = loginPassDecode[1]
        if (pass.toCharArray().size < 8) {
            return null
        }

        return login to pass
    }
}
