package `is`.labs.laba_1.entities

import jakarta.persistence.*
import java.math.BigInteger
import java.time.OffsetDateTime

@Entity
@Table(name = "studygroup", schema = "is_lab_one", catalog = "postgres")
open class StudyGroupEntity (
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id", nullable = false)
    open var id: Int? = null,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    open var name: String? = null,


    @Column(name = "coordinates", nullable = false)
    @ManyToOne
    open var coordinates: CoordinatesEntity? = null,

    @Basic
    @Column(name = "creation_date", nullable = false)
    open var creationDate: OffsetDateTime? = null,

    @Basic
    @Column(name = "students_count", nullable = true)
    open var studentsCount: Int? = null,

    @Basic
    @Column(name = "expelled_students", nullable = true)
    open var expelledStudents: Int? = null,

    @Basic
    @Column(name = "transferred_students", nullable = true)
    open var transferredStudents: Long? = null,

    @Basic
    @Column(name = "form_of_education", nullable = false)
    open var formOfEducation: Int? = null,

    @Basic
    @Column(name = "should_be_expelled", nullable = true)
    open var shouldBeExpelled: Int? = null,

    @Basic
    @Column(name = "average_mark", nullable = false, precision = 0)
    open var averageMark: BigInteger? = null,

    @Basic
    @Column(name = "semester_enum", nullable = false)
    open var semesterEnum: Int? = null,

    @Basic
    @Column(name = "group_admin", nullable = false)
    open var groupAdmin: Int? = null,
)