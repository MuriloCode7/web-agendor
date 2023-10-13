const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },

  avatar: String,

  email: {
    type: String,
    required: [true, 'E-mail is required'],
  },

  password: {
    type: String,
    default: null,
  },

  phone: {
    type: String,
    required: [true, 'Phone is required'],
  },

  address: {
    city: String,
    uf: String,
    cep: String,
    number: String,
    country: String,
  },

  gender: {
    type: String,
    enum: ['M', 'F'],
    required: true,
  },

  dateBirth: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
    enum: ['A', 'I'],
    default: 'A',
  },

  document: {
    type: {
      type: String,
      enum: ['cpf', 'cnpj'],
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },

  dateRegister: {
    type: Date,
    defaul: Date.now,
  },
});

module.exports = mongoose.model('customer', customer);