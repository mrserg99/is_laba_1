package `is`.labs.laba_1.entities

import jakarta.persistence.*
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
    open var eyeColor: Int? = null,

    @Basic
    @Column(name = "hair_color", nullable = false)
    open var hairColor: Int? = null,

    @Basic
    @Column(name = "location", nullable = false)
    open var location: Int? = null,

    @Basic
    @Column(name = "birthday", nullable = false)
    open var birthday: OffsetDateTime? = null,

    @Basic
    @Column(name = "height", nullable = false)
    open var height: Int? = null,

    @Basic
    @Column(name = "weight", nullable = false)
    open var weight: Long? = null,
)
