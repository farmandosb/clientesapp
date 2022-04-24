package com.armandocode.clientes.be.clientesapp.models.service;

import com.armandocode.clientes.be.clientesapp.models.entity.Cliente;

import java.util.List;

public interface IClienteService {
    public List<Cliente> findALl();
}
