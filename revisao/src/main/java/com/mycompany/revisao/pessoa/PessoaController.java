package com.mycompany.revisao.pessoa;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pessoas")
@Transactional
public class PessoaController {

    @Autowired
    private EntityManager em;

    @RequestMapping(method = RequestMethod.GET)
    public List<Pessoa> getPessoas() {
        Query consulta = em.createQuery("from Pessoa");
        return consulta.getResultList();
    }

    @RequestMapping(method = RequestMethod.POST)
    public void criarPessoa(@RequestBody Pessoa pessoa) {
        em.persist(pessoa);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public void alterarPessoa(@RequestBody Pessoa pessoa) {
        pessoa = em.merge(pessoa);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public void excluirPessoa(@PathVariable Long id) {
        Pessoa pessoa = em.find(Pessoa.class, id);
        em.remove(pessoa);
    }

}
