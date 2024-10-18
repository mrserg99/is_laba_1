package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.RepositoryService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/repository")
class RepositoryHttpController @Autowired constructor(
    private val service: RepositoryService
) {

    @GetMapping("/get/{type}")
    fun getData(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @PostMapping("/create/{type}")
    fun create(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @PutMapping("/update/{type}")
    fun update(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @DeleteMapping("/delete/{type}")
    fun delete(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }
}
