package `is`.labs.laba_1.dto

import java.time.OffsetDateTime

data class Person(
    val name: String, //Поле не может быть null, Строка не может быть пустой
    val eyeColor: Color, //Поле не может быть null
    val hairColor: Color, //Поле не может быть null
    val location: Location, //Поле не может быть null
    val birthday: OffsetDateTime, //Поле может быть null
    val heigh: Int, //Поле не может быть null, Значение поля должно быть больше 0
    val weight: Long, //Поле может быть null, Значение поля должно быть больше 0
)