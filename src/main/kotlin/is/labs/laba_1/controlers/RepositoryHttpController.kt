package `is`.labs.laba_1.controlers

import `is`.labs.laba_1.entities.CoordinatesEntity
import `is`.labs.laba_1.entities.LocationEntity
import `is`.labs.laba_1.entities.PersonEntity
import `is`.labs.laba_1.entities.StudyGroupEntity
import `is`.labs.laba_1.enums.Color
import `is`.labs.laba_1.enums.FormOfEducation
import `is`.labs.laba_1.enums.Semester
import `is`.labs.laba_1.enums.Type
import `is`.labs.laba_1.service.RepositoryService
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/repository")
class RepositoryHttpController @Autowired constructor(
        private val service: RepositoryService
) {

    companion object {
    }

    @GetMapping("/get/{type}")
    fun getData(
            @PathVariable type: String,
            @RequestParam("page") page: Int = 0,
            @RequestParam("max") max: Int = 10,
    ): String {
        when (type) {
            Type.COLOR.type -> {
                val result = Json.encodeToString(Color.entries.map { it.colorValue }.toList())
                return result
            }

            Type.SEMESTER.type -> {
                val result = Json.encodeToString(Semester.entries.map { it.semester }.toList())
                return result
            }

            Type.FORM_OF_EDUCATION.type -> {
                val result = Json.encodeToString(FormOfEducation.entries.map { it.form }.toList())
                return result
            }

            else -> {
                val result = service.getData(type, page, max)
                return result
            }
        }
    }

    @PostMapping("/create/{type}")
    fun create(
            @PathVariable type: String,
            @RequestBody message: String,
    ): ResponseEntity<HttpStatus> {
        val result = when (type) {
            Type.PERSON.type -> {
                val newPerson = Json.decodeFromString<PersonEntity>(message)
                service.create(newPerson)
            }

            Type.GROUP.name -> {
                val newGroup = Json.decodeFromString<StudyGroupEntity>(message)
                service.create(newGroup)
            }

            Type.LOCATION.name -> {
                val newLocation = Json.decodeFromString<LocationEntity>(message)
                service.create(newLocation)
            }

            Type.COORDINATE.name -> {
                val newCoordinate = Json.decodeFromString<CoordinatesEntity>(message)
                service.create(newCoordinate)
            }

            else -> null
        }

        return if (result != null) { // TODO global exception handler
            ResponseEntity(HttpStatus.OK)
        } else {
            ResponseEntity(HttpStatus.BAD_REQUEST)
        }
    }

    @PutMapping("/update/{type}")
    fun update(
            @PathVariable type: String,
            @RequestBody message: String,
    ): String {
        when (type) {
            Type.PERSON.type -> {
                val updatePerson = Json.decodeFromString<PersonEntity>(message)
                service.update(updatePerson)
            }

            Type.GROUP.name -> {
                val updateGroup = Json.decodeFromString<StudyGroupEntity>(message)
                service.update(updateGroup)
            }

            Type.LOCATION.name -> {
                val updateLocation = Json.decodeFromString<LocationEntity>(message)
                service.update(updateLocation)
            }

            Type.COORDINATE.name -> {
                val updateCoordinate = Json.decodeFromString<CoordinatesEntity>(message)
                service.update(updateCoordinate)
            }
        }
        return "OK" //TODO
    }

    @DeleteMapping("/delete/{type}")
    fun delete(
            @PathVariable type: String,
            @RequestParam("id") id: Int,
    ): String {
        service.delete(id, type)
        return "OK" //TODO
    }
}
