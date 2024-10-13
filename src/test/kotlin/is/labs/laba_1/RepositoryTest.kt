package `is`.labs.laba_1

import `is`.labs.laba_1.repository.RepositoryPg
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest

@SpringBootTest
class RepositoryTest {

    @Autowired
    private lateinit var repositoryPg: RepositoryPg

    @Test
    fun selectCountsTest(){
        val actual = repositoryPg.selectCount()

        Assertions.assertNotNull(actual)
        Assertions.assertEquals(5, actual)
    }
}
