package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.AuthorizationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/authorization")
class AuthorizationHttpController @Autowired constructor (
    private val authorizationService: AuthorizationService
) {

    @GetMapping("/login")
    fun login(): String{

        return "OK" //TODO
    }

    @GetMapping("/registration")
    fun registration(): String{

        return "OK" //TODO
    }
}
