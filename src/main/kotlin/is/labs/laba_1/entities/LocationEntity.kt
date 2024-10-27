package `is`.labs.laba_1.entities

import jakarta.persistence.*
import kotlinx.serialization.Serializable

@Entity
@Table(name = "location", schema = "is_lab_one", catalog = "postgres")
@Serializable
open class LocationEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "x", nullable = true)
    open var x: Float? = null,

    @Basic
    @Column(name = "y", nullable = true)
    open var y: Double? = null,

    @Basic
    @Column(name = "name", nullable = false)
    open var name: String? = null,
)
