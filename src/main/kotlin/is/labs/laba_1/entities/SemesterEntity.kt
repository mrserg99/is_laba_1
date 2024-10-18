package `is`.labs.laba_1.entities

import jakarta.persistence.*

@Entity
@Table(name = "semester", schema = "is_lab_one", catalog = "postgres")
open class SemesterEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "value", nullable = false, length = -1)
    open var value: String? = null,
)
