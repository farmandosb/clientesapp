package com.armandocode.clientes.be.clientesapp.models.service;

import com.armandocode.clientes.be.clientesapp.models.dao.IClienteDao;
import com.armandocode.clientes.be.clientesapp.models.entity.Cliente;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ClienteService implements IClienteService{
    @Autowired
    private IClienteDao clienteDao;

    @Override
    @Transactional(readOnly = true)
    public List<Cliente> findALl() {
        return (List<Cliente>) clienteDao.findAll();
    }
}
