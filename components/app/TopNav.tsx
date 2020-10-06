import { GetStaticProps } from 'next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ApiClientClass } from '@/lib/ApiClient';

export default function TopNav({ menuItems }) {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">BMOPress</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const MenuClient = new ApiClientClass('wp-json/wp-api-menus/v2/menus');
  const menuItems = await MenuClient.get('menu-locations/primary');

  return { props: { menuItems } };
};
