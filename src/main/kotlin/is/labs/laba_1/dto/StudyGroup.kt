package `is`.labs.laba_1.dto

import java.time.OffsetDateTime

data class StudyGroup (
    val id: Long, //Поле не может быть null, Значение поля должно быть больше 0, Значение этого поля должно быть уникальным, Значение этого поля должно генерироваться автоматически
    val name: String, //Поле не может быть null, Строка не может быть пустой
    val coordinates: Coordinates, //Поле не может быть null
    val creationDate: OffsetDateTime, //Поле не может быть null, Значение этого поля должно генерироваться автоматически
    val studentsCount: Int, //Значение поля должно быть больше 0
    val expelledStudents: Int, //Значение поля должно быть больше 0
    val transferredStudents: Long, //Значение поля должно быть больше 0
    val formOfEducation: FormOfEducation, //Поле не может быть null
    val shouldBeExpelled: Int, //Значение поля должно быть больше 0
    val averageMark: Double, //Значение поля должно быть больше 0, Поле не может быть null
    val semesterEnum: Semester, //Поле может быть null
    val groupAdmin: Person, //Поле не может быть null
)
