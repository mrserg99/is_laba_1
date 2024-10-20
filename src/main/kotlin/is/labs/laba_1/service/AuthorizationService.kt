package `is`.labs.laba_1.service

import `is`.labs.laba_1.entities.UserEntity
import `is`.labs.laba_1.repository.RepositoryPg
import `is`.labs.laba_1.utils.HashGenerate
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AuthorizationService @Autowired constructor(
        private val repository: RepositoryPg
) {
    fun login(login: String, pass: String): Boolean {
        return repository.authorization(UserEntity(
                login = login,
                password = HashGenerate.createSHA512(pass),
        ))
    }

    fun registration(login: String, pass: String): Boolean {
        return repository.registration(UserEntity(
                login = login,
                password = HashGenerate.createSHA512(pass),
        ))
    }
}
