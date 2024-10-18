package `is`.labs.laba_1.entities

import jakarta.persistence.*
import java.math.BigInteger

@Entity
@Table(name = "location", schema = "is_lab_one", catalog = "postgres")
open class LocationEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "x", nullable = true, precision = 0)
    open var x: BigInteger? = null,

    @Basic
    @Column(name = "y", nullable = true, precision = 0)
    open var y: Double? = null,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    open var name: String? = null,
)
