package `is`.labs.laba_1.controlers

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class WelcomeHttpController {

    @GetMapping("/")
    fun init(){
        //TODO
    }
}
