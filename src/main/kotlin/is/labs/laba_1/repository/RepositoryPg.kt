package `is`.labs.laba_1.repository

import `is`.labs.laba_1.entities.CoordinatesEntity
import `is`.labs.laba_1.entities.LocationEntity
import `is`.labs.laba_1.entities.PersonEntity
import `is`.labs.laba_1.entities.StudyGroupEntity
import `is`.labs.laba_1.error.UnsupportedTypeException
import `is`.labs.laba_1.utils.HibernateSessionFactory
import org.hibernate.SessionFactory
import org.springframework.stereotype.Repository


@Repository
class RepositoryPg {

    companion object{
    }

    fun <T> select(type: Class<T>, limit: Int? = null, offset: Int? = null): List<*> {
        var SELECT = "from :type "

        val sessionFactory: SessionFactory = HibernateSessionFactory.sessionFactory
        when(type) {
            PersonEntity::class.java -> {
                SELECT = SELECT.replace(":type", type.name)
            }
            StudyGroupEntity::class.java -> {
                SELECT = SELECT.replace(":type", type.name)
            }
            CoordinatesEntity::class.java -> {
                SELECT = SELECT.replace(":type", type.name)
            }
            LocationEntity::class.java -> {
                SELECT = SELECT.replace(":type", type.name)
            }
            else -> throw UnsupportedTypeException("Не поддерживаемый тип")
        }

        sessionFactory.openSession().use {
            val query = it.createSelectionQuery(SELECT, type)
            if (limit != null) {
                if (limit > 0) {
                    query.setFirstResult(limit)
                }
            }
            if (offset != null) {
                if (offset > 0) {
                    query.setMaxResults(offset)
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
}