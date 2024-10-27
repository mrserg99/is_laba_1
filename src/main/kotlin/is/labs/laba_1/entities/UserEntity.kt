package `is`.labs.laba_1.entities

import jakarta.persistence.*
import kotlinx.serialization.Serializable

@Entity
@Table(name = "user", schema = "is_lab_one", catalog = "postgres")
@Serializable
open class UserEntity(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        @Column(name = "id", nullable = false)
        open var id: Int? = null,

        @Basic
        @Column(name = "login", nullable = false, unique = true)
        open var login: String? = null,

        @Basic
        @Column(name = "password", nullable = false)
        open var password: String? = null,

        @Basic
        @Column(name = "is_admin", nullable = false)
        open var isAdmin: Boolean = false
)