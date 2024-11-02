package `is`.labs.laba_1.entities

import `is`.labs.laba_1.enums.FormOfEducation
import `is`.labs.laba_1.enums.Semester
import `is`.labs.laba_1.serializer.KOffsetDateTimeSerializer
import jakarta.persistence.*
import jakarta.validation.constraints.Min
import kotlinx.serialization.Serializable
import org.hibernate.annotations.OnDelete
import org.hibernate.annotations.OnDeleteAction
import java.time.OffsetDateTime

@Entity
@Table(name = "studygroup", schema = "is_lab_one", catalog = "postgres")
@Serializable
open class StudyGroupEntity(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        @Column(name = "id", nullable = false)
        open var id: Int? = null,

        @Basic
        @Column(name = "name", nullable = false, length = -1)
        open var name: String? = null,

        @ManyToOne
        @OnDelete(action = OnDeleteAction.RESTRICT)
        open var coordinates: CoordinatesEntity? = null,

        @Basic
        @Column(name = "creation_date", nullable = false)
        @Serializable(KOffsetDateTimeSerializer::class)
        open var creationDate: OffsetDateTime = OffsetDateTime.now(),

        @Basic
        @Column(name = "students_count", nullable = true)
        @Min(1)
        open var studentsCount: Int? = null,

        @Basic
        @Column(name = "expelled_students", nullable = true)
        @Min(1)
        open var expelledStudents: Int? = null,

        @Basic
        @Column(name = "transferred_students", nullable = true)
        @Min(1)
        open var transferredStudents: Long? = null,

        @Basic
        @Column(name = "form_of_education", nullable = false)
        @Enumerated(EnumType.STRING)
        open var formOfEducation: FormOfEducation? = null,

        @Basic
        @Column(name = "should_be_expelled", nullable = true)
        @Min(1)
        open var shouldBeExpelled: Int? = null,

        @Basic
        @Column(name = "average_mark", nullable = false)
        @Min(1)
        open var averageMark: Double? = null,

        @Basic
        @Column(name = "semester_enum", nullable = false)
        @Enumerated(EnumType.STRING)
        open var semesterEnum: Semester? = null,

        @OneToOne
        @OnDelete(action = OnDeleteAction.RESTRICT)
        open var groupAdmin: PersonEntity? = null,
)