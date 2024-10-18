package `is`.labs.laba_1.entities

import jakarta.persistence.*

@Entity
@Table(name = "form_of_education", schema = "is_lab_one", catalog = "postgres")
open class FormOfEducationEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "value", nullable = true, length = -1)
    open var value: String? = null,
)