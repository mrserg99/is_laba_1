package `is`.labs.laba_1.entities

import `is`.labs.laba_1.enums.Color
import `is`.labs.laba_1.serializer.KOffsetDateTimeSerializer
import jakarta.persistence.*
import jakarta.validation.constraints.Min
import kotlinx.serialization.Serializable
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.time.OffsetDateTime

@Entity
@Table(name = "person", schema = "is_lab_one", catalog = "postgres")
@Serializable
open class PersonEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    open var FIO: String? = null,

    @Basic
    @Column(name = "eye_color", nullable = false)
    @Enumerated(EnumType.STRING)
    open var eyeColor: Color? = null,

    @Basic
    @Column(name = "hair_color", nullable = false)
    @Enumerated(EnumType.STRING)
    open var hairColor: Color? = null,

    @ManyToOne
    @OnDelete(action = OnDeleteAction.RESTRICT)
    open var location: LocationEntity? = null,

    @Basic
    @Column(name = "birthday", nullable = false)
    @Serializable(KOffsetDateTimeSerializer::class)
    open var birthday: OffsetDateTime? = null,

    @Basic
    @Column(name = "height", nullable = false)
    @Min(1)
    open var height: Int? = null,

    @Basic
    @Column(name = "weight", nullable = false)
    @Min(1)
    open var weight: Long? = null,
)
