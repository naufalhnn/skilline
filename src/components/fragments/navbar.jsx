import NavbarItem from '../elements/navbar-items';
import Button from '../elements/button';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-screen-xl mx-auto py-6'>
      <div>
        <a href=''>
          <img
            src='/logo.svg'
            alt=''
            className='w-24'
          />
        </a>
      </div>
      <div>
        <ul>
          <li className='flex items-center'>
            <NavbarItem>Home</NavbarItem>
            <NavbarItem>Careers</NavbarItem>
            <NavbarItem>Blog</NavbarItem>
            <NavbarItem>About Us</NavbarItem>
            <Button variant='login'>Login</Button>
            <Button variant='signUp'>Sign Up</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
