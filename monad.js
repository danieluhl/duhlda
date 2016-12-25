const createMonad = (modifier) => (value) => {
  const result = {
    bind: (fn) => fn(value)
  };
  if (modifier) {
    modifier(result, value);
  }
  return result;
};


// maybe monad
const maybe = createMonad((monad, value) => {
  if (value == null) {
    monad.is_null = true;
    monad.bind = () => monad;
  }
});

const monad = maybe('hello');
const alert2 = monad.bind(alert);
