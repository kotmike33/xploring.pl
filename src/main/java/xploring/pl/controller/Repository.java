package xploring.pl.controller;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface Repository extends JpaRepository <SearchEntity, Long>{
    List<SearchEntity> findByTitleContaining(String keyword);
}
