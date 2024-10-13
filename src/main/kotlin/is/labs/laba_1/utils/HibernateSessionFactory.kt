package `is`.labs.laba_1.utils

import org.hibernate.cfg.Configuration

@Deprecated("Оставил на тот случай если уйду от spring-jpa")
class HibernateSessionFactory {

    companion object {
        @Deprecated("Оставил на тот случай если уйду от spring-jpa")
        val sessionFactory by lazy {
             Configuration().configure()
                .buildSessionFactory()
        }
    }
}
