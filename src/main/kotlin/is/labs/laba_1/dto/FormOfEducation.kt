package `is`.labs.laba_1.dto

import com.fasterxml.jackson.annotation.JsonIgnore

enum class FormOfEducation(
    val form: String,
    @JsonIgnore
    val id: Int,
) {
    DISTANCE_EDUCATION("дистант", 1),
    FULL_TIME_EDUCATION("очно", 2),
    EVENING_CLASSES("заочно", 3),
}
