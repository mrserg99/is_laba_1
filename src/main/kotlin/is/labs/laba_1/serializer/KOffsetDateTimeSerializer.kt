package `is`.labs.laba_1.serializer

import kotlinx.serialization.KSerializer
import kotlinx.serialization.descriptors.PrimitiveKind
import kotlinx.serialization.descriptors.PrimitiveSerialDescriptor
import kotlinx.serialization.descriptors.SerialDescriptor
import kotlinx.serialization.encoding.Decoder
import kotlinx.serialization.encoding.Encoder
import java.time.OffsetDateTime
import java.time.ZoneOffset
import java.time.format.DateTimeFormatter

object KOffsetDateTimeSerializer : KSerializer<OffsetDateTime> {
    override val descriptor: SerialDescriptor = PrimitiveSerialDescriptor("OffsetDateTime", PrimitiveKind.STRING)
    private val format = DateTimeFormatter.ofPattern("yyyy-MM-dd")
    override fun serialize(encoder: Encoder, value: OffsetDateTime) {
        val string = format.format(value)
        encoder.encodeString(string)
    }

    override fun deserialize(decoder: Decoder): OffsetDateTime {
        val string = decoder.decodeString()
        val time = string.split('-')
        return OffsetDateTime.of(time[0].toInt(), time[1].toInt(), time[2].toInt(), 0, 0, 0, 0, ZoneOffset.of("+03:00"))
    }
}