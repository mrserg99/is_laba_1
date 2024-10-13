package `is`.labs.laba_1.entities

import jakarta.persistence.*

@Entity
@Table(name = "color", schema = "is_lab_one")
open class ColorEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    val id: Int,
    @Basic
    @Column(name = "value", nullable = false, length = -1)
    val value: String
)
