package org.campusmolndal.grupp2ecoeatsab;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;


@SpringBootApplication(scanBasePackages = {"org.campusmolndal.grupp2ecoeatsab.services", "org.campusmolndal.grupp2ecoeatsab.repositories"})
@EntityScan("org.campusmolndal.grupp2ecoeatsab.models")
public class Grupp2EcoEatsAbApplication {

	public static void main(String[] args) {
		SpringApplication.run(Grupp2EcoEatsAbApplication.class, args);
	}
}
