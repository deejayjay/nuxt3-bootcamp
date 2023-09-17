import Joi from "joi";
import { PrismaClient } from "@prisma/client";

const schema = Joi.object({
  make: Joi.string().required(),
  model: Joi.string().required(),
  year: Joi.number()
    .required()
    .min(1900)
    .max(new Date().getFullYear() + 1),
  miles: Joi.number().required().min(0),
  city: Joi.string().required().min(2),
  numberOfSeats: Joi.number().required().min(1).max(100),
  description: Joi.string().required().min(20),
  features: Joi.array().items(Joi.string()).required(),
  image: Joi.string().required(),
  listerId: Joi.string().required(),
  price: Joi.number().required().min(0),
  name: Joi.string().required()
});

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { error } = await schema.validate(body);

  if (error) {
    throw createError({
      statusCode: 412,
      statusMessage: error.message
    });
  }

  const {
    make,
    model,
    year,
    miles,
    city,
    numberOfSeats,
    description,
    features,
    image,
    listerId,
    price,
    name
  } = body;

  const car = await prisma.car.create({
    data: {
      make,
      model,
      year,
      miles,
      city: city.toLowerCase(),
      numberOfSeats,
      description,
      features,
      image,
      listerId,
      price,
      name
    }
  });

  return car;
});
