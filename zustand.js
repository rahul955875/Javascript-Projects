const useStore = create(
  persist(
    (set) => ({
      counter: 1,
      increment: () => set((state) => ({ counter: state.counter + 1 })),
      decrement: () => set((state) => ({ counter: state.counter - 1 })),
    }),
    { name: "counterCount" }
  )
);

const Counter = () => {
  const { counter, increment, decrement } = useStore();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decrement}>increment</button>
      <button onClick={increment}>decrement</button>
    </>
  );
};
