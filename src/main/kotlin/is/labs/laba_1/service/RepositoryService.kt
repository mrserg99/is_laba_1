package `is`.labs.laba_1.service

import `is`.labs.laba_1.entities.CoordinatesEntity
import `is`.labs.laba_1.entities.LocationEntity
import `is`.labs.laba_1.entities.PersonEntity
import `is`.labs.laba_1.entities.StudyGroupEntity
import `is`.labs.laba_1.enums.Type
import `is`.labs.laba_1.error.UnsupportedTypeException
import `is`.labs.laba_1.repository.RepositoryPg
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class RepositoryService @Autowired constructor(
    private val repositoryPg: RepositoryPg
) {
    fun <T> create(entity: T) {
        when(entity){
            is PersonEntity -> {
                if (entity.location?.id == null){
                    val id = repositoryPg.create(entity.location)?.id
                    entity.location?.id = id
                }
            }
            is StudyGroupEntity -> {
                if (entity.coordinates?.id == null) {
                    val id = repositoryPg.create(entity.coordinates)?.id
                    entity.coordinates?.id = id
                }
            }
        }
        repositoryPg.create(entity)
    }

    fun getData(type: String, limit: Int? = null, offset: Int? = null): String {
        return when(type) {
            Type.PERSON.type -> {
                val result = repositoryPg.select(PersonEntity::class.java)
                Json.encodeToString<List<PersonEntity>>(result as List<PersonEntity>)
            }
            Type.GROUP.type -> {
                val result = repositoryPg.select(StudyGroupEntity::class.java)
                Json.encodeToString<List<StudyGroupEntity>>(result as List<StudyGroupEntity>)
            }
            Type.COORDINATE.type -> {
                val result = repositoryPg.select(CoordinatesEntity::class.java)
                Json.encodeToString<List<CoordinatesEntity>>(result as List<CoordinatesEntity>)
            }
            Type.LOCATION.type -> {
                val result = repositoryPg.select(LocationEntity::class.java)
                Json.encodeToString<List<LocationEntity>>(result as List<LocationEntity>)
            }
            else -> throw UnsupportedTypeException("Не поддерживаемый тип")
        }
    }

}
