package `is`.labs.laba_1.dto

import com.fasterxml.jackson.annotation.JsonIgnore

enum class Semester(
    val colorValue: String,
    @JsonIgnore
    val id: Int,
) {
    FIRST("первый", 1),
    THIRD("третий", 2),
    FIFTH("пятый", 3),
    SIXTH("шестой", 4),
    EIGHTH("восьмой", 1);
}
