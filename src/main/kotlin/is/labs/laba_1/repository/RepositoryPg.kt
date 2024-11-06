package `is`.labs.laba_1.repository

import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.hibernate.SessionFactory
import org.springframework.stereotype.Repository


@Repository
class RepositoryPg {

    companion object {
    }

    fun <T> select(type: Class<T>, page: Int? = null, max: Int? = null): List<*> {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val SELECT = "from ${type.name} "
            val query = it.createSelectionQuery(SELECT, type)
            if (page != null) {
                if (page > 0) {
                    query.setFirstResult(page * (max ?: 10))
                }
            }
            if (max != null) {
                if (max > 0) {
                    query.setMaxResults(max)
                }
            }
            return query.resultList
        }
    }

    fun <T> create(entity: T): T {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val trans = it.beginTransaction()
            it.persist(entity)
            trans.commit()
            return entity
        }
    }

    fun <T> update(entity: T): T {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            val trans = it.beginTransaction()
            it.merge(entity)
            trans.commit()
            return entity
        }
    }

    fun <T> delete(id: Int, type: Class<T>): Boolean {
        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory

        sessionFactory.openSession().use {
            try {
                val trans = it.beginTransaction()
                val deleteEntity = it.merge(id.toString(), type)
                it.remove(deleteEntity)
                trans.commit()
            } catch (ex: Exception) {
                ex.stackTrace
            }
        }
        return true
    }

//    fun checkRelation(id: Int, ): Boolean {
//        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory
//
//        sessionFactory.openSession().use {
//            val trans = it.beginTransaction()
//            it.remove(entity)
//            trans.commit()
//            return entity
//        }
//    }
}