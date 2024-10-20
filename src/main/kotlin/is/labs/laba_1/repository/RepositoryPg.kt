package `is`.labs.laba_1.repository

import `is`.labs.laba_1.entities.UserEntity
import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.hibernate.SessionFactory
import org.springframework.stereotype.Repository


@Repository
class RepositoryPg {

    private final val SELECT_COUNT = "select count(*) from ColorEntity"

    private final val CHECK_LOGIN_AND_PASSWORD = "select count(*) = 1 from UserEntity where login = :login and password = :pass"
    private final val CHECK_USER = "select count(*) = 0 from UserEntity where login = :login"

    fun selectCount(): Long {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(SELECT_COUNT, Long::class.java)
            return query.resultList[0] ?: -1
        }
    }

    fun authorization(userEntity: UserEntity): Boolean {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(CHECK_LOGIN_AND_PASSWORD, Boolean::class.java)
            query.setParameter("login", userEntity.login)
            query.setParameter("pass", userEntity.password)
            return query.resultList[0]
        }
    }

    fun registration(userEntity: UserEntity): Boolean {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(CHECK_USER, Boolean::class.java)
            query.setParameter("login", userEntity.login)
            if (query.resultList[0]) {
                it.persist(userEntity)
                return true
            }
        }
        return false
    }
}
