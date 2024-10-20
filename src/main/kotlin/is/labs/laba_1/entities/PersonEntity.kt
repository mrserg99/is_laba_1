package `is`.labs.laba_1.entities

import `is`.labs.laba_1.dto.Color
import jakarta.persistence.*
import jakarta.validation.constraints.Min
import java.time.OffsetDateTime

@Entity
@Table(name = "person", schema = "is_lab_one", catalog = "postgres")
open class PersonEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    open var name: String? = null,

    @Basic
    @Column(name = "eye_color", nullable = false)
    open var eyeColor: Color? = null,

    @Basic
    @Column(name = "hair_color", nullable = false)
    open var hairColor: Color? = null,

    @Column(name = "location", nullable = false)
    @ManyToOne
    open var location: LocationEntity? = null,

    @Basic
    @Column(name = "birthday", nullable = false)
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
