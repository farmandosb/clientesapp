package com.armandocode.clientes.be.clientesapp.models.dao;

import com.armandocode.clientes.be.clientesapp.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

public interface IClienteDao extends CrudRepository<Cliente, Long> {
}
