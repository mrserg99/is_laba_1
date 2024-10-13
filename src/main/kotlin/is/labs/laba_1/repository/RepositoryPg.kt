package `is`.labs.laba_1.repository

import jakarta.persistence.EntityManager
import jakarta.persistence.PersistenceContext
import org.springframework.stereotype.Repository


@Repository
class RepositoryPg(
    @PersistenceContext
    private val entityManager: EntityManager
) {

    private final val  SELECT_COUNT = "select count(*) from ColorEntity"

    fun selectCount(): Long{
//        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory;

//        sessionFactory.openSession().use {
            val query = entityManager.createQuery(SELECT_COUNT, Long::class.java)
            return query.resultList[0] ?: -1
//        }
    }
}
