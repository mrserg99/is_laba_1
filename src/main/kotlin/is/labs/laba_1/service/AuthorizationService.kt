package `is`.labs.laba_1.service

import `is`.labs.laba_1.repository.RepositoryPg
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class AuthorizationService @Autowired constructor (
        private val repository: RepositoryPg
) {

}
