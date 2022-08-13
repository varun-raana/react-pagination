function Button({ children, onClick }) {
  return (
    <button
      className={`w-fit font-black block border  text-base capitalize p-2`}
      onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
