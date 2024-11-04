package `is`.labs.laba_1

import `is`.labs.laba_1.entities.CoordinatesEntity
import `is`.labs.laba_1.entities.LocationEntity
import `is`.labs.laba_1.entities.PersonEntity
import `is`.labs.laba_1.entities.StudyGroupEntity
import `is`.labs.laba_1.enums.Color
import `is`.labs.laba_1.enums.FormOfEducation
import `is`.labs.laba_1.enums.Semester
import `is`.labs.laba_1.repository.RepositoryPg
import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import java.time.OffsetDateTime

@SpringBootTest
class RepositoryTest {

    @Autowired
    private lateinit var repositoryPg: RepositoryPg

    companion object{

    }

    @BeforeEach
    fun before(){
        val sessionFactory = HibernateSessionFactory.sessionFactory
        sessionFactory.openSession().use {
            val trans = it.beginTransaction()
            val deleteCoordinate = it.createQuery("delete from CoordinatesEntity")
            val deleteLocation = it.createQuery("delete from LocationEntity ")
            val deletePerson = it.createQuery("delete from PersonEntity ")
            val deleteStudy = it.createQuery("delete from StudyGroupEntity ")

            deleteStudy.executeUpdate()
            deletePerson.executeUpdate()
            deleteCoordinate.executeUpdate()
            deleteLocation.executeUpdate()

            trans.commit()
        }
    }

    @Test
    fun select(){
        Assertions.assertEquals(0, repositoryPg.select(LocationEntity::class.java).size)
        Assertions.assertEquals(0, repositoryPg.select(CoordinatesEntity::class.java).size)
        Assertions.assertEquals(0, repositoryPg.select(PersonEntity::class.java).size)
        Assertions.assertEquals(0, repositoryPg.select(StudyGroupEntity::class.java).size)

        val newLocation = LocationEntity(
                y = 1.0,
                x = 1.0F,
                name = "test_place"
        )
        val newLocation1 = LocationEntity(
                y = 1.12,
                x = 1.2F,
                name = "test_place1"
        )

        val newCoordinate = CoordinatesEntity(
                y = 1,
                x = 1.0,
        )
        val newCoordinate1 = CoordinatesEntity(
                y = 12,
                x = 1.131,
        )

        repositoryPg.create(newCoordinate)
        repositoryPg.create(newCoordinate1)
        repositoryPg.create(newLocation)
        repositoryPg.create(newLocation1)

        val newPerson = PersonEntity(
                FIO = "Иван Иваныч Иванов",
                eyeColor = Color.BLUE,
                hairColor = Color.BLACK,
                location = newLocation,
                birthday = OffsetDateTime.now(),
                height = 180,
                weight = 60
        )
        val newPerson1 = PersonEntity(
                FIO = "Иван Иваныч Иванов",
                eyeColor = Color.BLUE,
                hairColor = Color.BLACK,
                location = newLocation1,
                birthday = OffsetDateTime.now(),
                height = 180,
                weight = 60
        )

        repositoryPg.create(newPerson)
        repositoryPg.create(newPerson1)

        val newGroup = StudyGroupEntity(
                name = "P3311",
                coordinates = newCoordinate,
                creationDate = OffsetDateTime.now(),
                studentsCount = 10,
                expelledStudents = 5,
                transferredStudents = 2,
                formOfEducation = FormOfEducation.FULL_TIME_EDUCATION,
                shouldBeExpelled = 1,
                averageMark = 4.3,
                semesterEnum = Semester.SIXTH,
                groupAdmin = newPerson,
        )

        repositoryPg.create(newGroup)

        Assertions.assertEquals(2, repositoryPg.select(LocationEntity::class.java).size)
        Assertions.assertEquals(2, repositoryPg.select(CoordinatesEntity::class.java).size)
        Assertions.assertEquals(2, repositoryPg.select(PersonEntity::class.java).size)
        Assertions.assertEquals(1, repositoryPg.select(StudyGroupEntity::class.java).size)
    }

