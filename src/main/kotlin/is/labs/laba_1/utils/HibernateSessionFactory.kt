package `is`.labs.laba_1.utils

import `is`.labs.laba_1.entities.*
import org.hibernate.cfg.Configuration

class HibernateSessionFactory {

    companion object {
        val sessionFactory by lazy {
            Configuration()
                .configure()
                .addAnnotatedClass(CoordinatesEntity::class.java)
                .addAnnotatedClass(LocationEntity::class.java)
                .addAnnotatedClass(PersonEntity::class.java)
                .addAnnotatedClass(StudyGroupEntity::class.java)
                .addAnnotatedClass(UserEntity::class.java)
                .buildSessionFactory()
        }
    }
}
