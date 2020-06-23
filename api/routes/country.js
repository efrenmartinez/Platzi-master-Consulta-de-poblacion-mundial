<<<<<<< HEAD
"use strict";

const Countries = require("../models/Countries");

async function addCountry(request, h) {
  try {
    // Obtener el objeto enviado
    const countries = new Countries(request.payload);
    // guardar ese objeto
    const countriesSave = await countries.save();
    return h.response(countriesSave).code(201);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function getCountries(request, h) {
  try {
    // Buscar todos los objetos
    const countries = await Countries.find();
    return h.response(countries).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function getCountry(request, h) {
  try {
    // Buscar por id
    const country = await Countries.findById(request.params.id);
    // await Countries.findOne({year: 2020})
    // await Countries.findOne({ year: 2020 }, { country: 1 })
    return h.response(country).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function editCountry(request, h) {
  try {
    // Actualizar enviando primero el id, después el contenido y al final mostrar el objeto actualizado
    const updateCountry = await Countries.findByIdAndUpdate(
      request.params.id,
      request.payload,
      { new: true }
    );
    return h.response(updateCountry).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

async function deleteCountry(request, h) {
  try {
    // Eliminar enviando primero el id
    const deleteCountry = await Countries.findByIdAndDelete(request.params.id);
    return h.response(deleteCountry).code(200);
  } catch (error) {
    return h.response(error).code(500);
  }
}

module.exports = {
  addCountry: addCountry,
  getCountries: getCountries,
  getCountry: getCountry,
  editCountry: editCountry,
  deleteCountry: deleteCountry,
};
=======
'use strict';

const country = require('../controller/country');

module.exports = [
  // Agregar los países
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'POST',
    path: '/countries',
    handler: country.addCountry,
  },
  // Listar los países
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/countries',
    handler: country.getCountries,
  },
  // Buscar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'GET',
    path: '/countries/{id}',
    handler: country.getCountry,
  },
  // Editar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'PUT',
    path: '/countries/{id}',
    handler: country.editCountry,
  },
  // Eliminar un país por su id
  {
    config: {
      cors: {
        origin: ['*'],
        additionalHeaders: ['cache-control', 'x-requested-with'],
      },
    },
    method: 'DELETE',
    path: '/countries/{id}',
    handler: country.deleteCountry,
  },
];
>>>>>>> cb24098a8f4f586519f364807f7d4e923f56f39f
