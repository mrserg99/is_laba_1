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
    val id: Int,

    @Basic
    @Column(name = "name", nullable = false, length = -1)
    val name: String,

    @Basic
    @Column(name = "coordinates", nullable = false)
    val coordinates: Int,

    @Basic
    @Column(name = "creation_date", nullable = false)
    val creationDate: OffsetDateTime,

    @Basic
    @Column(name = "students_count", nullable = true)
    val studentsCount: Int,

    @Basic
    @Column(name = "expelled_students", nullable = true)
    val expelledStudents: Int,

    @Basic
    @Column(name = "transferred_students", nullable = true)
    val transferredStudents: Long,

    @Basic
    @Column(name = "form_of_education", nullable = false)
    val formOfEducation: Int,

    @Basic
    @Column(name = "should_be_expelled", nullable = true)
    val shouldBeExpelled: Int,

    @Basic
    @Column(name = "average_mark", nullable = false, precision = 0)
    val averageMark: BigInteger,

    @Basic
    @Column(name = "semester_enum", nullable = false)
    val semesterEnum: Int,

    @Basic
    @Column(name = "group_admin", nullable = false)
    val groupAdmin: Int,
)