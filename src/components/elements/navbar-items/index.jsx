const NavbarItem = (props) => {
  const { children } = props;
  return (
    <a
      href='#'
      className='text-base text-secondary mx-8'>
      {children}
    </a>
  );
};

export default NavbarItem;
