
export const api = Array.from({ length: 100 })
  .map((_, index) => (
    {
      id: index,
      valor: `Valor: ${Math.ceil(Math.random() * 10)}`,
    }
  ))


