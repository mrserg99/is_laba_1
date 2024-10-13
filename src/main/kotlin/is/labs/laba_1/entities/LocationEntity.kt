package `is`.labs.laba_1.entities

import jakarta.persistence.*
import java.math.BigInteger

@Entity
@Table(name = "location", schema = "is_lab_one", catalog = "postgres")
open class LocationEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    val id: Int,

    @Basic
    @Column(name = "x", nullable = true, precision = 0)
    val x: BigInteger,

    @Basic
    @Column(name = "y", nullable = true, precision = 0)
    val y: Double,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    val name: String,
)
