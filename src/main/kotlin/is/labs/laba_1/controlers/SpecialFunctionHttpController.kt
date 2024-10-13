package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.RepositoryService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/functions")
class SpecialFunctionHttpController @Autowired constructor(
    private val service: RepositoryService
) {

    @GetMapping("/deleteByGroupAdmin")
    fun deleteByGroupAdmin(): String {

        return "OK" //TODO
    }

    @GetMapping("/numberOfByShouldBeExpelled")
    fun numberOfByShouldBeExpelled(): String {

        return "OK" //TODO
    }

    @GetMapping("/getStudyGroupByName")
    fun getStudyGroupByName(): String {

        return "OK" //TODO
    }

    @GetMapping("/expelById")
    fun expelById(): String {

        return "OK" //TODO
    }

    @GetMapping("/moveStudents")
    fun moveStudents(): String {

        return "OK" //TODO
    }
}