    @Test
    fun create(){
        val sessionFactory = HibernateSessionFactory.sessionFactory

        val newLocation = LocationEntity(
                y = 1.0,
                x = 1.0F,
                name = "test_place"
        )

        val newCoordinate = CoordinatesEntity(
                y = 1,
                x = 1.0,
        )

        Assertions.assertNull(newCoordinate.id)
        val coordinateId = repositoryPg.create(newCoordinate).id
        Assertions.assertNotNull(coordinateId)

        Assertions.assertNull(newLocation.id)
        val locationId = repositoryPg.create(newLocation).id
        Assertions.assertNotNull(locationId)

        sessionFactory.openSession().use {
            Assertions.assertNotNull(it.find(CoordinatesEntity::class.java, newCoordinate.id))
            Assertions.assertNotNull(it.find(LocationEntity::class.java, newLocation.id))
        }

        val newPerson = PersonEntity(
                FIO = "Иван Иваныч Иванов",
                eyeColor = Color.BLUE,
                hairColor = Color.BLACK,
                location = newLocation,
                birthday = OffsetDateTime.now(),
                height = 180,
                weight = 60
        )

        Assertions.assertNull(newPerson.id)
        val personId = repositoryPg.create(newPerson).id
        Assertions.assertNotNull(personId)

        sessionFactory.openSession().use {
            Assertions.assertNotNull(it.find(PersonEntity::class.java, newPerson.id))
        }

        val newGroup = StudyGroupEntity(
                name = "P3311",
                coordinates = newCoordinate,
                creationDate = OffsetDateTime.now(),
                studentsCount = 10,
                expelledStudents = 5,
                transferredStudents = 2,
                formOfEducation = FormOfEducation.FULL_TIME_EDUCATION,
                shouldBeExpelled = 1,
                averageMark = 4.3,
                semesterEnum = Semester.SIXTH,
                groupAdmin = newPerson,
        )

        Assertions.assertNull(newGroup.id)
        val groupId = repositoryPg.create(newGroup).id
        Assertions.assertNotNull(groupId)

        sessionFactory.openSession().use {
            Assertions.assertNotNull(it.find(StudyGroupEntity::class.java, newGroup.id))
        }
    }

