const Button = (props) => {
  const { children, variant, addClassName } = props;

  const variants = {
    signUp:
      'w-28 h-10 mx-2 text-base align-text-top text-center rounded-full bg-primary text-white',
    login:
      'w-28 h-10 mx-2 text-base align-text-top text-center rounded-full bg-white text-gray-700 drop-shadow-sm',
    heroButton:
      'px-8 py-3 text-base align-text-top text-center rounded-full bg-primary text-white',
    instructors:
      'px-8 py-3 text-base align-text-top text-center rounded-full bg-transparent border border-white text-white',
    students:
      'px-8 py-3 text-base align-text-top text-center rounded-full bg-blue-500 bg-opacity-90 text-white',
    outlineYellow:
      'px-8 py-3 text-base align-text-top text-center rounded-full bg-transparent border border-primary text-primary',
    subscribe:
      'px-6 py-2 text-base align-text-top text-center rounded-full bg-blue-600 text-white',
  };

  const chosenVariant = variants[variant];

  return (
    <button className={`${chosenVariant} ${addClassName}`}>{children}</button>
  );
};

export default Button;
