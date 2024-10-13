package `is`.labs.laba_1

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.autoconfigure.domain.EntityScan
import org.springframework.boot.runApplication

@SpringBootApplication
@EntityScan(basePackages = ["is.labs.laba_1.entities"])
class Laba1Application

fun main(args: Array<String>) {
    runApplication<Laba1Application>(*args)
}
