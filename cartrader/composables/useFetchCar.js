export default async (id) => {
  const { data, error } = await useFetch(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Car not found!"
    });
  }

  return { data };
};
