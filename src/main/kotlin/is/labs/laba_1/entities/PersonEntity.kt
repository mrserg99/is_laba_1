package `is`.labs.laba_1.entities

import jakarta.persistence.*
import java.time.OffsetDateTime

@Entity
@Table(name = "person", schema = "is_lab_one", catalog = "postgres")
open class PersonEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    val id: Int,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    val name: String,

    @Basic
    @Column(name = "eye_color", nullable = false)
    val eyeColor: Int,

    @Basic
    @Column(name = "hair_color", nullable = false)
    val hairColor: Int,

    @Basic
    @Column(name = "location", nullable = false)
    val location: Int,

    @Basic
    @Column(name = "birthday", nullable = false)
    val birthday: OffsetDateTime,

    @Basic
    @Column(name = "height", nullable = false)
    val height: Int,

    @Basic
    @Column(name = "weight", nullable = false)
    val weight: Long,
)
