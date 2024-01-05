package xploring.pl.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HelloController{
    @GetMapping("/")
    public ModelAndView defaultMapping() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("main");
        return modelAndView;
    }
    @GetMapping("/login")
    public ModelAndView login() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.setViewName("login");
        return modelAndView;
    }
    @Autowired
    private Repository repository;
    @GetMapping("/api/search")
    @ResponseBody
    public List<SearchEntity> search(@RequestParam String query) {
        SearchEntity search1 = new SearchEntity();
        search1.setAuthor("Author1");
        search1.setTitle("Title1");
        search1.setId(1L);

        SearchEntity search2 = new SearchEntity();
        search2.setAuthor("Author2");
        search2.setTitle("Title2");
        search2.setId(2L);

        SearchEntity search3 = new SearchEntity();
        search3.setAuthor("Author3");
        search3.setTitle("Title3");
        search3.setId(3L);

        List<SearchEntity> errorEntity = new ArrayList<>();
        errorEntity.add(search1);
        errorEntity.add(search2);
        errorEntity.add(search3);

        return errorEntity;
    }

}
