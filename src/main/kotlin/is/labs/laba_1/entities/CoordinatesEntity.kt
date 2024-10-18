package `is`.labs.laba_1.entities

import jakarta.persistence.*
import java.math.BigInteger

@Entity
@Table(name = "coordinates", schema = "is_lab_one", catalog = "postgres")
open class CoordinatesEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "x", nullable = true, precision = 0)
    open var x: BigInteger? = null,

    @Basic
    @Column(name = "y", nullable = false)
    open var y: Int? = null,
)
