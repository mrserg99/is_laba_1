package `is`.labs.laba_1.repository

import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.hibernate.SessionFactory
import org.springframework.stereotype.Repository


@Repository
class RepositoryPg {

    private final val SELECT_COUNT = "select count(*) from ColorEntity"

    fun selectCount(): Long {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val query = it.createQuery(SELECT_COUNT, Long::class.java)
            return query.resultList[0] ?: -1
        }
    }
}
