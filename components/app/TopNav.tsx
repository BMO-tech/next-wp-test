import { IMenuItem } from '@/lib/models';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function TopNav(props: any) {
  const menuItems: IMenuItem[] = props.menuItems;
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/" className="mr-auto">
          WordPress Hosting Prices
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            {menuItems.map((item: IMenuItem) => (
              <Nav.Link key={item.ID} href={item.url}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav;
