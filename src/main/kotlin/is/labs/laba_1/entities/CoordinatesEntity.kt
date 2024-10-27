package `is`.labs.laba_1.entities

import jakarta.persistence.*
import kotlinx.serialization.Serializable

@Entity
@Table(name = "coordinates", schema = "is_lab_one", catalog = "postgres")
@Serializable
open class CoordinatesEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "x", nullable = true)
    open var x: Double? = null,

    @Basic
    @Column(name = "y", nullable = false)
    open var y: Int? = null,
)
