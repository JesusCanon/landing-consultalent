interface ButtonProps {
  text: string;
  href?: string;
}

function Button({ text, href = "#formulario" }: ButtonProps) {
  return (
    <a
      href={href}
      className="
      bg-blue-600
      hover:bg-blue-700 hover:scale-105
      transition
      duration-300
      px-8
      py-4
      rounded-xl
      text-white
      font-semibold
      inline-block
      "
    >
      {text}
    </a>
  );
}

export default Button;