    @Test
    fun update(){
        val sessionFactory = HibernateSessionFactory.sessionFactory

        val newLocation = LocationEntity(
                y = 1.0,
                x = 1.0F,
                name = "test_place"
        )
        repositoryPg.create(newLocation)

        val updateLocation = LocationEntity(
                id = newLocation.id,
                x = 2.0F,
                y = 1.12,
                name = "new_place"
        )

        repositoryPg.update(updateLocation)

        val actualLocation = sessionFactory.openSession().use {
            it.find(LocationEntity::class.java, updateLocation.id)
        }
        Assertions.assertEquals(newLocation.id, actualLocation.id)
        Assertions.assertNotEquals(newLocation.x, actualLocation.x)
        Assertions.assertNotEquals(newLocation.y, actualLocation.y)
        Assertions.assertNotEquals(newLocation.name, actualLocation.name)

        Assertions.assertEquals(updateLocation.id, actualLocation.id)
        Assertions.assertEquals(updateLocation.x, actualLocation.x)
        Assertions.assertEquals(updateLocation.y, actualLocation.y)
        Assertions.assertEquals(updateLocation.name, actualLocation.name)

        val newCoordinate = CoordinatesEntity(
                y = 1,
                x = 1.0,
        )

        repositoryPg.create(newCoordinate)

        val updateCoordinate = CoordinatesEntity(
                id = newCoordinate.id,
                y = 12,
                x = 1.311,
        )

        repositoryPg.update(updateCoordinate)

        val actualCoordinate = sessionFactory.openSession().use {
            it.find(CoordinatesEntity::class.java, updateCoordinate.id)
        }
        Assertions.assertEquals(newCoordinate.id, actualCoordinate.id)
        Assertions.assertNotEquals(newCoordinate.x, actualCoordinate.x)
        Assertions.assertNotEquals(newCoordinate.y, actualLocation.y)

        Assertions.assertEquals(updateCoordinate.id, actualCoordinate.id)
        Assertions.assertEquals(updateCoordinate.x, actualCoordinate.x)
        Assertions.assertEquals(updateCoordinate.y, actualCoordinate.y)

        val t0 = OffsetDateTime.now()
        val t1 = OffsetDateTime.now().plusDays(1)
        val newPerson = PersonEntity(
                FIO = "Иван Иваныч Иванов",
                eyeColor = Color.BLUE,
                hairColor = Color.BLACK,
                location = updateLocation,
                birthday = t0,
                height = 180,
                weight = 60
        )

        repositoryPg.create(newPerson)

        val updatePerson = PersonEntity(
                id = newPerson.id,
                FIO = "Сидоров Сидор Сидорович",
                eyeColor = Color.BLACK,
                hairColor = Color.BROWN,
                location = updateLocation,
                birthday = t1,
                height = 200,
                weight = 80
        )

        repositoryPg.update(updatePerson)

        val actualPerson = sessionFactory.openSession().use {
            it.find(PersonEntity::class.java, updatePerson.id)
        }
        Assertions.assertEquals(newPerson.id, actualPerson.id)
        Assertions.assertNotEquals(newPerson.eyeColor, actualPerson.eyeColor)
        Assertions.assertNotEquals(newPerson.hairColor, actualPerson.hairColor)
        Assertions.assertNotEquals(newPerson.birthday?.toLocalDate(), actualPerson.birthday?.toLocalDate())
        Assertions.assertNotEquals(newPerson.height, actualPerson.height)
        Assertions.assertNotEquals(newPerson.weight, actualPerson.weight)

        Assertions.assertEquals(updatePerson.id, actualPerson.id)
        Assertions.assertEquals(updatePerson.eyeColor, actualPerson.eyeColor)
        Assertions.assertEquals(updatePerson.hairColor, actualPerson.hairColor)
        Assertions.assertEquals(updatePerson.birthday?.toLocalDate(), actualPerson.birthday?.toLocalDate())
        Assertions.assertEquals(updatePerson.height, actualPerson.height)
        Assertions.assertEquals(updatePerson.weight, actualPerson.weight)

        val newGroup = StudyGroupEntity(
                name = "P3311",
                coordinates = newCoordinate,
                creationDate = t0,
                studentsCount = 10,
                expelledStudents = 5,
                transferredStudents = 2,
                formOfEducation = FormOfEducation.FULL_TIME_EDUCATION,
                shouldBeExpelled = 1,
                averageMark = 4.3,
                semesterEnum = Semester.SIXTH,
                groupAdmin = newPerson,
        )

        repositoryPg.create(newGroup)

        val updateGroup = StudyGroupEntity(
                id = newGroup.id,
                name = "P3312",
                coordinates = newCoordinate,
                creationDate = t1,
                studentsCount = 20,
                expelledStudents = 4,
                transferredStudents = 1,
                formOfEducation = FormOfEducation.EVENING_CLASSES,
                shouldBeExpelled = 12,
                averageMark = 4.0,
                semesterEnum = Semester.FIFTH,
                groupAdmin = newPerson,
        )

        repositoryPg.update(updateGroup)

        val actualGroup = sessionFactory.openSession().use {
            it.find(StudyGroupEntity::class.java, updateGroup.id)
        }
        Assertions.assertEquals(newGroup.id, actualGroup.id)
        Assertions.assertNotEquals(newGroup.name, actualGroup.name)
        Assertions.assertNotEquals(newGroup.creationDate.toLocalDate(), actualGroup.creationDate.toLocalDate())
        Assertions.assertNotEquals(newGroup.studentsCount, actualGroup.studentsCount)
        Assertions.assertNotEquals(newGroup.expelledStudents, actualGroup.expelledStudents)
        Assertions.assertNotEquals(newGroup.transferredStudents, actualGroup.transferredStudents)
        Assertions.assertNotEquals(newGroup.formOfEducation, actualGroup.formOfEducation)
        Assertions.assertNotEquals(newGroup.shouldBeExpelled, actualGroup.shouldBeExpelled)
        Assertions.assertNotEquals(newGroup.averageMark, actualGroup.averageMark)
        Assertions.assertNotEquals(newGroup.semesterEnum, actualGroup.semesterEnum)

        Assertions.assertEquals(updateGroup.id, actualGroup.id)
        Assertions.assertEquals(updateGroup.name, actualGroup.name)
        Assertions.assertEquals(updateGroup.creationDate.toLocalDate(), actualGroup.creationDate.toLocalDate())
        Assertions.assertEquals(updateGroup.studentsCount, actualGroup.studentsCount)
        Assertions.assertEquals(updateGroup.expelledStudents, actualGroup.expelledStudents)
        Assertions.assertEquals(updateGroup.transferredStudents, actualGroup.transferredStudents)
        Assertions.assertEquals(updateGroup.formOfEducation, actualGroup.formOfEducation)
        Assertions.assertEquals(updateGroup.shouldBeExpelled, actualGroup.shouldBeExpelled)
        Assertions.assertEquals(updateGroup.averageMark, actualGroup.averageMark)
        Assertions.assertEquals(updateGroup.semesterEnum, actualGroup.semesterEnum)
    }
}
