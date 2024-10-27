package `is`.labs.laba_1.enums

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
enum class Color(
        val colorValue: String,
) {
    @SerialName("чёрный")
    BLACK("чёрный"),

    @SerialName("синий")
    BLUE("синий"),

    @SerialName("жёлтый")
    YELLOW("жёлтый"),

    @SerialName("оранжевый")
    ORANGE("оранжевый"),

    @SerialName("коричневый")
    BROWN("коричневый"),
}
