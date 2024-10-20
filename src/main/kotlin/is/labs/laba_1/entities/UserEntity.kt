package `is`.labs.laba_1.entities

import jakarta.persistence.*

@Entity
@Table(name = "user", schema = "is_lab_one", catalog = "postgres")
open class UserEntity(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        @Column(name = "id", nullable = false)
        open var id: Int? = null,

        @Basic
        @Column(name = "login", nullable = false, length = -1, unique = true)
        open var login: String? = null,

        @Basic
        @Column(name = "password", nullable = false, length = -1)
        open var password: String? = null,
)