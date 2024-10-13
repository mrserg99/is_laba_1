package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.service.RepositoryService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.jpa.repository.query.Procedure
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/repository")
class RepositoryHttpController @Autowired constructor(
    private val service: RepositoryService
) {

    @GetMapping("/get/{type}")
    @Procedure(MediaType.APPLICATION_JSON_VALUE)
    fun getData(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @PostMapping("/create/{type}")
    @Procedure(MediaType.APPLICATION_JSON_VALUE)
    fun create(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @PutMapping("/update/{type}")
    @Procedure(MediaType.APPLICATION_JSON_VALUE)
    fun update(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }

    @DeleteMapping("/delete/{type}")
    @Procedure(MediaType.APPLICATION_JSON_VALUE)
    fun delete(
        @PathVariable type: String
    ): String {

        return "OK" //TODO
    }
}
