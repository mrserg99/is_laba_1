package `is`.labs.laba_1.dto

import com.fasterxml.jackson.annotation.JsonIgnore

enum class Color(
    val colorValue: String,
    @JsonIgnore
    val id: Int,
) {
    BLACK("чёрный", 1),
    BLUE("синий", 2),
    YELLOW("жёлтый", 3),
    ORANGE("оранжевый", 4),
    BROWN("коричневый", 5),
}
