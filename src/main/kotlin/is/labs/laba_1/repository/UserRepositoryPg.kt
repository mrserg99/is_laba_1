package `is`.labs.laba_1.repository

import `is`.labs.laba_1.entities.UserEntity
import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.hibernate.SessionFactory
import org.springframework.stereotype.Repository

@Repository
class UserRepositoryPg {

    private final val CHECK_LOGIN_AND_PASSWORD = "select count(*) = 1 from UserEntity where login = :login and password = :pass"
    private final val CHECK_USER = "select count(*) = 0 from UserEntity where login = :login"


    fun authorization(userEntity: UserEntity): Boolean {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(CHECK_LOGIN_AND_PASSWORD, Boolean::class.java)
            query.setParameter("login", userEntity.login)
            query.setParameter("pass", userEntity.password)
            val result = query.resultList
            return result[0]
        }
    }

    fun registration(userEntity: UserEntity): Boolean {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(CHECK_USER, Boolean::class.java)
            query.setParameter("login", userEntity.login)
            val result = query.resultList
            if (result[0]) {
                val trans = it.beginTransaction()
                it.persist(userEntity)
                trans.commit()
                return true
            }
        }
        return false
    }
}