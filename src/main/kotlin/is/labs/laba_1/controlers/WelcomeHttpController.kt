package `is`.labs.laba_1.controlers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class WelcomeHttpController {

    @GetMapping("/")
    fun init(): String {
        return "login.html"
    }
}
