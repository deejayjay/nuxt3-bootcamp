import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const { id } = event.context.params;

  const car = cars.find((c) => c.id === +id);

  if (!car) {
    throw createError({
      status: 404,
      message: `Car with id ${id} not found`
    });
  }

  return car;
});
