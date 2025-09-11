function Input({ type, value, setValue, placeholder, required }) {
  return (
    <div className="relative w-full">
      <input
        name={placeholder.toLowerCase()}
        required={required}
        type={type}
        className="w-full px-3 py-2 border border-gray-800 placeholder:text-gray-600"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {required ? (
        <span className="absolute top-0 right-0 h-full px-3 py-2 pointer-events-none text-red-800 font-bold">
          *
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
export default Input;
