package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.AuthorizationService
import jakarta.servlet.http.HttpSession
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestHeader
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
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
        val loginPassEncode =
                headers[AUTHENTICATE]?.split(" ")?.get(1) ?: return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        val loginPassDecode = String(Base64.getDecoder().decode(loginPassEncode)).split(":")
        val login = loginPassDecode[0]
        if (login.isBlank()) {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
        val pass = loginPassDecode[1]

        if (authorizationService.login(login, pass)) {
            httpSession.setAttribute(login, true)
            return ResponseEntity<HttpStatus>(HttpStatus.OK)
        } else {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
    }

    @GetMapping("/registration")
    fun registration(
            @RequestHeader headers: Map<String, String>,
    ): ResponseEntity<HttpStatus> {
        val loginPassEncode =
                headers[AUTHENTICATE]?.split(" ")?.get(1) ?: return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        val loginPassDecode = String(Base64.getDecoder().decode(loginPassEncode)).split(":")
        val login = loginPassDecode[0]
        if (login.isBlank()) {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
        val pass = loginPassDecode[1]

        if (authorizationService.registration(login, pass)) {
            httpSession.setAttribute(login, true)
            return ResponseEntity<HttpStatus>(HttpStatus.OK)
        } else {
            return ResponseEntity<HttpStatus>(HttpStatus.BAD_REQUEST)
        }
    }
}
